import { Bell, AlertTriangle, CheckCircle, Clock, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function LiveNotifications() {
  // TODO: Remove mock data when implementing real backend
  const notifications = [
    {
      id: 'NOT-001',
      type: 'alert',
      title: 'BREAKDOWN REPORTED',
      message: 'RLK-005-WB stopped on NH-48 near Gurgaon',
      timestamp: '2 mins ago',
      priority: 'HIGH'
    },
    {
      id: 'NOT-002', 
      type: 'success',
      title: 'DELIVERY COMPLETED',
      message: 'RLK-012-KA delivered 8.5T textiles to Bangalore',
      timestamp: '5 mins ago',
      priority: 'LOW'
    },
    {
      id: 'NOT-003',
      type: 'warning',
      title: 'WEATHER ALERT',
      message: 'Heavy rain forecast on Mumbai-Pune route',
      timestamp: '8 mins ago',
      priority: 'MEDIUM'
    },
    {
      id: 'NOT-004',
      type: 'info', 
      title: 'NEW LOAD AVAILABLE',
      message: 'Electronics cargo Mumbai→Delhi, ₹95K rate',
      timestamp: '12 mins ago',
      priority: 'MEDIUM'
    },
    {
      id: 'NOT-005',
      type: 'alert',
      title: 'FUEL PRICE UPDATE',
      message: 'Diesel rates increased by ₹2.5/L in North region',
      timestamp: '15 mins ago',
      priority: 'LOW'
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case 'alert': return AlertTriangle
      case 'success': return CheckCircle
      case 'warning': return AlertTriangle
      case 'info': return Zap
      default: return Bell
    }
  }

  const getColors = (type: string, priority: string) => {
    const baseColors = {
      alert: 'text-red-400 border-red-400/30',
      success: 'text-green-400 border-green-400/30', 
      warning: 'text-yellow-400 border-yellow-400/30',
      info: 'text-blue-400 border-blue-400/30'
    }
    
    return baseColors[type as keyof typeof baseColors] || baseColors.info
  }

  return (
    <Card className="border-2 border-purple-500/30 bg-slate-900/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-mono text-purple-300 flex items-center gap-2">
          <Bell className="h-5 w-5" />
          LIVE ALERTS & NOTIFICATIONS
          <div className="ml-auto flex items-center gap-2">
            <div className="h-2 w-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-xs">STREAMING</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {notifications.map((notification) => {
            const Icon = getIcon(notification.type)
            const colors = getColors(notification.type, notification.priority)
            
            return (
              <div 
                key={notification.id}
                className={`p-3 bg-slate-800/40 border rounded-md hover-elevate transition-all ${colors}`}
                data-testid={`notification-${notification.id}`}
              >
                <div className="flex items-start gap-3">
                  <Icon className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-bold text-sm">{notification.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded border ${
                        notification.priority === 'HIGH' ? 'text-red-400 border-red-400/30 bg-red-400/10' :
                        notification.priority === 'MEDIUM' ? 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' :
                        'text-gray-400 border-gray-400/30 bg-gray-400/10'
                      }`}>
                        {notification.priority}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-300 mb-2">{notification.message}</p>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{notification.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Notification stats */}
        <div className="mt-4 pt-4 border-t border-purple-400/20">
          <div className="grid grid-cols-4 gap-4 text-center font-mono text-xs">
            <div>
              <div className="text-red-400 text-lg font-bold">8</div>
              <div className="text-gray-400">ALERTS</div>
            </div>
            <div>
              <div className="text-yellow-400 text-lg font-bold">15</div>
              <div className="text-gray-400">WARNINGS</div>
            </div>
            <div>
              <div className="text-green-400 text-lg font-bold">42</div>
              <div className="text-gray-400">COMPLETED</div>
            </div>
            <div>
              <div className="text-blue-400 text-lg font-bold">23</div>
              <div className="text-gray-400">INFO</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}