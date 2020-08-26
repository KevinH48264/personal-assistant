import styled from 'styled-components'

// Info
export const InfoContainer = styled.div`
    background-color: lightblue;
    display: flex;
    justify-content: center;  
    width: 100%; 
`
export const InfoInner = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;  
    width: 800px;
    color: white;
    font-family: helvetica-w01-light,helvetica-w02-light,sans-serif;
    padding-top: 25px;
    padding-bottom: 125px;
`

export const ContactRowContainer = styled.div`
    width: 100%;
    border-color: darkblue;
    border-style: solid;
`

export const ContactInputRow = styled.div`
    display: flex;
    justify-content: row;
    width: 100%;
`

export const ContactInput = styled.input`
    width: 100%;
    color: black;
    border-color: darkblue;
    border-style: solid;
    padding: 25px;
    font-size: 18px;
`

export const ContactFormButton = styled.button`
    width: 30%;
    padding: 20px;
    font-size: 18px;
    color: white;
    background-color: rgba(55, 59, 77, 1);
`
