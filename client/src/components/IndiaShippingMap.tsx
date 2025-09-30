export default function IndiaShippingMap() {
  // Major Indian cities with pixel coordinates
  const cities = [
    { name: 'Delhi', x: 168, y: 130 },
    { name: 'Mumbai', x: 128, y: 270 },
    { name: 'Bangalore', x: 152, y: 390 },
    { name: 'Chennai', x: 192, y: 390 },
    { name: 'Kolkata', x: 248, y: 210 },
    { name: 'Hyderabad', x: 168, y: 330 },
    { name: 'Ahmedabad', x: 112, y: 210 },
    { name: 'Pune', x: 136, y: 300 },
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

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg
        viewBox="0 0 400 600"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* India Map Outline - More accurate shape */}
        <path
          d="M 180 100 L 190 110 L 200 120 L 205 130 L 208 140 L 210 150 L 212 160 L 213 170 L 215 180 L 220 190 L 230 200 L 240 205 L 250 208 L 255 210 L 258 215 L 260 225 L 262 240 L 263 255 L 262 270 L 260 285 L 255 300 L 248 315 L 240 330 L 230 345 L 220 360 L 210 375 L 200 390 L 190 405 L 180 420 L 170 430 L 160 435 L 150 438 L 140 438 L 130 435 L 120 430 L 110 420 L 102 405 L 98 390 L 95 375 L 94 360 L 95 345 L 98 330 L 102 315 L 108 300 L 115 285 L 122 270 L 128 255 L 132 240 L 135 225 L 138 210 L 142 195 L 148 180 L 155 165 L 162 150 L 168 135 L 174 120 L 180 100 Z"
          fill="rgba(0, 212, 170, 0.1)"
          stroke="rgba(0, 212, 170, 0.5)"
          strokeWidth="2"
        />

        {/* Shipping Routes - Dotted Lines */}
        {routes.map((route, index) => (
          <line
            key={`route-${index}`}
            x1={route.from.x}
            y1={route.from.y}
            x2={route.to.x}
            y2={route.to.y}
            stroke="rgba(0, 255, 170, 0.4)"
            strokeWidth="2"
            strokeDasharray="8 6"
          />
        ))}

        {/* City Dots */}
        {cities.map((city, index) => (
          <g key={`city-${index}`}>
            <circle
              cx={city.x}
              cy={city.y}
              r="5"
              fill="rgba(255, 170, 0, 0.8)"
            />
            <circle
              cx={city.x}
              cy={city.y}
              r="8"
              fill="none"
              stroke="rgba(255, 170, 0, 0.4)"
              strokeWidth="1.5"
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
