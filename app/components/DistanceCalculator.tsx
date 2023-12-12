import { useState } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { MapPinIcon } from "@heroicons/react/24/outline";

const DistanceCalculator = () => {
  const [value, setvalue] = useState({ address: "" });

  function handleChange(address: string) {
    setvalue({ address });
  }

  const searchOptions = {
    componentRestrictions: { country: "gb" },
  };

  function handleSelect(address: string) {
    setvalue({ address });
    geocodeByAddress(address)
      .then((results: any) => getLatLng(results[0]))
      .then(({ lat, lng }) => console.log(`Successfully got latitude and longitude of ${address}`, { lat, lng }))
      .catch((error) => console.error(error));
  }

  const renderFunc = ({ getInputProps, getSuggestionItemProps, suggestions }: { getInputProps: any; getSuggestionItemProps: any; suggestions: any }) => (
    <div className="mb-6">
      <div className="relative w-full h-10">
        <div className="absolute grid w-6 h-6 top-3 right-3">
          <MapPinIcon />
        </div>
        <input
          {...getInputProps({
            placeholder: "Address or Postcode",
            className:
              "location-search-input peer w-full h-[50px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all  border focus:border-2 text-md p-3 rounded-[7px]  focus:border-gray-900",
          })}
        />
        <div className="autocomplete-dropdown-container absolute z-10 bg-white p-1">
          {suggestions.map((suggestion: any) => (
            <div {...getSuggestionItemProps(suggestion)} className="cursor-pointer bg-white border border-b-2 p-2 text-md">
              <span className="text-md font-normal">{suggestion.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <PlacesAutocomplete value={value.address} searchOptions={searchOptions} onChange={handleChange} shouldFetchSuggestions={value.address.length > 3} onSelect={handleSelect} debounce="300">
        {renderFunc}
      </PlacesAutocomplete>
    </>
  );
};

export default DistanceCalculator;
