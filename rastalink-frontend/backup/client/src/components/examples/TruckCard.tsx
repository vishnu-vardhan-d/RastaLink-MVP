import TruckCard from '../TruckCard'

export default function TruckCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="max-w-md">
        <TruckCard
          truckCode="RLK-001-DL"
          status="empty"
          driverName="Rajesh Kumar"
          driverPhone="+91-9876543210"
          currentLocation="New Delhi, DL"
          destination=""
          distance="2.5 km"
          capacity="10 Ton"
          type="Medium Truck"
          lastUpdated="2 mins ago"
        />
      </div>
    </div>
  )
}