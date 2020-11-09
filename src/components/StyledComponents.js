
import styled from "styled-components"

export const AppContainer = styled.div `
font-family: 'Inconsolata', monospace;
display: flex;
justify-content: center;
flex-direction: column;
margin: 50px;
text-align: center;
h1 {
    justify-content: center;
}
border: 1px solid black;
`
export const Curr = styled.div `
 color: blue;
 font-size: 2em;
`
export const CurrContainer = styled.div `
margin-top: 2em;
font-family: 'Inconsolata', monospace;
max-width: 400px;
display: flex;
justify-content: center;
flex-direction: column;
align-self: center;

`

export const CurrHeading = styled.div `
font-family: 'Inconsolata', monospace;

padding: 10px;
text-align: center;
select {
    width: 200px;  
}
`
export const ChartArea = styled.div `
margin-top: 2em;
margin-bottom: 2em;
width: 100%;
max-width: 800px;
margin-left: auto;
margin-right: auto;
`