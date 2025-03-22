"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface LightBeamProps {
  color: string
  shadowColor: string
  pathType: "random" | "wave" | "spiral"
  beamLength?: number
  size?: number
  delay?: number
  duration?: number
}

export default function LightBeam({
  color,
  shadowColor,
  pathType,
  beamLength = 15,
  size = 15,
  delay = 0,
  duration = 20,
}: LightBeamProps) {
  const [path, setPath] = useState<{ x: number; y: number }[]>([])

  // Generate points for the beam to follow based on pathType
  useEffect(() => {
    const generatePoints = () => {
      const points: { x: number; y: number }[] = []
      const numPoints = 12
      const width = typeof window !== "undefined" ? window.innerWidth : 1000
      const height = typeof window !== "undefined" ? window.innerHeight : 800

      if (pathType === "random") {
        // Random path - moves freely across the screen
        for (let i = 0; i < numPoints; i++) {
          points.push({
            x: Math.random() * width * 0.8 + width * 0.1, // Keep within 10-90% of screen width
            y: Math.random() * height * 0.6 + height * 0.2, // Keep within 20-80% of screen height
          })
        }
      } else if (pathType === "wave") {
        // Wave path - follows a sine wave pattern
        const amplitude = height * 0.25
        const frequency = (2 * Math.PI) / width
        const startX = Math.random() * width * 0.2
        const startY = Math.random() * height * 0.5 + height * 0.25

        for (let i = 0; i < numPoints; i++) {
          const x = startX + (width * 0.8 * i) / (numPoints - 1)
          const y = startY + amplitude * Math.sin(frequency * x * 3 + Math.random() * 0.5)
          points.push({ x, y })
        }
      } else if (pathType === "spiral") {
        // Spiral path - creates a loose spiral pattern
        const centerX = width * (0.3 + Math.random() * 0.4)
        const centerY = height * (0.3 + Math.random() * 0.4)
        const radius = Math.min(width, height) * 0.3
        const turns = 1.5

        for (let i = 0; i < numPoints; i++) {
          const angle = (i / (numPoints - 1)) * turns * 2 * Math.PI
          const spiralRadius = (i / (numPoints - 1)) * radius
          const x = centerX + spiralRadius * Math.cos(angle)
          const y = centerY + spiralRadius * Math.sin(angle)
          points.push({ x, y })
        }
      }

      return points
    }

    setPath(generatePoints())

    // Regenerate points periodically
    const interval = setInterval(() => {
      setPath(generatePoints())
    }, duration * 1000)

    return () => clearInterval(interval)
  }, [pathType, duration])

  // Create beam segments
  const createBeamSegments = () => {
    if (path.length === 0) return null

    const segments = []
    for (let i = 0; i < beamLength; i++) {
      segments.push(
        <motion.div
          key={i}
          className="absolute rounded-full"
          initial={{
            width: size,
            height: size,
            opacity: i === 0 ? 0.8 : 0.5 - i * 0.03,
          }}
          animate={{
            width: size - i * 0.5,
            height: size - i * 0.5,
            opacity: i === 0 ? 0.8 : 0.5 - i * 0.03,
            x: path.map((point) => point.x),
            y: path.map((point) => point.y),
          }}
          transition={{
            duration: duration,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: delay + i * 0.15, // Stagger the movement to create snake effect
          }}
          style={{
            backgroundColor: `${color}30`, // 30 is hex for 30% opacity
            filter: `blur(${8 + i * 0.5}px)`,
            boxShadow: `0 0 ${10 + i * 2}px ${5 + i}px ${shadowColor}`,
          }}
        />,
      )
    }
    return segments
  }

  return <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">{createBeamSegments()}</div>
}
