import { Input } from "@sana/ui/components/input";
import { ArrowLeftRight } from "lucide-react";
import { useFlightSearchStore } from "../../_store/flight.search.store";
import { useEffect, useRef } from "react";
import useFocusWithin from "@sana/ui/hooks/useFoucsWithin";
import OriginDestinationSuggestion from "./origin.destination.suggestion";

function OriginDestinationPicker(props: { routeIndex: number }) {
  const { updateInputs, payload, inputs, updateFocuses, updateSegment, reverseOriginDestination } = useFlightSearchStore();

  const originRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);

  const { isFocusedWithin: isOriginFocused, setIsFocusedWithin: setIsOriginFocusedWithin } = useFocusWithin(originRef);
  const { isFocusedWithin: isDestinationFocused, setIsFocusedWithin: setIsDestinationFocusedWithin } = useFocusWithin(destinationRef);

  useEffect(() => {
    if (isDestinationFocused) {
      setIsOriginFocusedWithin(false);
    }
  }, [isDestinationFocused]);

  useEffect(() => {
    if (isOriginFocused) {
      setIsDestinationFocusedWithin(false);
    }
  }, [isOriginFocused]);

  useEffect(() => {
    updateFocuses(props.routeIndex, "setIsOriginFocus", setIsOriginFocusedWithin);
    updateFocuses(props.routeIndex, "setIsDestinationFocus", setIsDestinationFocusedWithin);
  }, [props.routeIndex]);

  return (
    <div className="w-full relative   flex">
      <div
        ref={originRef}
        className=" flex relative w-full flex-col gap-y-1"
      >
        <p className="font-semibold text-[14px]">مبدا</p>
        <Input
          onFocus={() => {
            if (payload.flightTypeName === "round_trip") {
              updateInputs(props.routeIndex, "originPreview", "");
              updateSegment(props.routeIndex, "origin", "");
              updateSegment(props.routeIndex, "originLocationType", "city");

              updateInputs(1, "originPreview", "");
              updateSegment(1, "origin", "");
              updateSegment(1, "originLocationType", "city");
            } else {
              updateInputs(props.routeIndex, "originPreview", "");
              updateSegment(props.routeIndex, "origin", "");
              updateSegment(props.routeIndex, "originLocationType", "city");
            }
          }}
          id={`${props.routeIndex}-origin`}
          value={inputs[props.routeIndex]?.originPreview}
          onChange={(e) => updateInputs(props.routeIndex, "originPreview", e.target.value)}
          className="w-full h-[52px] px-5 rounded-l-none rounded-r-full"
        />
        {isOriginFocused && (
          <OriginDestinationSuggestion
            routeIndex={props.routeIndex}
            select="origin"
          />
        )}
      </div>

      <button
        onClick={() => reverseOriginDestination()}
        tabIndex={-1}
        className="absolute z-[10]  top-8 left-1/2 -translate-x-1/2 bg-white border w-[40px] h-[40px] border-gray-400 flex justify-center items-center rounded-full"
      >
        <ArrowLeftRight size={20} />
      </button>
      <div
        ref={destinationRef}
        className=" relative flex w-full flex-col gap-y-1"
      >
        <p className="font-semibold text-[14px]">مقصد</p>
        <Input
          onFocus={() => {
            if (payload.flightTypeName === "round_trip") {
              updateInputs(props.routeIndex, "destinationPreview", "");
              updateSegment(props.routeIndex, "destination", "");
              updateSegment(props.routeIndex, "destinationLocationType", "city");

              updateInputs(1, "destinationPreview", "");
              updateSegment(1, "destination", "");
              updateSegment(1, "destinationLocationType", "city");
            } else {
              updateInputs(props.routeIndex, "destinationPreview", "");
              updateSegment(props.routeIndex, "destination", "");
              updateSegment(props.routeIndex, "destinationLocationType", "city");
            }
          }}
          id={`${props.routeIndex}-destination`}
          value={inputs[props.routeIndex]?.destinationPreview}
          onChange={(e) => updateInputs(props.routeIndex, "destinationPreview", e.target.value)}
          className="w-full pr-8 h-[52px]  rounded-l-full rounded-r-none"
        />

        {isDestinationFocused && (
          <OriginDestinationSuggestion
            routeIndex={props.routeIndex}
            select="destination"
          />
        )}
      </div>
    </div>
  );
}

export default OriginDestinationPicker;
