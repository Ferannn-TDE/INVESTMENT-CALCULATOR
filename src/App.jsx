import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = (input) => {
    return input.duration >= 1;
  };

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInputData={userInput} onChangeInput={handleChange} />
      {!inputIsValid(userInput) && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid(userInput) && <Results input={userInput} />}
    </>
  );
}

export default App;
