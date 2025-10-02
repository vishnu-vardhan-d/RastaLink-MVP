import { useState, useEffect } from 'react'
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
import IndiaShippingMap from './IndiaShippingMap'
import { type TruckStatus } from './StatusIndicator'
import { useAuth } from '@/hooks/useAuth'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"

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
  const { isAuthenticated, isLoading: authLoading } = useAuth()
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

  const handleLogin = () => {
    window.location.href = '/api/login'
  }

  return (
    <div 
      className="min-h-screen bg-background relative"
    >
      <IndiaShippingMap />
      <Header />

      {/* Mandatory Sign-Up Modal */}
      <Dialog open={!authLoading && !isAuthenticated} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center heading-font">
              Welcome to RastaLink
            </DialogTitle>
            <DialogDescription className="text-center pt-2">
              Sign in to access India's premier AI-powered trucking platform. Track loads, manage fleets, and connect with drivers across Kashmir to Kanyakumari.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground">
                Sign in with your preferred method:
              </p>
              <Button 
                onClick={handleLogin} 
                className="w-full"
                size="lg"
                data-testid="button-login"
              >
                <LogIn className="mr-2 h-5 w-5" />
                Continue with Google, Apple, X, or Email
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-font text-foreground leading-tight">
            Track & Match Loads Across India<br/>
            <span className="text-primary">Powered by AI</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Real-time trucking from Kashmir to Kanyakumari
          </p>
          
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* 3-Step Onboarding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 heading-font">Enter Code to Track</h3>
            <p className="text-sm text-muted-foreground">Track your shipment with a tracking code</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 heading-font">AI Matches Loads</h3>
            <p className="text-sm text-muted-foreground">Our AI finds the best routes and trucks</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 heading-font">Manage Fleet Dashboard</h3>
            <p className="text-sm text-muted-foreground">Control everything from one place</p>
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
              <h2 className="text-2xl font-bold text-foreground heading-font">
                Available Fleet
                {searchZipcode && (
                  <span className="text-primary ml-2">near {searchZipcode}</span>
                )}
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                Real-time • {new Date().toLocaleTimeString()}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((truck) => (
                <TruckCard key={truck.truckCode} {...truck} />
              ))}
            </div>
          </div>
        )}

        {/* Trust Signals & Stats */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 heading-font">Trusted by Businesses Across India</h2>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-8 classic-card bg-card">
              <div className="text-4xl font-bold text-primary mb-3 heading-font">2,500+</div>
              <div className="text-sm text-muted-foreground font-medium">Trucks</div>
            </div>
            <div className="text-center p-8 classic-card bg-card">
              <div className="text-4xl font-bold text-primary mb-3 heading-font">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Coverage</div>
            </div>
            <div className="text-center p-8 classic-card bg-card">
              <div className="text-4xl font-bold text-primary mb-3 heading-font">95%</div>
              <div className="text-sm text-muted-foreground font-medium">AI Accuracy</div>
            </div>
            <div className="text-center p-8 classic-card bg-card">
              <div className="text-4xl font-bold text-primary mb-3 heading-font">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Support</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 classic-card bg-card">
              <div className="text-lg mb-4 text-foreground">"Saved 15% on routes with RastaLink's AI matching"</div>
              <div className="text-sm text-muted-foreground">— Fleet Owner, Delhi</div>
            </div>
            <div className="p-6 classic-card bg-card">
              <div className="text-lg mb-4 text-foreground">"Real-time tracking keeps my customers happy"</div>
              <div className="text-sm text-muted-foreground">— Logistics Manager, Mumbai</div>
            </div>
            <div className="p-6 classic-card bg-card">
              <div className="text-lg mb-4 text-foreground">"Best platform for small trucking businesses"</div>
              <div className="text-sm text-muted-foreground">— Transport Operator, Bangalore</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-4 heading-font">Join India's Largest Trucking Network</div>
            <div className="text-muted-foreground mb-4">RastaLink © 2024 | Connecting Truckers Across India</div>
            <div className="text-primary font-medium">Kashmir to Kanyakumari</div>
          </div>
        </div>
      </main>
    </div>
  )
}