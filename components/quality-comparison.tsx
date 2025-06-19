"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Eye, Star } from "lucide-react"

interface QualityComparisonProps {
  beforeImage: string
  afterImage: string
  className?: string
}

export function QualityComparison({ beforeImage, afterImage, className = "" }: QualityComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState([50])

  return (
    <Card className={`bg-black/20 backdrop-blur-sm border-white/10 ${className}`}>
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-center gap-2">
          <Eye className="w-5 h-5 text-blue-400" />
          Comparaison Qualité
          <Star className="w-5 h-5 text-yellow-400" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          {/* Image améliorée (arrière-plan) */}
          <Image src={afterImage || "/placeholder.svg"} alt="Qualité améliorée" fill className="object-cover" />

          {/* Image originale (premier plan avec clip) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition[0]}% 0 0)` }}
          >
            <Image src={beforeImage || "/placeholder.svg"} alt="Qualité originale" fill className="object-cover" />
          </div>

          {/* Ligne de séparation */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-10"
            style={{ left: `${sliderPosition[0]}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4">
            <Badge variant="destructive" className="bg-red-500/80">
              <Eye className="w-3 h-3 mr-1" />
              Qualité Faible
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500">
              <Star className="w-3 h-3 mr-1" />
              iPhone 15 Pro
            </Badge>
          </div>

          {/* Contrôle du slider */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
              <Slider value={sliderPosition} onValueChange={setSliderPosition} max={100} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-white mt-2">
                <span>Avant</span>
                <span>Après</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
