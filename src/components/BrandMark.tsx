import Image from "next/image";

type BrandMarkProps = {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { height: 28, width: 118, className: "h-7 w-auto" },
  md: { height: 36, width: 150, className: "h-9 w-auto" },
  lg: { height: 44, width: 184, className: "h-11 w-auto" },
} as const;

export function BrandMark({
  variant = "light",
  size = "md",
  className = "",
}: BrandMarkProps) {
  const dims = sizes[size];

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo-wordmark.svg"
        alt="SAED — Sistema de Apoio Educacional"
        width={dims.width}
        height={dims.height}
        className={`${dims.className} ${variant === "dark" ? "brightness-0" : ""}`}
        priority
      />
    </span>
  );
}

export function SparkIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <path
        d="M12 3.2v2.4M12 18.4v2.4M3.2 12h2.4M18.4 12h2.4M5.9 5.9l1.7 1.7M16.4 16.4l1.7 1.7M18.1 5.9l-1.7 1.7M7.6 16.4l-1.7 1.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
