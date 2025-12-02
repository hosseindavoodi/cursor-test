import React from "react";
import { getTrackBackground, Range } from "react-range";
function Slider(rangeProps: { value: number[]; setValue: (value: number[]) => void; min: number; max: number }) {
  return (
    <Range
      label="Select your value"
      step={0.1}
      min={rangeProps.min}
      rtl
      max={rangeProps.max}
      values={rangeProps.value}
      onChange={(values) => rangeProps.setValue(values)}
      renderTrack={({ props, children }) => (
        <div
          className="overflow-visible px-3"
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "3px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: rangeProps.value,
                colors: ["#DCE0E8", "#000", "#DCE0E8"],
                min: rangeProps.min,
                max: rangeProps.max,
                rtl: true,
              }),

              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          key={props.key}
          className="rounded-full p-1 flex flex-col justify-center items-center"
          style={{
            ...props.style,
            height: "20px",
            width: "20px",
            backgroundColor: "#000",
          }}
        >
          <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
        </div>
      )}
    />
  );
}

export default Slider;
