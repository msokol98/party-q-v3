import { useEffect } from "react";
import { useState } from "react";

const useInput = (initialValue, type) => {

  const [value, setValue] = useState(initialValue);
  const [regex, setRegex] = useState();

  useEffect(() => {
      if(type && type === "number") {
          setRegex(/^[0-9\b]+$/);
      }
  }, [type]);


  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: e => {
        const newValue = e.target.value;

        if (newValue === '' || !regex || regex.test(newValue)) {
            setValue(newValue);
        }
      }
    }
  };
};

export default useInput;