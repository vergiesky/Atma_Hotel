import { Search, ChevronDown } from "lucide-react";

export default function CustomerInputSearch({
  searchCity,
  setSearchCity,
  selectedLocation,
  setSelectedLocation,
  locationOptions = [],
  onSearch,
}) {
  const handleSearch = () => {
    if (typeof onSearch === "function") onSearch();
  };

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/Hotel.jpg"
          alt="bg Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-600/50" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 w-full max-w-5xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6 sm:mb-8">
            Hai, mau nginep di mana?
          </h1>

          <div className="space-y-5">
            <div className="w-full max-w-4xl mx-auto bg-blue-50/80 rounded-3xl sm:rounded-full p-4 sm:p-2 shadow-inner">
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:min-w-0">
                {/* input search */}
                <div className="flex items-center flex-1 min-w-0 bg-white rounded-full px-4 py-3 shadow-sm border border-blue-100">
                  <Search className="text-gray-400 mr-3" size={18} />
                  <input
                    type="text"
                    placeholder="Cari hotel, lokasi, atau destinasi..."
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="w-full text-sm focus:outline-none"
                  />
                </div>

                {/* dropdown lokasi */}
                <div className="relative flex items-center bg-white rounded-full px-3 py-3 shadow-sm border border-blue-100 w-full sm:w-56">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full text-sm text-gray-700 bg-transparent focus:outline-none appearance-none pr-6"
                  >
                    {locationOptions.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>

                  {/* panah dropdown */}
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-4 pointer-events-none" />
                </div>

                {/* tombol cari */}
                <button
                  type="button"
                  onClick={handleSearch}
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 shadow-md transition"
                >
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
