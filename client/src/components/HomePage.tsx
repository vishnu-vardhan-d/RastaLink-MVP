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
import LiveOrdersFeed from './LiveOrdersFeed'
import OrderConfirmations from './OrderConfirmations'
import RateTicker from './RateTicker'
import QuickDispatch from './QuickDispatch'
import ActiveTrucksStatus from './ActiveTrucksStatus'
import TrucksReadyFeed from './TrucksReadyFeed'
import TrucksMovingFeed from './TrucksMovingFeed'
import LiveFeedTicker from './LiveFeedTicker'
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
      className="min-h-screen bg-gray-900"
    >
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Hero Section */}
        <div className="mb-8">
          {/* Live Feed Ticker */}
          <LiveFeedTicker />
          
          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-white">RastaLink</span><span className="text-orange-400">.In</span>
            </h1>
            <p className="text-lg text-neon-yellow font-semibold mb-2">
              One Stop Trucking solution for Small Scale Lorry businesses
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Connect, Track, and Grow your trucking business across India. 
              From Kashmir to Kanyakumari - join thousands of truck owners, 
              drivers, and logistics partners building India's trucking network.
            </p>
            
            <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          </div>
        </div>

        {/* Fleet Status Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <ActiveTrucksStatus />
          <RateTicker />
        </div>

        {/* Truck Activity Feeds */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TrucksReadyFeed />
          <TrucksMovingFeed />
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

        {/* Live Orders & Confirmations Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <LiveOrdersFeed />
          <OrderConfirmations />
        </div>

        {/* Load Matching & Driver Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <LoadMatchingGrid />
          <DriverPortal />
        </div>

        {/* Quick Dispatch Terminal */}
        <div className="mb-8">
          <QuickDispatch />
        </div>

        {/* Available Fleet Section */}
        {searchResults.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                Available Fleet
                {searchZipcode && (
                  <span className="text-neon-yellow ml-2">near {searchZipcode}</span>
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

        {/* Platform Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-8 bg-gray-800/30 border border-gray-700/20 rounded-lg">
            <div className="text-4xl font-bold text-white mb-3">2,547</div>
            <div className="text-sm text-gray-400 font-medium">Active Trucks</div>
          </div>
          <div className="text-center p-8 bg-gray-800/30 border border-gray-700/20 rounded-lg">
            <div className="text-4xl font-bold text-white mb-3">156</div>
            <div className="text-sm text-gray-400 font-medium">Cities Covered</div>
          </div>
          <div className="text-center p-8 bg-gray-800/30 border border-gray-700/20 rounded-lg">
            <div className="text-4xl font-bold text-white mb-3">24/7</div>
            <div className="text-sm text-gray-300 font-medium">Support</div>
          </div>
          <div className="text-center p-8 bg-gray-800/30 border border-gray-700/20 rounded-lg">
            <div className="text-4xl font-bold text-white mb-3">98.7%</div>
            <div className="text-sm text-gray-400 font-medium">Success Rate</div>
          </div>
        </div>

        {/* Community Footer */}
        <div className="mt-20 pt-12 border-t border-gray-700/20">
          <div className="text-center text-sm text-gray-400">
            <div className="text-2xl font-bold text-white mb-4">Join India's Largest Trucking Community</div>
            <div className="text-gray-400 mb-4">RastaLink © 2024 | Connecting Truckers Across India</div>
            <div className="text-gray-500">Kashmir to Kanyakumari</div>
          </div>
        </div>
      </main>
    </div>
  )
}