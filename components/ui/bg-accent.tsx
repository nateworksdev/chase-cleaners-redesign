import { cn } from "@/lib/utils";

/**
 * Ibelick-style background accent blobs
 * Subtle, premium background highlights
 * Respects prefers-reduced-motion
 */

type BgAccentVariant = "topRight" | "bottomLeft" | "center" | "dual";

interface BgAccentProps {
  variant?: BgAccentVariant;
  className?: string;
  /** Intensity: 0.1 = subtle, 0.4 = prominent */
  intensity?: number;
}

export function BgAccent({ 
  variant = "topRight", 
  className,
  intensity = 0.25 
}: BgAccentProps) {
  const opacityClass = intensity <= 0.15 ? "opacity-[0.15]" 
    : intensity <= 0.25 ? "opacity-[0.25]" 
    : intensity <= 0.35 ? "opacity-[0.35]" 
    : "opacity-[0.45]";

  return (
    <div 
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        "motion-reduce:hidden",
        className
      )}
      aria-hidden="true"
    >
      {variant === "topRight" && (
        <div 
          className={cn(
            "absolute -right-[10%] -top-[20%] h-[500px] w-[500px] rounded-full blur-[100px]",
            "bg-primary",
            opacityClass
          )} 
        />
      )}
      
      {variant === "bottomLeft" && (
        <div 
          className={cn(
            "absolute -bottom-[20%] -left-[10%] h-[450px] w-[450px] rounded-full blur-[100px]",
            "bg-primary",
            opacityClass
          )} 
        />
      )}
      
      {variant === "center" && (
        <div 
          className={cn(
            "absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]",
            "bg-primary",
            opacityClass
          )} 
        />
      )}
      
      {variant === "dual" && (
        <>
          <div 
            className={cn(
              "absolute -right-[5%] top-[10%] h-[400px] w-[400px] rounded-full blur-[100px]",
              "bg-primary",
              opacityClass
            )} 
          />
          <div 
            className={cn(
              "absolute -left-[5%] bottom-[10%] h-[350px] w-[350px] rounded-full blur-[80px]",
              "bg-accent",
              opacityClass
            )} 
          />
        </>
      )}
    </div>
  );
}
