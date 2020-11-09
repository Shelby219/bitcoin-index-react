import React from 'react'
import currencies from '../supported-currencies.json'
import {CurrContainer, CurrHeading} from './StyledComponents'

// to receive currency and handleCurrencyChange from App as props. 
const CurrencySelector = ({currency, handleCurrencyChange}) => {


    //Define a select element that creates an option for each currency in supported-currencies.json, and set the currency passed in as the current value.
    return (
        <CurrContainer>
             <CurrHeading > Select your currency: </CurrHeading>
            <select value={currency} onChange={(event) => handleCurrencyChange(event.target.value)}>
                {currencies.map((obj, index) =>
                <option key={`${index}-${obj.country}`} value={obj.currency}> {obj.country} </option>
                )}
            </select> 
        </CurrContainer>
    )
}

export default CurrencySelector