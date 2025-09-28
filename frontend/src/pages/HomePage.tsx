import { useEffect, useState } from 'react'
import { Truck, Users, MapPin, BarChart3 } from 'lucide-react'

export function HomePage() {
  const [apiStatus, setApiStatus] = useState<'loading' | 'connected' | 'error'>('loading')
  
  useEffect(() => {
    // Check backend connectivity
    const checkAPI = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/actuator/health`)
        if (response.ok) {
          setApiStatus('connected')
        } else {
          setApiStatus('error')
        }
      } catch (error) {
        setApiStatus('error')
      }
    }
    
    checkAPI()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">RastaLink</h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`h-2 w-2 rounded-full ${
                apiStatus === 'connected' ? 'bg-green-500' : 
                apiStatus === 'error' ? 'bg-red-500' : 'bg-yellow-500'
              }`} />
              <span className="text-sm text-gray-600">
                Backend: {apiStatus === 'connected' ? 'Connected' : 
                         apiStatus === 'error' ? 'Disconnected' : 'Connecting...'}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Enterprise AI-Powered
            <span className="text-blue-600"> Trucking Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing freight management with intelligent load dispatch, 
            real-time tracking, and advanced fleet optimization.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard
            icon={<Truck className="h-8 w-8" />}
            title="Fleet Management"
            description="Comprehensive fleet tracking and maintenance scheduling"
          />
          <FeatureCard
            icon={<MapPin className="h-8 w-8" />}
            title="Load Dispatch"
            description="AI-powered load matching and route optimization"
          />
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title="Driver Portal"
            description="Mobile-first driver experience with real-time updates"
          />
          <FeatureCard
            icon={<BarChart3 className="h-8 w-8" />}
            title="Analytics"
            description="Advanced reporting and business intelligence"
          />
        </div>

        {/* System Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
          <div className="space-y-3">
            <StatusItem
              label="Identity Service"
              status={apiStatus}
              port="8081"
            />
            <StatusItem
              label="Gateway Service"
              status="pending"
              port="8080"
            />
            <StatusItem
              label="Database (HSQL)"
              status={apiStatus === 'connected' ? 'connected' : 'error'}
              port="In-Memory"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

interface StatusItemProps {
  label: string
  status: 'loading' | 'connected' | 'error' | 'pending'
  port: string
}

function StatusItem({ label, status, port }: StatusItemProps) {
  const statusConfig = {
    connected: { color: 'bg-green-500', text: 'Online' },
    error: { color: 'bg-red-500', text: 'Offline' },
    loading: { color: 'bg-yellow-500', text: 'Connecting' },
    pending: { color: 'bg-gray-400', text: 'Pending' }
  }

  const config = statusConfig[status]

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-3">
        <div className={`h-2 w-2 rounded-full ${config.color}`} />
        <span className="text-gray-900 font-medium">{label}</span>
      </div>
      <div className="text-right">
        <span className="text-sm text-gray-600">{config.text}</span>
        <div className="text-xs text-gray-500">Port: {port}</div>
      </div>
    </div>
  )
}