import SearchBar from '../SearchBar'

export default function SearchBarExample() {
  const handleSearch = (zipcode: string) => {
    console.log('Searching for:', zipcode)
  }

  return (
    <div className="p-8 bg-background">
      <SearchBar onSearch={handleSearch} />
    </div>
  )
}