import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Polyfill for roundRect if not supported
declare global {
  interface CanvasRenderingContext2D {
    roundRect?: (x: number, y: number, w: number, h: number, r: number | number[]) => void;
  }
}

if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x: number, y: number, w: number, h: number, r: number | number[]) {
    const radii = Array.isArray(r) ? r : [r, r, r, r];
    this.beginPath();
    this.moveTo(x + radii[0], y);
    this.arcTo(x + w, y, x + w, y + h, radii[1]);
    this.arcTo(x + w, y + h, x, y + h, radii[2]);
    this.arcTo(x, y + h, x, y, radii[3]);
    this.arcTo(x, y, x + w, y, radii[0]);
    this.closePath();
  };
}

interface ChartCanvasProps {
  id: string
  width?: number
  height?: number
  className?: string
}

const ChartCanvas: React.FC<ChartCanvasProps> = ({ id, width = 980, height = 360, className = "" }) => {
  return (
    <canvas 
      id={id} 
      width={width} 
      height={height} 
      className={className}
      role="img" 
      aria-label={`Аналитический график ${id}`}
    />
  )
}

export const MarketChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const setupCanvas = (canvas: HTMLCanvasElement, ratio: number) => {
      const rect = canvas.getBoundingClientRect()
      const widthCss = Math.max(200, rect.width || canvas.clientWidth || canvas.width)
      const heightCss = widthCss * ratio
      const dpr = window.devicePixelRatio || 1
      canvas.style.height = `${heightCss}px`
      canvas.width = Math.round(widthCss * dpr)
      canvas.height = Math.round(heightCss * dpr)
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      }
      return { ctx, width: widthCss, height: heightCss }
    }

    const drawChart = () => {
      const ratio = 0.4
      const result = setupCanvas(canvas, ratio)
      if (!result.ctx) return
      
      const { ctx, width: W, height: H } = result
      const pad = Math.round(Math.min(W, H) * 0.15)
      const axisLeft = pad
      const axisBottom = H - pad * 1.5
      const chartHeight = H - pad * 2.5

      const labels = ['Точность VRP', 'Скорость обработки', 'Экономия затрат']
      const values = [99.9, 95, 40]
      const scales = [100, 100, 50]
      const barWidth = Math.min(90, (W - pad * 2) / (labels.length * 1.8))
      const gap = (W - pad * 2 - barWidth * labels.length) / (labels.length - 1 || 1)

      // Enhanced gradient with glow effect
      const grad = ctx.createLinearGradient(0, 0, 0, H)
      grad.addColorStop(0, '#60a5fa')
      grad.addColorStop(0.5, '#3b82f6')
      grad.addColorStop(1, '#22c55e')

      // Shadow gradient
      const shadowGrad = ctx.createLinearGradient(0, 0, 0, H)
      shadowGrad.addColorStop(0, 'rgba(96, 165, 250, 0.3)')
      shadowGrad.addColorStop(1, 'rgba(34, 197, 94, 0.3)')

      // Clear canvas
      ctx.clearRect(0, 0, W, H)
      
      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 1
      for (let i = 1; i <= 4; i++) {
        const y = axisBottom - (chartHeight / 4) * i
        ctx.beginPath()
        ctx.moveTo(axisLeft, y)
        ctx.lineTo(W - pad, y)
        ctx.stroke()
      }
      
      // Draw axes with style
      ctx.lineWidth = 2
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.beginPath()
      ctx.moveTo(axisLeft, pad * 0.8)
      ctx.lineTo(axisLeft, axisBottom)
      ctx.lineTo(W - pad, axisBottom)
      ctx.stroke()

      // Draw bars with enhanced styling
      ctx.textAlign = 'center'
      ctx.font = `600 ${Math.max(14, Math.round(H * 0.06))}px Inter, system-ui, sans-serif`
      
      labels.forEach((label, i) => {
        const x = axisLeft + i * (barWidth + gap) + barWidth / 2
        const height = (values[i] / scales[i]) * chartHeight
        const y = axisBottom - height
        
        // Draw shadow first
        ctx.fillStyle = shadowGrad
        ctx.fillRect(x - barWidth / 2 + 4, y + 4, barWidth, height)
        
        // Draw main bar with rounded corners
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.roundRect(x - barWidth / 2, y, barWidth, height, [8, 8, 0, 0])
        ctx.fill()
        
        // Add glow effect
        ctx.shadowColor = i === 0 ? '#60a5fa' : i === 1 ? '#3b82f6' : '#22c55e'
        ctx.shadowBlur = 15
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
        ctx.fillRect(x - barWidth / 2, y, barWidth, height)
        ctx.shadowBlur = 0
        
        // Value label with background
        const valueText = values[i].toString() + (i === 2 ? '%' : '')
        ctx.font = `700 ${Math.max(16, Math.round(H * 0.06))}px Inter, system-ui, sans-serif`
        const textWidth = ctx.measureText(valueText).width
        
        // Background for value with better positioning
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
        ctx.beginPath()
        ctx.roundRect(x - textWidth / 2 - 10, y - 40, textWidth + 20, 28, 14)
        ctx.fill()
        
        // Value text with better color
        ctx.fillStyle = '#ffffff'
        ctx.textBaseline = 'middle'
        ctx.fillText(valueText, x, y - 26)
        
        // Category label with better spacing and color
        ctx.fillStyle = '#f3f4f6'
        ctx.textBaseline = 'top'
        ctx.font = `600 ${Math.max(13, Math.round(H * 0.05))}px Inter, system-ui, sans-serif`
        
        // Multi-line text handling for better readability
        const words = label.split(' ')
        if (words.length > 1 && ctx.measureText(label).width > barWidth + 20) {
          ctx.fillText(words[0], x, axisBottom + 12)
          ctx.fillText(words.slice(1).join(' '), x, axisBottom + 30)
        } else {
          ctx.fillText(label, x, axisBottom + 18)
        }
      })
    }

    drawChart()
    window.addEventListener('resize', drawChart)
    
    return () => window.removeEventListener('resize', drawChart)
  }, [])

  return (
    <figure className="glass p-6 rounded-2xl">
      <figcaption className="text-lg font-semibold text-white mb-4 text-center">
        Показатели эффективности VRP Solution
      </figcaption>
      <canvas 
        ref={canvasRef}
        width={980} 
        height={360} 
        className="w-full h-auto"
        role="img" 
        aria-label="График показателей эффективности"
      />
    </figure>
  )
}

