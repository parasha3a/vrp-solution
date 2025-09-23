import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  Heart
} from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'О проекте', href: '/' },
    { label: 'Преимущества', href: '/advantages' },
    { label: 'Технологии', href: '/technical' }
  ]

  const services = [
    'Оптимизация маршрутов',
    'Планирование доставки',
    'Аналитика логистики',
    'Интеграция систем'
  ]

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: 'https://github.com/vrp-solution',
      label: 'GitHub'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://linkedin.com/company/vrp-solution',
      label: 'LinkedIn'
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      href: 'https://twitter.com/vrp_solution',
      label: 'Twitter'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
                VRP Solution
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Революционная платформа для оптимизации транспортных маршрутов с использованием современных алгоритмов машинного обучения.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:info@vrp-solution.ru" className="hover:underline">
                  info@vrp-solution.ru
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+79001234567" className="hover:underline">
                  +7 (900) 123-45-67
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                <span>
                  Москва, ул. Тверская, 1<br />
                  БЦ "Технопарк"
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Быстрые ссылки</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Наши услуги</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-white transition-colors duration-300">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Оставайтесь на связи</h4>
              <p className="text-gray-300 mb-4">
                Подпишитесь на наши обновления и новости в области VRP-технологий
              </p>
              
              {/* Newsletter signup */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all duration-300 hover:scale-105">
                  Подписаться
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-4">Мы в соцсетях</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} VRP Solution. Все права защищены.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Сделано с</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>в России</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
