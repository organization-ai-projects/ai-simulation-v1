import { useEffect } from "react";

const useEventListener = (
  eventName: string,
  handler: (event: Event) => void,
  element: EventTarget = window
) => {
  useEffect(() => {
    if (!element || !element.addEventListener) return;

    element.addEventListener(eventName, handler);

    return () => {
      element.removeEventListener(eventName, handler);
    };
  }, [eventName, handler, element]);
};

export default useEventListener;
