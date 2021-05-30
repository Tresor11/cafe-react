import { useState } from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleFileChange = (event)=>{
      setValue(event.target.files[0])
    }

    return {
        value,
        onChange: handleChange,
        handleFileChange
    };
};

const resetInputs=(...args)=>{
  args.forEach((obj)=>{
    obj.value = ''
  })
}

export {useInput,resetInputs};