export const ROIChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const setupCanvas = (canvas: HTMLCanvasElement, ratio: number) => {
      const rect = canvas.getBoundingClientRect()
      const widthCss = Math.max(200, rect.width || canvas.clientWidth || canvas.width)
      const heightCss = widthCss * ratio
      const dpr = window.devicePixelRatio || 1
      canvas.style.height = `${heightCss}px`
      canvas.width = Math.round(widthCss * dpr)
      canvas.height = Math.round(heightCss * dpr)
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      }
      return { ctx, width: widthCss, height: heightCss }
    }

    const drawChart = () => {
      const ratio = 0.4
      const result = setupCanvas(canvas, ratio)
      if (!result.ctx) return
      
      const { ctx, width: W, height: H } = result
      const pad = Math.round(Math.min(W, H) * 0.15)
      const axisLeft = pad
      const axisBottom = H - pad * 1.5
      const chartHeight = H - pad * 2.5

      const labels = ['Время доставки', 'Операц. затраты', 'Качество сервиса']
      const baseline = [100, 100, 100]
      const improved = [75, 60, 125]
      const groupWidth = (W - pad * 2) / labels.length
      const barWidth = Math.min(45, groupWidth * 0.35)
      const pairGap = Math.min(20, groupWidth * 0.15)

      // Enhanced gradients
      const beforeGrad = ctx.createLinearGradient(0, 0, 0, H)
      beforeGrad.addColorStop(0, 'rgba(239, 68, 68, 0.7)')
      beforeGrad.addColorStop(1, 'rgba(185, 28, 28, 0.7)')

      const afterGrad = ctx.createLinearGradient(0, 0, 0, H)
      afterGrad.addColorStop(0, '#60a5fa')
      afterGrad.addColorStop(0.5, '#3b82f6')
      afterGrad.addColorStop(1, '#22c55e')

      // Clear canvas
      ctx.clearRect(0, 0, W, H)
      
      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 1
      for (let i = 1; i <= 5; i++) {
        const y = axisBottom - (chartHeight / 5) * i
        ctx.beginPath()
        ctx.moveTo(axisLeft, y)
        ctx.lineTo(W - pad, y)
        ctx.stroke()
      }
      
      // Draw axes with enhanced styling
      ctx.lineWidth = 2
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.beginPath()
      ctx.moveTo(axisLeft, pad * 0.8)
      ctx.lineTo(axisLeft, axisBottom)
      ctx.lineTo(W - pad, axisBottom)
      ctx.stroke()

      ctx.textAlign = 'center'
      ctx.font = `600 ${Math.max(13, Math.round(H * 0.05))}px Inter, system-ui, sans-serif`

      labels.forEach((label, i) => {
        const center = axisLeft + groupWidth * (i + 0.5)
        const baselineHeight = (baseline[i] / 125) * chartHeight
        const improvedHeight = (improved[i] / 125) * chartHeight
        const baseX = center - pairGap / 2 - barWidth
        const improvedX = center + pairGap / 2

        // Baseline bar (before) with rounded corners and shadow
        ctx.shadowColor = 'rgba(239, 68, 68, 0.3)'
        ctx.shadowBlur = 8
        ctx.fillStyle = beforeGrad
        ctx.beginPath()
        ctx.roundRect(baseX, axisBottom - baselineHeight, barWidth, baselineHeight, [6, 6, 0, 0])
        ctx.fill()
        ctx.shadowBlur = 0

        // Improved bar (after) with enhanced styling
        ctx.shadowColor = '#3b82f6'
        ctx.shadowBlur = 12
        ctx.fillStyle = afterGrad
        ctx.beginPath()
        ctx.roundRect(improvedX, axisBottom - improvedHeight, barWidth, improvedHeight, [8, 8, 0, 0])
        ctx.fill()
        ctx.shadowBlur = 0

        // Value labels with backgrounds and better positioning
        const improvedText = `${improved[i]}%`
        const baselineText = `${baseline[i]}%`
        
        ctx.font = `700 ${Math.max(13, Math.round(H * 0.05))}px Inter, system-ui, sans-serif`
        
        // Background for improved value (positioned higher to avoid overlap)
        const improvedTextWidth = ctx.measureText(improvedText).width
        ctx.fillStyle = 'rgba(0, 0, 0, 0.85)'
        ctx.beginPath()
        ctx.roundRect(improvedX + barWidth / 2 - improvedTextWidth / 2 - 8, 
                     axisBottom - improvedHeight - 45, improvedTextWidth + 16, 24, 12)
        ctx.fill()
        
        // Improved value text
        ctx.fillStyle = '#ffffff'
        ctx.textBaseline = 'middle'
        ctx.fillText(improvedText, improvedX + barWidth / 2, axisBottom - improvedHeight - 33)
        
        // Background for baseline value (positioned higher and to the left)
        const baselineTextWidth = ctx.measureText(baselineText).width
        ctx.fillStyle = 'rgba(220, 38, 38, 0.9)'
        ctx.beginPath()
        ctx.roundRect(baseX + barWidth / 2 - baselineTextWidth / 2 - 8, 
                     axisBottom - baselineHeight - 45, baselineTextWidth + 16, 24, 12)
        ctx.fill()
        
        // Baseline value text
        ctx.fillStyle = '#ffffff'
        ctx.fillText(baselineText, baseX + barWidth / 2, axisBottom - baselineHeight - 33)
        
        // Category label with better styling and spacing
        ctx.fillStyle = '#f3f4f6'
        ctx.textBaseline = 'top'
        ctx.font = `600 ${Math.max(12, Math.round(H * 0.045))}px Inter, system-ui, sans-serif`
        
        // Handle text wrapping for long labels
        const words = label.split(' ')
        if (words.length > 1 && ctx.measureText(label).width > groupWidth - 20) {
          ctx.fillText(words[0], center, axisBottom + 12)
          ctx.fillText(words.slice(1).join(' '), center, axisBottom + 28)
        } else {
          ctx.fillText(label, center, axisBottom + 18)
        }
      })

      // Enhanced legend with icons and better spacing
      ctx.textAlign = 'left'
      ctx.font = `600 ${Math.max(12, Math.round(H * 0.04))}px Inter, system-ui, sans-serif`
      
      // Before legend with background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.beginPath()
      ctx.roundRect(pad - 5, pad * 0.5, 120, 25, 12)
      ctx.fill()
      
      ctx.fillStyle = beforeGrad
      ctx.beginPath()
      ctx.roundRect(pad, pad * 0.6, 16, 12, 3)
      ctx.fill()
      ctx.fillStyle = '#ffffff'
      ctx.fillText('До внедрения', pad + 24, pad * 0.7)
      
      // After legend with background  
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.beginPath()
      ctx.roundRect(W - pad - 130, pad * 0.5, 130, 25, 12)
      ctx.fill()
      
      ctx.fillStyle = afterGrad
      ctx.beginPath()
      ctx.roundRect(W - pad - 125, pad * 0.6, 16, 12, 3)
      ctx.fill()
      ctx.fillStyle = '#ffffff'
      ctx.fillText('После внедрения', W - pad - 105, pad * 0.7)
    }

    drawChart()
    window.addEventListener('resize', drawChart)
    
    return () => window.removeEventListener('resize', drawChart)
  }, [])

  return (
    <figure className="glass p-6 rounded-2xl">
      <figcaption className="text-lg font-semibold text-white mb-4 text-center">
        Сравнение до и после внедрения
      </figcaption>
      <canvas 
        ref={canvasRef}
        width={980} 
        height={360} 
        className="w-full h-auto"
        role="img" 
        aria-label="График сравнения показателей до и после"
      />
    </figure>
  )
}

