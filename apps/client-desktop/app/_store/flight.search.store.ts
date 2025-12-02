import { create } from "zustand";
import { CabinClass, FlightSearchPayload, FlightSearchSegments } from "@sana/types/flight/flight";
import { stat } from "fs";
export type FlightSearchStore = {
  setStore: {
    (
      partial:
        | FlightSearchStore
        | Partial<FlightSearchStore>
        | ((state: FlightSearchStore) => FlightSearchStore | Partial<FlightSearchStore>),
      replace?: false
    ): void;
    (state: FlightSearchStore | ((state: FlightSearchStore) => FlightSearchStore), replace: true): void;
  };
  //   origin: {
  //     code: string;
  //     preview: string;
  //     country: string;
  //   };

  dateLocale: "jalali" | "gregorian";

  inputs: {
    originPreview: string;
    destinationPreview: string;
    departure_date: string;
  }[];

  focuses: {
    setIsOriginFocus: (state: boolean) => void;
    setIsDestinationFocus: (state: boolean) => void;
    setIsDepartureDateFocus: (state: boolean) => void;
    setIsPassengerFocus: (state: boolean) => void;
  }[];

  updateSegment: (index: number, key: keyof FlightSearchSegments, value: FlightSearchSegments[keyof FlightSearchSegments]) => void;

  reverseOriginDestination: () => void;

  updateInputs: (
    index: number,
    key: keyof FlightSearchStore["inputs"][1],
    value: FlightSearchStore["inputs"][1][keyof FlightSearchStore["inputs"][1]]
  ) => void;

  updateFlightType: (flightType: "one_way" | "round_trip") => void;

  updateFocuses: (
    index: number,
    key: keyof FlightSearchStore["focuses"][1],
    value: FlightSearchStore["focuses"][1][keyof FlightSearchStore["focuses"][1]]
  ) => void;

  addSegment: () => void;
  removeSegment: (index: number) => void;

  payload: FlightSearchPayload;

  requestedPayload?: FlightSearchPayload;

  timeout: number;
  timePassed: number;
  showSearchBar: boolean;
  //   destination: {
  //     code: string;
  //     preview: string;
  //     country: string;
  //   };
};

export const useFlightSearchStore = create<FlightSearchStore>((set, get) => ({
  inputs: [
    {
      originPreview: "",
      destinationPreview: "",
      departure_date: "",
    },
  ],

  timeout: 30,
  timePassed: 0,

  dateLocale: "jalali",

  showSearchBar: false,

  focuses: [
    {
      setIsDepartureDateFocus: (state) => {
        return;
      },
      setIsDestinationFocus: (state) => {
        return;
      },
      setIsOriginFocus: (state) => {
        return;
      },
      setIsPassengerFocus: (state) => {
        return;
      },
    },
  ],
  reverseOriginDestination: () => set(reverseOriginDestinationHandler()),
  updateSegment: (index, key, value) => set(updateSegment(index, key, value)),
  addSegment: () => set(addSegment()),
  removeSegment: (index) => set(removeSegment(index)),
  updateInputs: (index, key, value) => set(updateInputs(index, key, value)),
  updateFocuses: (index, key, value) => set(updateFocuses(index, key, value)),
  updateFlightType: (flightType) => set(updateFlightType(flightType)),
  payload: {
    adult: 1,
    child: 0,
    infant: 0,
    cabinClasses: [CabinClass.ECONOMY],
    flightTypeName: "one_way",
    segs: [
      {
        index: 0,
        origin: "",
        destination: "",
        originLocationType: "city",
        destinationLocationType: "city",
        departureDate: "",
      },
    ],
  },

  setStore: set,
}));

const updateSegment =
  (index: number, key: keyof FlightSearchSegments, value: FlightSearchSegments[keyof FlightSearchSegments]) =>
  (state: FlightSearchStore): FlightSearchStore => {
    const segs = state.payload.segs.map((seg, i) => (i === index ? { ...seg, [key]: value } : seg));
    return {
      ...state,
      payload: { ...state.payload, segs },
      // keep UI inputs in sync (optional – see note below)
      // inputs: segs.map((s) => ({
      //   originPreview: s.origin,
      //   destinationPreview: s.destination, // you can fill it from a lookup if you want
      //   departure_date: s.departureDate,
      // })),
    };
  };

