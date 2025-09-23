import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, DollarSign, Truck, Target, BarChart3 } from 'lucide-react'

export const TAMSAMSOMChart: React.FC = () => {
  return (
    <figure className="glass p-6 md:p-8 rounded-2xl h-[480px] flex flex-col">
      <figcaption className="text-lg md:text-xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
          🎯
        </div>
        Размер рынка TAM / SAM / SOM
      </figcaption>
      <svg viewBox="0 0 600 600" className="w-full flex-1 max-w-2xl mx-auto">
        <defs>
          <radialGradient id="tamGrad" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
          </radialGradient>
          <radialGradient id="samGrad" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#22c55e" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#15803d" stopOpacity="0.4" />
          </radialGradient>
          <radialGradient id="somGrad" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.6" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.5"/>
          </filter>
        </defs>
        
        {/* Animated circles with glow */}
        <circle cx="300" cy="300" r="250" fill="url(#tamGrad)" stroke="#60a5fa" strokeWidth="3" filter="url(#glow)" opacity="0.9">
          <animate attributeName="stroke-width" values="3;5;3" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="300" cy="300" r="180" fill="url(#samGrad)" stroke="#22c55e" strokeWidth="3" filter="url(#glow)" opacity="0.95">
          <animate attributeName="stroke-width" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="300" cy="300" r="100" fill="url(#somGrad)" stroke="#f59e0b" strokeWidth="4" filter="url(#shadow)">
          <animate attributeName="stroke-width" values="4;6;4" dur="2s" repeatCount="indefinite"/>
        </circle>
        
        {/* Enhanced text positioning without backgrounds */}
        <text x="300" y="60" textAnchor="middle" className="fill-white text-lg font-bold" filter="url(#shadow)">
          Россия: 2.8 трлн ₽ (логистика)
        </text>
        
        <text x="300" y="180" textAnchor="middle" className="fill-white text-base font-semibold" filter="url(#shadow)">
          VRP-решения для транспорта
        </text>
        
        <text x="300" y="480" textAnchor="middle" className="fill-yellow-200 text-lg font-bold" filter="url(#shadow)">
          Наша цель: 850 млн ₽/год (0.3%)
        </text>
        
        {/* Legend with improved spacing and no backgrounds */}
        <g transform="translate(100, 540)">
          <circle cx="0" cy="0" r="10" fill="url(#tamGrad)" stroke="#60a5fa" strokeWidth="2"/>
          <text x="20" y="5" className="fill-white text-base font-semibold" filter="url(#shadow)">TAM - Общий рынок</text>
        </g>
        <g transform="translate(300, 540)">
          <circle cx="0" cy="0" r="10" fill="url(#samGrad)" stroke="#22c55e" strokeWidth="2"/>
          <text x="20" y="5" className="fill-white text-base font-semibold" filter="url(#shadow)">SAM - Наша ниша</text>
        </g>
        <g transform="translate(480, 540)">
          <circle cx="0" cy="0" r="10" fill="url(#somGrad)" stroke="#f59e0b" strokeWidth="2"/>
          <text x="20" y="5" className="fill-white text-base font-semibold" filter="url(#shadow)">SOM - Цель</text>
        </g>
      </svg>
    </figure>
  )
}

