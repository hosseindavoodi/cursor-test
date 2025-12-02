import airports from "@sana/constants/airports.json";
import Fuse, { FuseResult } from "fuse.js";
import { useFlightSearchStore } from "../../_store/flight.search.store";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { MapPin, Plane } from "lucide-react";
interface Airport {
  airport_name: string;
  airport_name_fa: string;
  airport_code: string;
}

interface City {
  city_code: string;
  city_name: string;
  city_name_fa: string;
  airports: Airport[];
}

interface Country {
  country_code: string;
  country_name: string;
  country_name_fa: string;
  cities: City[];
}

interface SearchResults {
  type: "city" | "airport";
  item: City | Airport;
  airports?: Airport[];
  city?: City;
  country: Country;
}

function OriginDestinationSuggestion(props: { routeIndex: number; select: "origin" | "destination" }) {
  const { updateSegment, inputs, updateInputs } = useFlightSearchStore();

  const [results, setResults] = useState<FuseResult<SearchResults>[]>([]);
  const [trendingResults, setTrendeingResults] = useState<SearchResults[]>([]);

  const cleanedData: SearchResults[] = [];

  airports.forEach((country) => {
    country.cities.forEach((city) => {
      cleanedData.push({
        type: "city",
        item: city,
        airports: city.airports.filter((airport) => airport.airport_code !== "THR"),
        country: country,
      });

      city.airports.forEach((airport) => {
        cleanedData.push({
          type: "airport",
          item: airport,
          city: city,
          country: country,
        });
      });
    });
  });

  const fuse = new Fuse<SearchResults>(cleanedData, {
    keys: [
      { name: "item.city_name", weight: 0.3, getFn: (result) => (result.type === "city" ? (result.item as City).city_name : "") },
      { name: "item.city_name_fa", weight: 0.5, getFn: (result) => (result.type === "city" ? (result.item as City).city_name_fa : "") },
      { name: "item.city_code", weight: 0.4, getFn: (result) => (result.type === "city" ? (result.item as City).city_code : "") },
      {
        name: "item.airport_name",
        weight: 0.3,
        getFn: (result) => (result.type === "airport" ? (result.item as Airport).airport_name : ""),
      },
      {
        name: "item.airport_name_fa",
        weight: 0.7,
        getFn: (result) => (result.type === "airport" ? (result.item as Airport).airport_name_fa : ""),
      },
      {
        name: "item.airport_code",
        weight: 0.2,
        getFn: (result) => (result.type === "airport" ? (result.item as Airport).airport_code : ""),
      },
    ],
    sortFn: (a, b) => {
      const initIntlCityCodes = [
        "IKA",
        "DXB",
        "FRA",
        "IST",
        "NJF",
        "BGW",
        "IZM",
        "ANK",
        "MOW",
        "BJS",
        "DOH",
        "SHA",
        "BKK",
        "HKT",
        "EVN",
        "TBS",
        "SZX",
      ];
      const initFaCityNames = [
        "تهران",
        "مشهد",
        "شیراز",
        "تبریز",
        "استانبول",
        "بندرعباس",
        "کیش",
        "کرمانشاه",
        "زنجان",
        "یزد",
        "اصفهان",
        "قشم",
        "سنندج",
        "شاهرود",
        "دبی",
        "نجف",
        "بغداد",
        "ازمیر",
        "آنکارا",
        "مسکو",
        "پکن",
        "فرانکفورت",
        "دوحه",
        "شانگهای",
        "بانکوک",
        "لندن",
        "پوکت",
        "ایروان",
        "تفلیس",
        "شنزن",
      ];
      const initFaAirportNames = ["فرودگاه بین المللی امام خمینی"];
      const initDomesticCityCodes = ["THR", "MHD", "SYZ", "TBZ", "BND", "KIH", "KSH", "JWN", "AZD", "IFN", "GSM", "SDG", "RUD"];
      const priorityCodes = [...new Set([...initIntlCityCodes, ...initDomesticCityCodes])];

      const isAPriorityCode = a.matches?.some((match) => {
        return priorityCodes.includes(match.value) || initFaCityNames.includes(match.value) || initFaAirportNames.includes(match.value);
      });

      const isBPriorityCode = b.matches?.some((match) => {
        return priorityCodes.includes(match.value) || initFaAirportNames.includes(match.value) || initFaCityNames.includes(match.value);
      });

      if (isAPriorityCode && !isBPriorityCode) return -1; // A has priority code
      if (!isAPriorityCode && isBPriorityCode) return 1; // B has priority code
      if (isAPriorityCode && isBPriorityCode) {
        return a.score - b.score;
      }

      return 1;
    },

    threshold: 0.1,
    shouldSort: true,
    findAllMatches: false,
    // ignoreDiacritics: true,
    useExtendedSearch: true,
    ignoreFieldNorm: true,

    distance: 500,
    minMatchCharLength: 0,
  });

  useEffect(() => {
    if (props.select === "origin") {
      const input = inputs[props.routeIndex]?.originPreview ?? "";
      const debounceSearch = debounce(() => {
        const results = fuse.search(input);

        setResults(results);
      }, 400);

      debounceSearch();

      return () => {
        debounceSearch.cancel();
      };
    } else {
      const input = inputs[props.routeIndex]?.destinationPreview ?? "";
      const debounceSearch = debounce(() => {
        const results = fuse.search(input);

        setResults(results);
      });

      debounceSearch();

      return () => {
        debounceSearch.cancel();
      };
    }
  }, [inputs, props.routeIndex, props.select]);

  useEffect(() => {
    const initIntlCityCodes = [
      "IKA",
      "DXB",
      "IST",
      "NJF",
      "BGW",
      "IZM",
      "ANK",
      "MOW",
      "BJS",
      "DOH",
      "SHA",
      "BKK",
      "HKT",
      "EVN",
      "TBS",
      "SZX",
    ];
    const initDomesticCityCodes = ["THR", "MHD", "SYZ", "TBZ", "BND", "KIH", "KSH", "JWN", "AZD", "IFN", "GSM", "SDG", "RUD"];
    const trending: SearchResults[] = [];
    initDomesticCityCodes.forEach((city) => {
      let foundedCity = airports.flatMap((country) => country.cities).find((c) => c.city_code === city);

      if (foundedCity) {
        foundedCity = { ...foundedCity, airports: foundedCity.airports.filter((a) => a.airport_code !== "IKA") };

        trending.push({
          type: "city",
          item: foundedCity,
          city: foundedCity,
          airports: foundedCity.airports.filter((a) => a.airport_code !== "IKA"),
          country: airports.find((c) => c.country_code === "IRN")!,
        });
      }
    });
    initIntlCityCodes.forEach((cityCode) => {
      let foundedAirport = airports
        .flatMap((country) => country.cities)
        .flatMap((cities) => cities.airports)
        .find((a) => a.airport_code === cityCode);
      let foundedCity = airports.flatMap((country) => country.cities).find((c) => c.city_code === cityCode);

      if (foundedCity) {
        trending.push({
          type: "city",
          item: foundedCity,
          airports: foundedCity.airports.filter((airport) => airport.airport_code !== "THR"),
          country: airports.find((c) => c.cities.find((city) => city.city_code === cityCode))!,
        });
      }

      if (cityCode === "IKA") {
        trending.push({
          type: "airport",
          item: foundedAirport as Airport,
          country: airports.find((c) => c.country_code === "IRN") as Country,
          city: airports.flatMap((c) => c.cities).find((city) => city.airports.find((a) => a.airport_code === "IKA")),
        });
      }

      // if (foundedAirport) {
      //   trending.push({
      //     type: "airport",
      //     item: foundedAirport,
      //     country: airports.find((c) => c.cities.find((city) => city.airports.find((a) => a.airport_code === foundedAirport.airport_code)))!,
      //     city: airports.flatMap((a) => a.cities).find((c) => c.airports.includes(foundedAirport)),
      //   });
      // }
    });
    setTrendeingResults(trending);
  }, []);

  const onSelect = (params: { data: City | Airport; type: "city" | "airport" }) => {
    if (params.type === "city") {
      if (props.select === "origin") {
        updateSegment(props.routeIndex, "origin", (params.data as City).city_code);
        updateSegment(props.routeIndex, "originLocationType", "city");
        updateInputs(props.routeIndex, "originPreview", (params.data as City).city_name_fa);
        document.getElementById(`${props.routeIndex}-destination`)?.focus();
      } else {
        updateSegment(props.routeIndex, "destination", (params.data as City).city_code);
        updateSegment(props.routeIndex, "destinationLocationType", "city");
        updateInputs(props.routeIndex, "destinationPreview", (params.data as City).city_name_fa);
        document.getElementById(`${props.routeIndex}-departure-date`)?.focus();
      }
    } else {
      if (props.select === "origin") {
        updateSegment(props.routeIndex, "origin", (params.data as Airport).airport_code);
        updateSegment(props.routeIndex, "originLocationType", "airport");
        updateInputs(props.routeIndex, "originPreview", (params.data as Airport).airport_name_fa);
        document.getElementById(`${props.routeIndex}-destination`)?.focus();
      } else {
        updateSegment(props.routeIndex, "destination", (params.data as Airport).airport_code);
        updateSegment(props.routeIndex, "destinationLocationType", "city");
        updateInputs(props.routeIndex, "destinationPreview", (params.data as Airport).airport_name_fa);
        document.getElementById(`${props.routeIndex}-departure-date`)?.focus();
      }
    }
  };

  useEffect(() => {
    console.log("inputs", inputs);
  }, [inputs]);

  return (
    <div className="w-[470px] z-[800]  px-[15px]  py-[15px] top-22 border absolute bg-white shadow rounded-[25px]">
      <div className="w-full h-full max-h-[400px] overflow-y-auto pl-5 scrollbar-thin scrollbar-thumb-primary-400 scrollbar-track-gray-50">
        <>
          {results.length > 0 && (
            <>
              {results.map((result) => {
                if (result.item.type === "city") {
                  return (
                    <CitySuggest
                      onSelect={onSelect}
                      country={result.item.country}
                      city={result.item.item as City}
                    />
                  );
                }

                if (result.item.type === "airport") {
                  return (
                    <AirportSuggest
                      showCode
                      onSelect={onSelect}
                      airport={result.item.item as Airport}
                      city={result.item.city as City}
                    />
                  );
                }
              })}
            </>
          )}
        </>

        {!inputs[props.routeIndex]?.originPreview &&
          props.select === "origin" &&
          trendingResults.map((result) => {
            if (result.type === "city") {
              return (
                <CitySuggest
                  onSelect={onSelect}
                  country={result.country}
                  city={result.item as City}
                />
              );
            }

            if (result.type === "airport") {
              return (
                <AirportSuggest
                  showCode
                  onSelect={onSelect}
                  airport={result.item as Airport}
                  city={result.city as City}
                />
              );
            }
          })}

        {!inputs[props.routeIndex]?.destinationPreview &&
          props.select === "destination" &&
          trendingResults.map((result) => {
            if (result.type === "city") {
              return (
                <CitySuggest
                  onSelect={onSelect}
                  country={result.country}
                  city={result.item as City}
                />
              );
            }

            if (result.type === "airport") {
              return (
                <AirportSuggest
                  showCode
                  onSelect={onSelect}
                  airport={result.item as Airport}
                  city={result.city as City}
                />
              );
            }
          })}
      </div>
    </div>
  );
}

