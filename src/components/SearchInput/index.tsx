export const SearchInput = ({ searchValue, placeholder, handleChange}: { searchValue: string; placeholder: string; handleChange: any; } ) => {
  return (
  <div>
    <input
      name="searchTerm"
      value={searchValue}
      className="pl-12 w-full h-12 border focus:bg-white border-primary focus:border-primary focus:outline-none"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);}