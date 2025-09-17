import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, X, Target, TrendingUp, DollarSign, Clock } from 'lucide-react'

interface CompetitorData {
  name: string
  type: string
  strengths: string[]
  weaknesses: string[]
  ourAdvantage: string
}

interface CompetitorCardProps {
  competitor: CompetitorData
  index: number
}

const CompetitorCard: React.FC<CompetitorCardProps> = ({ competitor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-4">
          <span className="text-white font-bold text-lg">{competitor.name.charAt(0)}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{competitor.name}</h3>
          <p className="text-gray-300 text-sm">{competitor.type}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
            <CheckCircle className="w-4 h-4 mr-2" />
            Сильные стороны
          </h4>
          <ul className="space-y-1">
            {competitor.strengths.map((strength, i) => (
              <li key={i} className="text-gray-300 text-sm">• {strength}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center">
            <X className="w-4 h-4 mr-2" />
            Слабые стороны
          </h4>
          <ul className="space-y-1">
            {competitor.weaknesses.map((weakness, i) => (
              <li key={i} className="text-gray-300 text-sm">• {weakness}</li>
            ))}
          </ul>
        </div>

        <div className="bg-primary-500/20 border border-primary-400/30 rounded-lg p-3">
          <h4 className="text-sm font-semibold text-primary-300 mb-2 flex items-center">
            <Target className="w-4 h-4 mr-2" />
            Наше преимущество
          </h4>
          <p className="text-white text-sm">{competitor.ourAdvantage}</p>
        </div>
      </div>
    </motion.div>
  )
}

export const MarketPositioning: React.FC = () => {
  const metrics = [
    {
      icon: <Target className="w-8 h-8 text-primary-400" />,
      title: '99.5%',
      subtitle: 'точность VRP',
      description: 'против 85-90% у конкурентов'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-accent-400" />,
      title: '900%',
      subtitle: 'ROI клиента',
      description: 'доказанная экономическая эффективность'
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-400" />,
      title: '2 недели',
      subtitle: 'время интеграции',
      description: 'против 2-6 месяцев у конкурентов'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent-400" />,
      title: '>80%',
      subtitle: 'валовая маржа',
      description: 'рентабельная бизнес-модель'
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center glass p-6 rounded-2xl"
        >
          <div className="mb-4 flex justify-center">
            {metric.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{metric.title}</h3>
          <p className="text-accent-400 font-medium mb-2">{metric.subtitle}</p>
          <p className="text-gray-300 text-xs">{metric.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export const BusinessModel: React.FC = () => {
  const hypotheses = [
    {
      action: 'Интегрируй VRP Solution',
      result: 'Сократи затраты на доставку на 25%',
      while: 'Конкуренты тратят месяцы на настройку'
    },
    {
      action: 'Используй наши алгоритмы',
      result: 'Получи точность 99.5%',
      while: 'Стандартные решения дают 85-90%'
    },
    {
      action: 'Внедри за 2 недели',
      result: 'Начни экономить сразу',
      while: 'Конкуренты требуют 2-6 месяцев'
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
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Do X → Get Y: Наша продуктовая гипотеза
      </h3>
      
      <div className="space-y-6">
        {hypotheses.map((hypothesis, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white/5 rounded-xl border border-primary-400/20"
          >
            <div className="flex-1 text-center md:text-left">
              <span className="text-primary-300 font-semibold">Do: </span>
              <span className="text-white">{hypothesis.action}</span>
            </div>
            
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">→</span>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <span className="text-accent-300 font-semibold">Get: </span>
              <span className="text-white">{hypothesis.result}</span>
            </div>
            
            <div className="w-full md:w-auto text-center">
              <span className="text-gray-400 text-sm italic">
                While: {hypothesis.while}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-xl border border-accent-400/30">
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <h4 className="text-accent-400 font-semibold">CAC</h4>
            <p className="text-2xl font-bold text-white">$5,000</p>
            <p className="text-gray-300 text-sm">стоимость привлечения</p>
          </div>
          <div>
            <h4 className="text-primary-400 font-semibold">LTV</h4>
            <p className="text-2xl font-bold text-white">$30,000</p>
            <p className="text-gray-300 text-sm">пожизненная ценность</p>
          </div>
          <div>
            <h4 className="text-accent-400 font-semibold">Соотношение</h4>
            <p className="text-2xl font-bold text-white">6:1</p>
            <p className="text-gray-300 text-sm">LTV к CAC</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface CompetitorAnalysisProps {
  competitors: CompetitorData[]
}

const CompetitorAnalysis: React.FC<CompetitorAnalysisProps> = ({ competitors }) => {
  return (
    <div className="space-y-8">
      <MarketPositioning />
      
      <div className="grid md:grid-cols-3 gap-8">
        {competitors.map((competitor, index) => (
          <CompetitorCard key={competitor.name} competitor={competitor} index={index} />
        ))}
      </div>
      
      <BusinessModel />
    </div>
  )
}

export default CompetitorAnalysis
