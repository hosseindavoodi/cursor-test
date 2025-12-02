import { useState, useEffect } from "react";

function useFocusWithin<T extends HTMLElement | null>(ref: React.RefObject<T>) {
  const [isFocusedWithin, setIsFocusedWithin] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleFocusIn = () => {
      setIsFocusedWithin(true);
    };

    // const handleFocusOut = (event: FocusEvent) => {
    //   // Check if the new focused element is outside the ref'd element
    //   if (!element.contains(event.relatedTarget as Node)) {
    //     setIsFocusedWithin(false);
    //   }
    // };

    const handleClickOutside = (event: MouseEvent) => {
      // Only update state if click is outside the ref'd element
      if (!element.contains(event.target as Node)) {
        setIsFocusedWithin(false);
      } else {
        setIsFocusedWithin(true);
      }
    };

    // Add focusin and focusout event listeners to detect focus changes
    element.addEventListener("focusin", handleFocusIn);
    // element.addEventListener("focusout", handleFocusOut);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      element.removeEventListener("focusin", handleFocusIn);
      // element.removeEventListener("focusout", handleFocusOut);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { isFocusedWithin, setIsFocusedWithin };
}

export default useFocusWithin;
