import {useState} from 'react'
import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10
  });

  const isValidInput = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput =>  {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    }
    );
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!isValidInput && <p className="center">Please enter a duration greater than 0</p>}
      {isValidInput && <Results input={userInput}/>}
    </>
  )
}

export default App
