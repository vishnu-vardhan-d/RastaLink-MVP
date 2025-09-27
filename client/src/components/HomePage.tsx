import { useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import TruckCard from './TruckCard'
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Find Trucks.
            <br />
            <span className="bg-gradient-to-r from-neon-green to-neon-orange bg-clip-text text-transparent">
              Track Live.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with truck owners across India. Real-time tracking from Kashmir to Kanyakumari 
            with AI-powered logistics solutions.
          </p>
          
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Results Section */}
        {searchResults.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                Available Trucks
                {searchZipcode && (
                  <span className="text-primary ml-2">near {searchZipcode}</span>
                )}
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 bg-neon-green rounded-full animate-pulse"></div>
                Live Results • Updated in real-time
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((truck) => (
                <TruckCard key={truck.truckCode} {...truck} />
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-neon-green mb-2">2,500+</div>
            <div className="text-sm text-muted-foreground">Active Trucks</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-neon-orange mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Cities Covered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Live Tracking</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </main>
    </div>
  )
}