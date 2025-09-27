import { Truck, Package, Clock, Coffee, AlertTriangle, Wrench } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export type TruckStatus = 'loaded' | 'empty' | 'halted' | 'break' | 'breakdown' | 'repair'

interface StatusIndicatorProps {
  status: TruckStatus
  size?: 'sm' | 'md' | 'lg'
}

const statusConfig = {
  loaded: {
    label: 'Loaded',
    color: 'bg-truck-loaded',
    icon: Package,
    description: 'Moving with cargo'
  },
  empty: {
    label: 'Empty',
    color: 'bg-truck-empty',
    icon: Truck,
    description: 'Available for booking'
  },
  halted: {
    label: 'Halted',
    color: 'bg-truck-halted',
    icon: Clock,
    description: 'Temporarily stopped'
  },
  break: {
    label: 'On Break',
    color: 'bg-truck-break',
    icon: Coffee,
    description: 'Driver taking rest'
  },
  breakdown: {
    label: 'Breakdown',
    color: 'bg-truck-breakdown',
    icon: AlertTriangle,
    description: 'Vehicle issue reported'
  },
  repair: {
    label: 'Under Repair',
    color: 'bg-truck-repair',
    icon: Wrench,
    description: 'Maintenance in progress'
  }
}

export default function StatusIndicator({ status, size = 'md' }: StatusIndicatorProps) {
  const config = statusConfig[status]
  const Icon = config.icon
  
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  }

  return (
    <div className="flex items-center gap-2" data-testid={`status-${status}`}>
      <div className={`${config.color} rounded-full ${sizeClasses[size]} flex items-center justify-center`}>
        <Icon className={`${sizeClasses.sm} text-white`} />
      </div>
      <div className="flex flex-col">
        <Badge variant="secondary" className="text-xs">
          {config.label}
        </Badge>
        {size === 'lg' && (
          <span className="text-xs text-muted-foreground mt-1">
            {config.description}
          </span>
        )}
      </div>
    </div>
  )
}