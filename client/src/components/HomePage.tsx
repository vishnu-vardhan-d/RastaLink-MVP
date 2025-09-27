import { useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import TruckCard from './TruckCard'
import TechnicalMap from './TechnicalMap'
import LoadMatchingGrid from './LoadMatchingGrid'
import AnalyticsDashboard from './AnalyticsDashboard'
import DriverPortal from './DriverPortal'
import LiveNotifications from './LiveNotifications'
import WeatherFuelWidget from './WeatherFuelWidget'
import { type TruckStatus } from './StatusIndicator'

// TODO: Remove mock data when implementing real backend
const mockTrucks = [
  {
    truckCode: 'RLK-001-DL',
    status: 'empty' as TruckStatus,
    driverName: 'Rajesh Kumar',
    driverPhone: '+91-9876543210',
    currentLocation: 'Delhi, DL',
    destination: '',
    distance: '2.5 km',
    capacity: '10 Ton',
    type: 'Medium Truck',
    lastUpdated: '2 mins ago'
  },
  {
    truckCode: 'RLK-002-MH',
    status: 'loaded' as TruckStatus,
    driverName: 'Suresh Patil',
    driverPhone: '+91-9876543211',
    currentLocation: 'Mumbai, MH',
    destination: 'Pune, MH',
    distance: '5.2 km',
    capacity: '15 Ton',
    type: 'Heavy Truck',
    lastUpdated: '5 mins ago'
  },
  {
    truckCode: 'RLK-003-KA',
    status: 'break' as TruckStatus,
    driverName: 'Manjunath Reddy',
    driverPhone: '+91-9876543212',
    currentLocation: 'Bangalore, KA',
    destination: '',
    distance: '8.7 km',
    capacity: '8 Ton',
    type: 'Light Truck',
    lastUpdated: '15 mins ago'
  },
  {
    truckCode: 'RLK-004-TN',
    status: 'halted' as TruckStatus,
    driverName: 'Karthik Murugan',
    driverPhone: '+91-9876543213',
    currentLocation: 'Chennai, TN',
    destination: 'Coimbatore, TN',
    distance: '12.1 km',
    capacity: '12 Ton',
    type: 'Medium Truck',
    lastUpdated: '8 mins ago'
  },
  {
    truckCode: 'RLK-005-WB',
    status: 'breakdown' as TruckStatus,
    driverName: 'Amit Das',
    driverPhone: '+91-9876543214',
    currentLocation: 'Kolkata, WB',
    destination: '',
    distance: '18.3 km',
    capacity: '20 Ton',
    type: 'Heavy Truck',
    lastUpdated: '1 hour ago'
  },
  {
    truckCode: 'RLK-006-GJ',
    status: 'repair' as TruckStatus,
    driverName: 'Pankaj Shah',
    driverPhone: '+91-9876543215',
    currentLocation: 'Ahmedabad, GJ',
    destination: '',
    distance: '25.6 km',
    capacity: '6 Ton',
    type: 'Light Truck',
    lastUpdated: '3 hours ago'
  }
]

export default function HomePage() {
  const [searchResults, setSearchResults] = useState(mockTrucks)
  const [isLoading, setIsLoading] = useState(false)
  const [searchZipcode, setSearchZipcode] = useState('')

  const handleSearch = async (zipcode: string) => {
    setIsLoading(true)
    setSearchZipcode(zipcode)
    
    // TODO: Replace with actual API call
    setTimeout(() => {
      console.log(`Searching for trucks near ${zipcode}`)
      // Mock: Filter and sort results by distance
      const filteredResults = mockTrucks.sort(() => Math.random() - 0.5)
      setSearchResults(filteredResults)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div 
      className="min-h-screen bg-slate-900"
      style={{
        backgroundImage: `
          linear-gradient(rgba(30, 58, 138, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30, 58, 138, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}
    >
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Technical Hero Section */}
        <div className="text-center mb-8">
          <h1 className="font-mono text-4xl md:text-6xl font-bold mb-4 text-cyan-300">
            RASTALINK
            <span className="text-orange-400">_</span>
            <span className="text-green-400">OS</span>
          </h1>
          <p className="font-mono text-sm text-blue-300 mb-2">
            INDUSTRIAL LOGISTICS MANAGEMENT SYSTEM v2.4.1
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            [AI-POWERED TRANSPORT SOLUTIONS] Real-time fleet tracking across 
            Indian subcontinent from Kashmir to Kanyakumari. Industrial-grade 
            logistics optimization platform.
          </p>
          
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Main Technical Dashboard Grid */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Left Column - Map & Analytics */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <TechnicalMap />
            <AnalyticsDashboard />
          </div>

          {/* Right Column - Live Data */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <LiveNotifications />
            <WeatherFuelWidget />
          </div>
        </div>

        {/* Load Matching & Driver Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <LoadMatchingGrid />
          <DriverPortal />
        </div>

        {/* Available Fleet Section */}
        {searchResults.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-mono text-2xl font-bold text-cyan-300">
                [FLEET_STATUS]
                {searchZipcode && (
                  <span className="text-orange-400 ml-2">_ZONE_{searchZipcode}</span>
                )}
              </h2>
              <div className="flex items-center gap-2 text-sm font-mono text-blue-300">
                <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                REALTIME_SYNC • {new Date().toLocaleTimeString()}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((truck) => (
                <TruckCard key={truck.truckCode} {...truck} />
              ))}
            </div>
          </div>
        )}

        {/* Technical Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-4 bg-slate-800/40 border border-cyan-400/20 rounded-md">
            <div className="font-mono text-3xl font-bold text-green-400 mb-2">2,547</div>
            <div className="font-mono text-xs text-gray-400">ACTIVE_FLEET</div>
          </div>
          <div className="text-center p-4 bg-slate-800/40 border border-orange-400/20 rounded-md">
            <div className="font-mono text-3xl font-bold text-orange-400 mb-2">156</div>
            <div className="font-mono text-xs text-gray-400">CITIES_ONLINE</div>
          </div>
          <div className="text-center p-4 bg-slate-800/40 border border-blue-400/20 rounded-md">
            <div className="font-mono text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="font-mono text-xs text-gray-400">UPTIME_MONITOR</div>
          </div>
          <div className="text-center p-4 bg-slate-800/40 border border-purple-400/20 rounded-md">
            <div className="font-mono text-3xl font-bold text-purple-400 mb-2">98.7%</div>
            <div className="font-mono text-xs text-gray-400">SYSTEM_EFFICIENCY</div>
          </div>
        </div>

        {/* Technical Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="text-center font-mono text-xs text-gray-500">
            <div>RASTALINK_TECHNOLOGIES © 2024 | INDUSTRIAL_LOGISTICS_OS</div>
            <div className="mt-2">SYS_STATUS: OPERATIONAL | NET_LATENCY: 12ms | DATA_INTEGRITY: 99.98%</div>
          </div>
        </div>
      </main>
    </div>
  )
}