const updateInputs =
  (index: number, key: keyof FlightSearchStore["inputs"][1], value: FlightSearchStore["inputs"][1][keyof FlightSearchStore["inputs"][1]]) =>
  (state: FlightSearchStore): FlightSearchStore => {
    const inputs = state.inputs.map((input, i) => (i === index ? { ...input, [key]: value } : input));
    return {
      ...state,
      inputs,
    };
  };

const updateFocuses =
  (
    index: number,
    key: keyof FlightSearchStore["focuses"][1],
    value: FlightSearchStore["focuses"][1][keyof FlightSearchStore["focuses"][1]]
  ) =>
  (state: FlightSearchStore): FlightSearchStore => {
    const focuses = state.focuses.map((input, i) => (i === index ? { ...input, [key]: value } : input));
    return {
      ...state,
      focuses,
    };
  };

const addSegment =
  () =>
  (state: FlightSearchStore): FlightSearchStore => {
    const newIdx = state.payload.segs.length;
    const newSeg: FlightSearchSegments = {
      index: newIdx,
      origin: "",
      destination: "",
      originLocationType: "city",
      destinationLocationType: "city",
      departureDate: "",
    };

    return {
      ...state,
      payload: {
        ...state.payload,
        segs: [...state.payload.segs, newSeg],
      },
      inputs: [...state.inputs, { originPreview: "", destinationPreview: "", departure_date: "" }],
    };
  };

const removeSegment =
  (index: number) =>
  (state: FlightSearchStore): FlightSearchStore => {
    if (state.payload.segs.length <= 1) return state; // keep at least one

    const newSegs = state.payload.segs.filter((_, i) => i !== index).map((seg, i) => ({ ...seg, index: i }));

    return {
      ...state,
      payload: { ...state.payload, segs: newSegs },
      inputs: state.inputs.filter((_, i) => i !== index),
    };
  };

const updateFlightType =
  (flightType: "one_way" | "round_trip") =>
  (state: FlightSearchStore): FlightSearchStore => {
    let result: FlightSearchStore;
    if (flightType === "one_way") {
      result = {
        ...state,
        payload: {
          ...state.payload,
          flightTypeName: "one_way",
          segs: [state.payload.segs[0]!],
        },
        inputs: [state.inputs[0]!],
      };

      return result;
    }

    if (flightType === "round_trip") {
      const firstSeg = state.payload.segs[0];
      const firstInput = state.inputs[0];

      if (firstSeg && firstInput) {
        result = {
          ...state,
          payload: {
            ...state.payload,
            flightTypeName: "round_trip",
            segs: [
              ...state.payload.segs,
              {
                origin: firstSeg.destination,
                destination: firstSeg.origin,
                destinationLocationType: firstSeg.originLocationType,
                originLocationType: firstSeg.destinationLocationType,
                departureDate: "",
                index: 1,
              },
            ],
          },
          inputs: [
            ...state.inputs,
            { originPreview: firstInput.destinationPreview, destinationPreview: firstInput.originPreview, departure_date: "" },
          ],
        };

        return result;
      }
    }

    return {
      ...state,
    };
  };

const reverseOriginDestinationHandler =
  () =>
  (state: FlightSearchStore): FlightSearchStore => {
    let result: FlightSearchStore = {
      ...state,
      payload: {
        ...state.payload,
        segs: state.payload.segs.map((s) => ({
          ...s,
          origin: s.destination,
          originLocationType: s.destinationLocationType,
          destination: s.origin,
          destinationLocationType: s.originLocationType,
        })),
      },
      inputs: state.inputs.map((i) => ({ ...i, originPreview: i.destinationPreview, destinationPreview: i.originPreview })),
    };

    return result;
  };
