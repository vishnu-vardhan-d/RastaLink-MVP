import StatusIndicator from '../StatusIndicator'

export default function StatusIndicatorExample() {
  return (
    <div className="p-8 bg-background space-y-4">
      <StatusIndicator status="loaded" size="lg" />
      <StatusIndicator status="empty" size="lg" />
      <StatusIndicator status="halted" size="lg" />
      <StatusIndicator status="break" size="lg" />
      <StatusIndicator status="breakdown" size="lg" />
      <StatusIndicator status="repair" size="lg" />
    </div>
  )
}