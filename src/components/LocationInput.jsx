import { useRef } from "react";

const LocationInput = ({ handleSearchButton }) => {
  const inputLoc = useRef("");

  const handleClickButton = () => {
    let inputLocation = inputLoc.current.value;
    inputLoc.current.value = "";
    console.log(inputLocation);
    handleSearchButton(inputLocation);
  };

  return (
    <div className="input-container">
      <input
        placeholder="Search for cities"
        type="text"
        className="input-box"
        ref={inputLoc}
      ></input>
      <button
        type="button"
        className="btn btn-info"
        onClick={handleClickButton}
      >
        Search
      </button>
    </div>
  );
};

export default LocationInput;
