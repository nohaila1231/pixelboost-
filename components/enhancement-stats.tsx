"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Camera, Zap, Sparkles, Star, TrendingUp } from "lucide-react"

interface EnhancementStatsProps {
  stats: {
    resolution: string
    sharpness: number
    noise_reduction: number
    color_enhancement: number
    detail_recovery: number
  }
}

export function EnhancementStats({ stats }: EnhancementStatsProps) {
  const improvements = [
    {
      label: "Netteté",
      value: stats.sharpness,
      icon: Camera,
      color: "blue",
      description: "Détails ultra-précis",
    },
    {
      label: "Réduction Bruit",
      value: stats.noise_reduction,
      icon: Zap,
      color: "purple",
      description: "Image parfaitement propre",
    },
    {
      label: "Couleurs",
      value: stats.color_enhancement,
      icon: Sparkles,
      color: "green",
      description: "Couleurs naturelles",
    },
    {
      label: "Récupération Détails",
      value: stats.detail_recovery,
      icon: Star,
      color: "orange",
      description: "Détails restaurés",
    },
  ]

  return (
    <Card className="bg-black/20 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          Améliorations Appliquées par l'IA
          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">QUALITÉ IPHONE 15 PRO</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Résolution */}
        <div className="text-center p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            {stats.resolution}
          </div>
          <p className="text-gray-300 font-semibold">Résolution Améliorée</p>
          <p className="text-sm text-gray-400 mt-1">Super-résolution par IA</p>
        </div>

        {/* Autres améliorations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {improvements.map((improvement) => {
            const Icon = improvement.icon
            return (
              <div
                key={improvement.label}
                className={`p-4 bg-gradient-to-br from-${improvement.color}-500/10 to-${improvement.color}-600/10 rounded-lg border border-${improvement.color}-500/20`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 bg-${improvement.color}-500/20 rounded-full flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 text-${improvement.color}-400`} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{improvement.label}</h4>
                    <p className="text-xs text-gray-400">{improvement.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Amélioration</span>
                    <span className={`text-sm font-bold text-${improvement.color}-400`}>{improvement.value}%</span>
                  </div>
                  <Progress value={improvement.value} className="h-2" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Résumé */}
        <div className="text-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-300 font-semibold">
            ✨ Votre photo a été transformée avec la technologie IA la plus avancée
          </p>
          <p className="text-sm text-gray-400 mt-1">Qualité équivalente à un iPhone 15 Pro Max</p>
        </div>
      </CardContent>
    </Card>
  )
}
