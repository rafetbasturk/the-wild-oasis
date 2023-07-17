import { useEffect, useRef } from "react";

const useOutsideClick = (setFunction, listenCapturing = true) => {
  const ref = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setFunction(false);
      }
    };

    document.addEventListener("click", handler, listenCapturing);

    return () => {
      document.removeEventListener("click", handler, listenCapturing);
    };
  }, [setFunction, listenCapturing]);

  return ref;
};

export default useOutsideClick;
