"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"

interface EnhancementPreviewProps {
  originalImage: string
  enhancements: {
    quality: string
    makeup: string
    skin: string
    background: string
  }
}

export function EnhancementPreview({ originalImage, enhancements }: EnhancementPreviewProps) {
  const [showEnhancements, setShowEnhancements] = useState(true)

  return (
    <Card className="bg-black/20 backdrop-blur-sm border-white/10">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Aperçu des améliorations</CardTitle>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowEnhancements(!showEnhancements)}
          className="border-white/20 text-white hover:bg-white/10"
        >
          {showEnhancements ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image src={originalImage || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
          {showEnhancements && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          )}
        </div>

        {showEnhancements && (
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                Qualité: {enhancements.quality}
              </Badge>
              <Badge variant="secondary" className="bg-pink-500/20 text-pink-300 border-pink-500/30">
                Maquillage: {enhancements.makeup}
              </Badge>
              <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                Peau: {enhancements.skin}
              </Badge>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                Arrière-plan: {enhancements.background}
              </Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
