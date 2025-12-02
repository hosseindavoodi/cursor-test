import airports from "@sana/constants/airports.json";

export const iataLookup = (
  iata?: string
): {
  country: {
    countryFaName: string;
    countryEnName: string;
    countryCode: string;
  };
  city: {
    cityFaName: string;
    cityEnName: string;
    cityCode: string;
  };
  airport: {
    airportFaName: string;
    airportEnName: string;
    airportCode: string;
  };
} => {
  let findCity = airports.flatMap((country) => country.cities).find((city) => city.city_code === iata);
  let findAirport = airports
    .flatMap((country) => country.cities)
    .flatMap((cities) => cities.airports)
    .find((airport) => airport.airport_code === iata);

  let outputCity = {
    cityFaName: "",
    cityEnName: "",
    cityCode: "",
  };

  let outputAirport = {
    airportFaName: "",
    airportEnName: "",
    airportCode: "",
  };

  let outputCountry = {
    countryFaName: "",
    countryEnName: "",
    countryCode: "",
  };

  if (findCity) {
    outputCity = {
      cityFaName: findCity.city_name_fa,
      cityEnName: findCity.city_name,
      cityCode: findCity.city_code,
    };

    let country = airports.find((c) => c.cities.find((city) => city.city_code === findCity.city_code));

    if (country) {
      outputCountry = {
        countryEnName: country.country_name,
        countryFaName: country.country_name_fa,
        countryCode: country.country_code,
      };
    }
    return {
      airport: outputAirport,
      city: outputCity,
      country: outputCountry,
    };
  }

  if (findAirport) {
    outputAirport = {
      airportEnName: findAirport.airport_name,
      airportCode: findAirport.airport_code,
      airportFaName: findAirport.airport_name_fa,
    };

    const city = airports.flatMap((c) => c.cities).find((city) => city.airports.find((a) => a.airport_code === findAirport.airport_code));

    const country = airports.find((c) => c.cities.find((cities) => cities.city_code === city?.city_code));

    if (city) {
      outputCity = {
        cityCode: city.city_code,
        cityEnName: city.city_name,
        cityFaName: city.city_name_fa,
      };

      if (country) {
        outputCountry = {
          countryCode: country.country_code,
          countryEnName: country.country_name,
          countryFaName: country.country_name_fa,
        };
      }
    }

    return {
      airport: outputAirport,
      city: outputCity,
      country: outputCountry,
    };
  }

  return {
    airport: {
      airportCode: "",
      airportEnName: "",
      airportFaName: "",
    },
    city: {
      cityCode: "",
      cityEnName: "",
      cityFaName: "",
    },
    country: {
      countryCode: "",
      countryEnName: "",
      countryFaName: "",
    },
  };
};
