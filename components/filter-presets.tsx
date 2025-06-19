"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface FilterPreset {
  name: string
  description: string
  filters: {
    brightness: number
    contrast: number
    saturation: number
    warmth: number
    sepia: number
    vignette: number
  }
  premium?: boolean
}

const presets: FilterPreset[] = [
  {
    name: "Naturel",
    description: "Amélioration subtile",
    filters: { brightness: 105, contrast: 110, saturation: 105, warmth: 10, sepia: 0, vignette: 0 },
  },
  {
    name: "Vibrant",
    description: "Couleurs éclatantes",
    filters: { brightness: 110, contrast: 120, saturation: 140, warmth: 20, sepia: 0, vignette: 10 },
  },
  {
    name: "Vintage",
    description: "Style rétro",
    filters: { brightness: 95, contrast: 90, saturation: 80, warmth: 30, sepia: 40, vignette: 25 },
    premium: true,
  },
  {
    name: "Cinéma",
    description: "Look cinématographique",
    filters: { brightness: 90, contrast: 130, saturation: 110, warmth: -10, sepia: 0, vignette: 35 },
    premium: true,
  },
  {
    name: "Portrait Pro",
    description: "Parfait pour les portraits",
    filters: { brightness: 108, contrast: 115, saturation: 95, warmth: 15, sepia: 5, vignette: 15 },
    premium: true,
  },
]

interface FilterPresetsProps {
  onApplyPreset: (filters: FilterPreset["filters"]) => void
}

export function FilterPresets({ onApplyPreset }: FilterPresetsProps) {
  return (
    <Card className="bg-black/20 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-white text-lg">Presets Rapides</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-2">
          {presets.map((preset) => (
            <Button
              key={preset.name}
              variant="outline"
              className="justify-start h-auto p-3 border-white/20 text-white hover:bg-white/10"
              onClick={() => onApplyPreset(preset.filters)}
            >
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{preset.name}</span>
                  {preset.premium && (
                    <Badge variant="secondary" className="text-xs bg-yellow-500/20 text-yellow-300">
                      PRO
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1">{preset.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