export const DeliveryMetrics: React.FC = () => {
  const metrics = [
    {
      icon: <Truck className="w-8 h-8 text-primary-400" />,
      title: '280 млрд ₽',
      subtitle: 'размер ниши SAM',
      description: 'VRP-решения для логистики и транспорта в России'
    },
    {
      icon: <Target className="w-8 h-8 text-accent-400" />,
      title: '0.3%',
      subtitle: 'целевая доля рынка',
      description: 'за 3 года = 850 млн ₽ выручки'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-400" />,
      title: '8:1',
      subtitle: 'LTV к CAC',
      description: 'CAC 350 тыс. ₽, LTV 2.8 млн ₽ - рентабельная модель'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-accent-400" />,
      title: '>75%',
      subtitle: 'валовая маржа',
      description: 'высокорентабельная бизнес-модель для РФ рынка'
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.15,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          className="group glass p-6 md:p-8 rounded-3xl text-center hover:bg-white/25 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-white/10 hover:border-white/30 relative overflow-hidden min-h-[200px] flex flex-col justify-center"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <div className="p-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300">
                {metric.icon}
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:scale-105 transition-transform duration-300">
              {metric.title}
            </h3>
            <p className="text-accent-300 font-bold mb-3 tracking-wide group-hover:text-accent-200 transition-colors duration-300 text-sm md:text-base">
              {metric.subtitle}
            </p>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              {metric.description}
            </p>
          </div>
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
               style={{
                 background: 'linear-gradient(45deg, transparent, rgba(96, 165, 250, 0.3), transparent, rgba(34, 197, 94, 0.3), transparent)',
                 backgroundSize: '200% 200%',
                 animation: 'gradient-border 3s ease infinite'
               }}>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export const ROICalculator: React.FC = () => {
  const beforeAfter = [
    {
      title: 'До внедрения (100 курьеров)',
      icon: <Clock className="w-6 h-6 text-gray-400" />,
      metrics: [
        { label: 'Время маршрута', value: '8 часов', color: 'text-red-400' },
        { label: 'Заказов на курьера', value: '25-30', color: 'text-red-400' },
        { label: 'Стоимость доставки', value: '120₽', color: 'text-red-400' },
        { label: 'Процент опозданий', value: '15%', color: 'text-red-400' },
        { label: 'Месячные затраты', value: '~6.5 млн ₽', color: 'text-red-400 font-bold' }
      ]
    },
    {
      title: 'После внедрения',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      metrics: [
        { label: 'Время маршрута', value: '6.5 часов', color: 'text-green-400' },
        { label: 'Заказов на курьера', value: '35-40', color: 'text-green-400' },
        { label: 'Стоимость доставки', value: '85₽', color: 'text-green-400' },
        { label: 'Процент опозданий', value: '3%', color: 'text-green-400' },
        { label: 'Месячные затраты', value: '~4.2 млн ₽', color: 'text-green-400 font-bold' }
      ]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="glass p-8 rounded-2xl"
    >
      <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
        <BarChart3 className="w-8 h-8 text-primary-400" />
        Расчет экономии для компании
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {beforeAfter.map((section, index) => (
          <div key={index} className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center gap-3">
              {section.icon}
              {section.title}
            </h4>
            <ul className="space-y-3">
              {section.metrics.map((metric, metricIndex) => (
                <li key={metricIndex} className="flex justify-between items-center">
                  <span className="text-gray-300">{metric.label}:</span>
                  <span className={metric.color}>{metric.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-xl border border-accent-400/30">
        <div className="text-center">
          <p className="text-accent-400 font-semibold text-lg">💰 Общая экономия</p>
          <p className="text-3xl font-bold text-white">2.3 млн ₽/месяц</p>
          <p className="text-gray-300 text-sm mt-2">Окупаемость через 4 месяца</p>
        </div>
      </div>
    </motion.div>
  )
}

export const TimelineChart: React.FC = () => {
  const phases = [
    { quarter: 'Q1', title: 'Тестирование', color: '#3b82f6', gradient: ['#60a5fa', '#3b82f6'] },
    { quarter: 'Q2', title: 'Создание тарифов', color: '#22c55e', gradient: ['#4ade80', '#22c55e'] },
    { quarter: 'Q3', title: 'Рост продаж', color: '#f59e0b', gradient: ['#fbbf24', '#f59e0b'] },
    { quarter: 'Q4', title: 'Масштабирование', color: '#8b5cf6', gradient: ['#a78bfa', '#8b5cf6'] }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="glass p-6 md:p-8 rounded-2xl h-[480px] flex flex-col"
    >
      <h3 className="text-lg md:text-xl font-bold text-white mb-6 text-center">
        План развития на год
      </h3>
      
      <svg viewBox="0 0 800 300" className="w-full flex-1">
        <defs>
          {phases.map((phase, index) => (
            <linearGradient key={`grad-${index}`} id={`phase-gradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={phase.gradient[0]} stopOpacity="0.2" />
              <stop offset="100%" stopColor={phase.gradient[1]} stopOpacity="0.1" />
            </linearGradient>
          ))}
          <filter id="timeline-shadow">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        <line 
          x1="80" y1="150" x2="720" y2="150" 
          stroke="rgba(255,255,255,0.2)" 
          strokeWidth="2" 
          strokeDasharray="4 4"
        />
        
        {phases.map((phase, index) => {
          const x = 120 + index * 180
          return (
            <g key={index}>
              {/* Фоновый прямоугольник */}
              <rect 
                x={x - 80} 
                y="90"
                width="160" 
                height="120" 
                rx="12"
                fill={`url(#phase-gradient-${index})`}
                stroke={phase.color}
                strokeWidth="1"
                opacity="0.8"
              />
              
              {/* Точка на таймлайне */}
              <circle 
                cx={x} 
                cy="150" 
                r="8" 
                fill={phase.color}
                filter="url(#timeline-shadow)"
              />
              
              {/* Квартал */}
              <text 
                x={x} 
                y="190" 
                textAnchor="middle" 
                className="fill-white text-base font-semibold"
                filter="url(#timeline-shadow)"
              >
                {phase.quarter}
              </text>
              
              {/* Название этапа */}
              <text 
                x={x} 
                y="125" 
                textAnchor="middle" 
                className="fill-white text-sm font-medium"
                filter="url(#timeline-shadow)"
              >
                {phase.title}
              </text>
            </g>
          )
        })}
      </svg>
    </motion.div>
  )
}

const BusinessMetrics = { TAMSAMSOMChart, DeliveryMetrics, ROICalculator, TimelineChart }
export default BusinessMetrics