export const AnalyticsStats: React.FC = () => {
  const stats = [
    { 
      number: '99.9%', 
      label: 'Точность оптимизации', 
      color: 'from-blue-400 via-blue-500 to-blue-600',
      icon: '🎯',
      bgGlow: 'group-hover:shadow-blue-500/25'
    },
    { 
      number: '40%', 
      label: 'Снижение затрат', 
      color: 'from-green-400 via-green-500 to-emerald-600',
      icon: '💰',
      bgGlow: 'group-hover:shadow-green-500/25'
    },
    { 
      number: '25%', 
      label: 'Ускорение доставки', 
      color: 'from-purple-400 via-purple-500 to-purple-600',
      icon: '⚡',
      bgGlow: 'group-hover:shadow-purple-500/25'
    },
    { 
      number: '95%', 
      label: 'SLA выполнение', 
      color: 'from-orange-400 via-orange-500 to-red-500',
      icon: '📊',
      bgGlow: 'group-hover:shadow-orange-500/25'
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          className={`group text-center glass p-6 md:p-8 rounded-3xl hover:bg-white/25 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${stat.bgGlow} border border-white/10 hover:border-white/30 min-h-[160px] flex flex-col justify-center`}
        >
          <div className="mb-3 text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
            {stat.icon}
          </div>
          <div className={`text-2xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}>
            {stat.number}
          </div>
          <div className="text-gray-200 font-semibold text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300 leading-tight">
            {stat.label}
          </div>
          
          {/* Decorative glow effect */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent blur-sm"></div>
        </motion.div>
      ))}
    </div>
  )
}

const AnalyticsCharts = { MarketChart, ROIChart, AnalyticsStats, ChartCanvas }
export default AnalyticsCharts
