"use client"

interface MakeupOverlayProps {
  type: "skin" | "blush" | "lips" | "eyes"
  intensity: number
  className?: string
}

export function MakeupOverlay({ type, intensity, className = "" }: MakeupOverlayProps) {
  if (intensity === 0) return null

  const getOverlayStyle = () => {
    switch (type) {
      case "skin":
        return {
          background: `radial-gradient(circle, rgba(255,220,200,${intensity / 200}) 0%, transparent 70%)`,
          mixBlendMode: "soft-light" as const,
        }
      case "blush":
        return {
          background: `
            radial-gradient(ellipse at 30% 40%, rgba(255,150,150,${intensity / 300}) 0%, transparent 20%),
            radial-gradient(ellipse at 70% 40%, rgba(255,150,150,${intensity / 300}) 0%, transparent 20%)
          `,
          mixBlendMode: "multiply" as const,
        }
      case "lips":
        return {
          background: `radial-gradient(ellipse at 50% 65%, rgba(220,100,120,${intensity / 200}) 0%, transparent 10%)`,
          mixBlendMode: "multiply" as const,
        }
      case "eyes":
        return {
          background: `
            radial-gradient(ellipse at 35% 35%, rgba(255,255,255,${intensity / 400}) 0%, transparent 8%),
            radial-gradient(ellipse at 65% 35%, rgba(255,255,255,${intensity / 400}) 0%, transparent 8%)
          `,
          mixBlendMode: "screen" as const,
        }
      default:
        return {}
    }
  }

  return <div className={`absolute inset-0 pointer-events-none ${className}`} style={getOverlayStyle()} />
}
