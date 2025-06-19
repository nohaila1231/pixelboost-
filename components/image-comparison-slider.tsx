"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Eye, Star } from "lucide-react"

interface ImageComparisonSliderProps {
  beforeImage: string
  afterImage: string
  className?: string
}

export function ImageComparisonSlider({ beforeImage, afterImage, className = "" }: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState([50])

  return (
    <Card className={`bg-black/20 backdrop-blur-sm border-white/10 ${className}`}>
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-center gap-2">
          <Eye className="w-5 h-5 text-blue-400" />
          Comparaison Avant/Après
          <Star className="w-5 h-5 text-yellow-400" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          {/* Image améliorée (arrière-plan) */}
          <div className="absolute inset-0">
            <Image src={afterImage || "/placeholder.svg"} alt="Après amélioration" fill className="object-cover" />
          </div>

          {/* Image originale (premier plan avec masque) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition[0]}% 0 0)` }}
          >
            <Image src={beforeImage || "/placeholder.svg"} alt="Avant amélioration" fill className="object-cover" />
          </div>

          {/* Ligne de séparation avec poignée */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-10 cursor-ew-resize"
            style={{ left: `${sliderPosition[0]}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-500">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-blue-500 rounded" />
                <div className="w-1 h-4 bg-blue-500 rounded" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4">
            <Badge variant="destructive" className="bg-red-500/90 text-white">
              <Eye className="w-3 h-3 mr-1" />
              AVANT
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              <Star className="w-3 h-3 mr-1" />
              APRÈS
            </Badge>
          </div>

          {/* Contrôle du slider */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
              <Slider value={sliderPosition} onValueChange={setSliderPosition} max={100} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-white mt-2 font-medium">
                <span>← Original</span>
                <span className="text-blue-400">Glissez pour comparer</span>
                <span>Amélioré →</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
