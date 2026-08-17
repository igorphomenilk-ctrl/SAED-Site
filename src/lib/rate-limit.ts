/**
 * Rate limiting em memória (adequado a instâncias serverless).
 * Não persiste entre cold starts — ainda reduz abuso por instância.
 */

type Bucket = {
  count: number;
  resetAt: number;
};

type Cooldown = {
  until: number;
};

const buckets = new Map<string, Bucket>();
const cooldowns = new Map<string, Cooldown>();

function prune(map: Map<string, { resetAt?: number; until?: number }>, now: number) {
  if (map.size < 500) return;
  for (const [key, value] of map) {
    const expires = value.resetAt ?? value.until ?? 0;
    if (expires <= now) map.delete(key);
  }
}

export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number,
): { allowed: true; remaining: number } | { allowed: false; retryAfterSec: number } {
  const now = Date.now();
  prune(buckets, now);

  const existing = buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  buckets.set(key, existing);
  return { allowed: true, remaining: limit - existing.count };
}

export function checkCooldown(
  key: string,
  cooldownMs: number,
): { allowed: true } | { allowed: false; retryAfterSec: number } {
  const now = Date.now();
  prune(cooldowns as Map<string, { until?: number }>, now);

  const existing = cooldowns.get(key);
  if (existing && existing.until > now) {
    return {
      allowed: false,
      retryAfterSec: Math.max(1, Math.ceil((existing.until - now) / 1000)),
    };
  }

  cooldowns.set(key, { until: now + cooldownMs });
  return { allowed: true };
}

export async function hashIdentifier(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 32);
}
