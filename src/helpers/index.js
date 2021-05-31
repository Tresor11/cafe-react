import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFileChange = (event) => {
    if (event.target.files[0].size > 500000) {
      alert("Choose a picture with 500kb or less please");
      setValue("");
    } else {
      setValue(event.target.files[0]);
    }
  };

  return {
    value,
    onChange: handleChange,
    handleFileChange,
  };
};

const resetInputs = (...args) => {
  args.forEach((obj) => {
    obj.value = "";
  });
};

const showLoader = () => {
  console.log("Loading...");
  var element = document.getElementsByClassName("loader")[0];
  console.log(element);
  if (element) {
    element.classList.toggle("active");
  }
};

export { useInput, resetInputs, showLoader };
