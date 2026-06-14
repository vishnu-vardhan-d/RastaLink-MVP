import { useState, useEffect } from 'react'
import Header from './Header'
import TruckCard from './TruckCard'
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
import LiveStatsDisplay from './LiveStatsDisplay'
import { type TruckStatus } from './StatusIndicator'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

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

  return (
    <div 
      className="min-h-screen bg-background relative"
    >
      <IndiaShippingMap />

      {/* Proof-of-concept notice — visible to anyone landing on the demo */}
      <div className="relative z-40 w-full text-center font-mono text-[11px] py-1.5 px-4 bg-amber-500/10 border-b border-amber-500/30 text-amber-300/90">
        Proof of concept · UI prototype on mock / sample data · built to explore requirements — not a live product
      </div>

      <Header />

      {/* Breaking-news live alerts bar (full width, very top) */}
      <LiveNotifications />

      <main className="container mx-auto px-4 py-6">
        {/* Hero Section — compact command header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-1 heading-font text-foreground leading-tight">
            Track &amp; Match Loads Across India <span className="text-primary">— Powered by AI</span>
          </h1>
        </div>

        {/* Live Network Statistics */}
        <div className="mb-6">
          <LiveStatsDisplay />
        </div>

        {/* Weather + Fuel tickers */}
        <div className="mb-6">
          <WeatherFuelWidget />
        </div>

        {/* Fleet Status Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ActiveTrucksStatus />
          <RateTicker />
        </div>

        {/* Truck Activity Feeds */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TrucksReadyFeed />
          <TrucksMovingFeed />
        </div>

        {/* Analytics */}
        <div className="mb-6">
          <AnalyticsDashboard />
        </div>

        {/* Live Orders & Confirmations Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <LiveOrdersFeed />
          <OrderConfirmations />
        </div>

        {/* Load Matching & Driver Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <LoadMatchingGrid />
          <DriverPortal />
        </div>

        {/* Quick Dispatch Terminal */}
        <div className="mb-6">
          <QuickDispatch />
        </div>

        {/* Available Fleet Section */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground heading-font">
              Available Fleet
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              Real-time • {new Date().toLocaleTimeString()}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTrucks.map((truck) => (
              <TruckCard key={truck.truckCode} {...truck} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-10 border-t border-border">
          <div className="text-center space-y-1">
            <div className="text-primary font-medium">Kashmir to Kanyakumari</div>
            <div className="text-xs text-muted-foreground font-mono">
              Proof of concept · mock / sample data · voluntary, non-commercial — not a live product
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}