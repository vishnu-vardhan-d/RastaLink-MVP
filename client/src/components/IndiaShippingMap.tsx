import { Truck } from 'lucide-react'

export default function IndiaShippingMap() {
  // Major Indian cities coordinates (approximate positions for visual representation)
  const cities = [
    { name: 'Delhi', x: '42%', y: '22%', size: 'large' },
    { name: 'Mumbai', x: '32%', y: '45%', size: 'large' },
    { name: 'Bangalore', x: '38%', y: '65%', size: 'large' },
    { name: 'Chennai', x: '48%', y: '65%', size: 'large' },
    { name: 'Kolkata', x: '62%', y: '35%', size: 'large' },
    { name: 'Hyderabad', x: '42%', y: '55%', size: 'medium' },
    { name: 'Ahmedabad', x: '28%', y: '35%', size: 'medium' },
    { name: 'Pune', x: '34%', y: '50%', size: 'medium' },
    { name: 'Jaipur', x: '36%', y: '27%', size: 'medium' },
    { name: 'Lucknow', x: '50%', y: '27%', size: 'medium' },
    { name: 'Kochi', x: '38%', y: '75%', size: 'small' },
    { name: 'Surat', x: '30%', y: '40%', size: 'small' },
    { name: 'Nagpur', x: '44%', y: '42%', size: 'small' },
    { name: 'Patna', x: '58%', y: '30%', size: 'small' },
    { name: 'Bhubaneswar', x: '60%', y: '45%', size: 'small' },
  ]

  // Major trucking routes
  const routes = [
    { from: cities[0], to: cities[1] }, // Delhi - Mumbai
    { from: cities[0], to: cities[4] }, // Delhi - Kolkata
    { from: cities[1], to: cities[2] }, // Mumbai - Bangalore
    { from: cities[2], to: cities[3] }, // Bangalore - Chennai
    { from: cities[4], to: cities[3] }, // Kolkata - Chennai
    { from: cities[0], to: cities[5] }, // Delhi - Hyderabad
    { from: cities[1], to: cities[6] }, // Mumbai - Ahmedabad
    { from: cities[5], to: cities[2] }, // Hyderabad - Bangalore
  ]

  // Truck positions on routes (animated)
  const trucks = [
    { x: '38%', y: '33%' },
    { x: '52%', y: '28%' },
    { x: '35%', y: '58%' },
    { x: '45%', y: '60%' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <svg
        viewBox="0 0 400 600"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* India Map Outline - Simplified */}
        <path
          d="M 180 50 L 200 80 L 220 100 L 230 120 L 240 140 L 245 160 L 248 180 L 250 200 L 252 220 L 253 240 L 252 260 L 250 280 L 245 300 L 240 320 L 230 340 L 220 360 L 210 380 L 200 400 L 185 420 L 170 440 L 155 450 L 140 455 L 125 450 L 115 440 L 110 420 L 108 400 L 110 380 L 115 360 L 120 340 L 125 320 L 130 300 L 132 280 L 130 260 L 125 240 L 120 220 L 115 200 L 112 180 L 115 160 L 120 140 L 130 120 L 140 100 L 150 85 L 160 70 L 170 60 L 180 50 Z"
          fill="rgba(0, 212, 170, 0.15)"
          stroke="rgba(0, 212, 170, 0.4)"
          strokeWidth="1"
        />

        {/* Shipping Routes - Dotted Lines */}
        {routes.map((route, index) => (
          <line
            key={`route-${index}`}
            x1={route.from.x}
            y1={route.from.y}
            x2={route.to.x}
            y2={route.to.y}
            stroke="rgba(0, 255, 65, 0.3)"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="animate-pulse"
          />
        ))}

        {/* City Dots */}
        {cities.map((city, index) => {
          const radius = city.size === 'large' ? 6 : city.size === 'medium' ? 4 : 3
          return (
            <g key={`city-${index}`}>
              <circle
                cx={city.x}
                cy={city.y}
                r={radius}
                fill="#ffaa00"
                className="pulse-glow"
              />
              <circle
                cx={city.x}
                cy={city.y}
                r={radius * 1.5}
                fill="none"
                stroke="rgba(255, 170, 0, 0.3)"
                strokeWidth="1"
              />
            </g>
          )
        })}

        {/* Truck Icons on Routes */}
        {trucks.map((truck, index) => (
          <g key={`truck-${index}`} transform={`translate(${truck.x}, ${truck.y})`}>
            <rect
              x="-4"
              y="-3"
              width="8"
              height="6"
              fill="rgba(0, 255, 65, 0.6)"
              rx="1"
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
