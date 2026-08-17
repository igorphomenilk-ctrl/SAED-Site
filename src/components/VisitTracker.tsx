"use client";

import { useEffect } from "react";

const SESSION_KEY = "saed_visit_session_id";
const NOTIFIED_KEY = "saed_visit_notified";

function createSessionId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID().replace(/-/g, "").slice(0, 32);
  }
  return `s${Date.now().toString(36)}${Math.random().toString(36).slice(2, 12)}`;
}

function detectBrowser(ua: string): string {
  if (/Edg\//i.test(ua)) return "Edge";
  if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua)) return "Chrome";
  if (/Firefox\//i.test(ua)) return "Firefox";
  if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) return "Safari";
  return "Outro";
}

function detectOs(ua: string): string {
  if (/Windows/i.test(ua)) return "Windows";
  if (/Android/i.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
  if (/Mac OS X/i.test(ua)) return "macOS";
  if (/Linux/i.test(ua)) return "Linux";
  return "Outro";
}

function detectDevice(ua: string): string {
  if (/Mobi|Android/i.test(ua)) return "Mobile";
  if (/Tablet|iPad/i.test(ua)) return "Tablet";
  return "Desktop";
}

export function VisitTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      if (sessionStorage.getItem(NOTIFIED_KEY) === "1") return;

      let sessionId = sessionStorage.getItem(SESSION_KEY);
      if (!sessionId) {
        sessionId = createSessionId();
        sessionStorage.setItem(SESSION_KEY, sessionId);
      }

      const ua = navigator.userAgent || "";
      const payload = {
        sessionId,
        path: window.location.pathname + window.location.hash,
        url: window.location.href,
        referrer: document.referrer || "",
        language: navigator.language || "",
        device: detectDevice(ua),
        browser: detectBrowser(ua),
        os: detectOs(ua),
        viewport: `${window.innerWidth}x${window.innerHeight}`,
      };

      // Marca localmente antes do fetch para evitar refresh spam
      sessionStorage.setItem(NOTIFIED_KEY, "1");

      void fetch("/api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {
        // Falha silenciosa — visita nunca deve quebrar o site
      });
    } catch {
      // sessionStorage indisponível (modo restrito) — ignorar
    }
  }, []);

  return null;
}