export default OriginDestinationSuggestion;

const CitySuggest = (props: {
  city: City;
  country: Country;
  onSelect: (params: { data: City | Airport; type: "city" | "airport" }) => void;
}) => {
  return (
    <>
      <button
        onClick={() =>
          props.onSelect({
            data: props.city,
            type: "city",
          })
        }
        className="flex hover:text-primary-500 text-gray-500 w-full h-[60px] items-center justify-between"
      >
        <div className="flex items-center gap-x-2">
          <MapPin size={20} />
          <div>
            <p>
              {props.city.city_name_fa} ، {props.country.country_name_fa}
            </p>
          </div>
        </div>
        <p>{props.city.city_code}</p>
      </button>

      <div className="pr-2">
        {props.city.airports.map((airport) => (
          <div className="flex group  gap-x-2">
            <div>
              <div className="w-[2px] group-hover:bg-primary-400 h-[30px] bg-gray-200"></div>
              <div className="w-[25px] group-hover:bg-primary-400 h-[2px] bg-gray-200"></div>
            </div>
            <AirportSuggest
              airport={airport}
              onSelect={props.onSelect}
              city={props.city}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const AirportSuggest = (props: {
  airport: Airport;
  city: City;
  showCode?: boolean;
  onSelect: (params: { data: City | Airport; type: "city" | "airport" }) => void;
}) => {
  return (
    <button
      onClick={() =>
        props.onSelect({
          data: props.airport,
          type: "airport",
        })
      }
      className="flex  hover:text-primary-500 text-gray-500 w-full h-[60px] items-center justify-between"
    >
      <div className="flex items-center gap-x-2">
        <Plane size={20} />
        <div>
          <p>
            {props.airport.airport_name_fa} ، {props.city.city_name_fa}
          </p>
        </div>
      </div>
      {props.showCode && <p>{props.airport.airport_code}</p>}
    </button>
  );
};
