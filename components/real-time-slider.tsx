"use client"

import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

interface RealTimeSliderProps {
  label: string
  value: number[]
  onChange: (value: number[]) => void
  min?: number
  max?: number
  step?: number
  unit?: string
  color?: string
}

export function RealTimeSlider({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  unit = "%",
  color = "white",
}: RealTimeSliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Label className={`text-${color} text-sm font-medium`}>{label}</Label>
        <span className="text-gray-400 text-xs font-mono">
          {value[0]}
          {unit}
        </span>
      </div>
      <Slider value={value} onValueChange={onChange} min={min} max={max} step={step} className="w-full" />
    </div>
  )
}
