"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

interface ImageComparisonProps {
  beforeImage: string
  afterImage: string
  className?: string
}

export function ImageComparison({ beforeImage, afterImage, className }: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState([50])

  return (
    <Card className={`relative overflow-hidden ${className}`}>
      <CardContent className="p-0">
        <div className="relative aspect-square">
          {/* After Image (Full) */}
          <Image src={afterImage || "/placeholder.svg"} alt="After enhancement" fill className="object-cover" />

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition[0]}% 0 0)` }}
          >
            <Image src={beforeImage || "/placeholder.svg"} alt="Before enhancement" fill className="object-cover" />
          </div>

          {/* Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
            style={{ left: `${sliderPosition[0]}%` }}
          />

          {/* Slider Control */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <Slider value={sliderPosition} onValueChange={setSliderPosition} max={100} step={1} className="w-full" />
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">Avant</div>
          <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">Après</div>
        </div>
      </CardContent>
    </Card>
  )
}
