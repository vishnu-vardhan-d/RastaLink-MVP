import { useState } from 'react'
import { Search, MapPin, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface SearchBarProps {
  onSearch: (zipcode: string) => void
  isLoading?: boolean
}

export default function SearchBar({ onSearch, isLoading = false }: SearchBarProps) {
  const [zipcode, setZipcode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (zipcode.trim()) {
      onSearch(zipcode.trim())
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <MapPin className="absolute left-4 h-5 w-5 text-muted-foreground z-10" />
          <Input
            type="text"
            placeholder="Enter your zip code (e.g., 110001, 400001, 560001)"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            className="pl-12 pr-32 py-6 text-lg border-2 bg-card hover-elevate focus:border-primary transition-colors"
            data-testid="input-zipcode"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            size="lg"
            className="absolute right-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            disabled={isLoading || !zipcode.trim()}
            data-testid="button-search"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <Search className="h-5 w-5 mr-2" />
                Search
              </>
            )}
          </Button>
        </div>
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground" data-testid="text-search-description">
          Find available trucks and shipping orders near your location
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {['110001', '400001', '560001', '700001'].map((code) => (
            <button
              key={code}
              onClick={() => setZipcode(code)}
              className="text-xs px-3 py-1 rounded-full bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground transition-colors hover-elevate"
              data-testid={`button-quick-${code}`}
            >
              {code}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}