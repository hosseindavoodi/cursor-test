import { useState, useEffect } from "react";

function useFocusLeave<T extends HTMLElement | null>(ref: React.RefObject<T>) {
  const [hasFocusLeft, setHasFocusLeft] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleFocusOut = (event: FocusEvent) => {
      if (!element.contains(event.relatedTarget as Node)) {
        setHasFocusLeft(true);
      } else {
        setHasFocusLeft(false);
      }
    };

    element.addEventListener("focusout", handleFocusOut);

    return () => {
      element.removeEventListener("focusout", handleFocusOut);
    };
  }, [ref]);

  return { hasFocusLeft, setHasFocusLeft };
}

export default useFocusLeave;
