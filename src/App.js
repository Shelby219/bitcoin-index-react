import React, {useState, useEffect} from 'react'
import CurrencySelector from "./components/CurrencySelector.js"
import DataDisplay from "./components/DataDisplay.js"
import {AppContainer, Curr} from './components/StyledComponents'

const App = () => {

  const defaultCurrency = "AUD"
  const [currency, setCurrency] = useState(defaultCurrency) //The useState hook makes it easy to define this piece of state.
  const [bitcoinData, setBitcoinData] = useState({}) //The bitcoin data will be stored in state in App as well

  function currencyChangeHandler(currency) {
    console.log("currency:", currency)
    setCurrency(currency); //when the selection is changed, setCurrency will be called with the new currency value.
  }

  const bitcoinApi = "https://api.coindesk.com/v1/bpi/historical/close.json"//Sets the url for our fetch. We will append the currency query.

  useEffect(() => { //Calls fetch and parses the response, then calls setBitcoinData with the part of the object (bpi) that we are going to display.
      console.log("inside of useEffect")
        function getData() { //Calls the getData function to fetch the data and store it in our state.
          fetch(`${bitcoinApi}?currency=${currency}`) 
            .then(response => response.json())
            .then(data => setBitcoinData(data.bpi))
            .catch(e => e)
        }
      getData()
    },[currency]) //Passing [currency] as the second argument will mean that useEffect will only be called when render happens due to a change in currency.
    
  return (
    <div>
       <AppContainer>
    	  <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;700&family=Montserrat:wght@200;300;400;500&display=swap" rel="stylesheet"></link>
         <h1>Bitcoin Index</h1>
         <CurrencySelector currency={currency} handleCurrencyChange={currencyChangeHandler} /> 
         <h2>Bitcoin data for: <Curr>{currency}</Curr></h2>
         <DataDisplay data={bitcoinData}/>
        </AppContainer>
   
    </div>
  )   
  //and passing it as a prop to CurrencySelector
  //along with a callback function to handle the change when a user selects a currency.
  //define the default currency, then call useState to define the initial state and the function to change it
}

export default App
