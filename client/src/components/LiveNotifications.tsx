import { AlertTriangle, CheckCircle, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LiveNotifications() {
  const notifications = [
    { id: 'NOT-001', type: 'alert',   title: 'BREAKDOWN', message: 'RLK-005-WB stopped on NH-48 near Gurgaon', timestamp: '2m' },
    { id: 'NOT-002', type: 'success', title: 'DELIVERED', message: 'RLK-012-KA delivered 8.5T to Bangalore', timestamp: '5m' },
    { id: 'NOT-003', type: 'warning', title: 'WEATHER',   message: 'Heavy rain forecast on Mumbai–Pune route', timestamp: '8m' },
    { id: 'NOT-004', type: 'info',    title: 'NEW LOAD',  message: 'Electronics Mumbai→Delhi · ₹95K rate', timestamp: '12m' },
    { id: 'NOT-005', type: 'alert',   title: 'FUEL',      message: 'Diesel +₹2.5/L in North region', timestamp: '15m' },
  ]

  const dotColor = (type: string) =>
    type === 'alert' ? 'bg-red-400' :
    type === 'success' ? 'bg-green-400' :
    type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'

  const iconFor = (type: string) =>
    type === 'success' ? CheckCircle : type === 'info' ? Zap : AlertTriangle

  const items = [...notifications, ...notifications]

  return (
    <div className="flex items-stretch border-y border-border bg-slate-900/80 overflow-hidden font-mono">
      <div className="flex items-center gap-2 px-4 bg-red-600 shrink-0">
        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
        <span className="text-[11px] font-bold tracking-wider text-white">LIVE</span>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap py-2.5 px-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
        >
          {items.map((n, i) => {
            const I = iconFor(n.type)
            return (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className={`h-1.5 w-1.5 rounded-full ${dotColor(n.type)}`} />
                <I className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="font-bold text-foreground">{n.title}</span>
                <span className="text-muted-foreground">{n.message}</span>
                <span className="text-[11px] text-gray-500">· {n.timestamp}</span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
