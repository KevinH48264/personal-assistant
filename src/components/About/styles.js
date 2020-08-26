import styled from 'styled-components'

// Info
export const InfoContainer = styled.div`
    background-color: #1B99E8;
    display: flex;
    justify-content: center;  
    width: 100%; 
`
export const InfoInner = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;  
    width: 1200px;
    color: white;
    font-family: helvetica-w01-light,helvetica-w02-light,sans-serif;
    padding-top: 25px;
    padding-bottom: 125px;
`
export const Feature = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 275px;
    padding: 25px;
`
export const FeatureHeading = styled.p`
    font-weight: bold;
    font-size: 36px;
    margin: 0px;
`

export const FeatureText = styled.p`
    font-size: 24px;
`

export const FeatureLink = styled.a`
    font-size: 18px;
    color: white;
    text-decoration: none;
`

export const Text = styled.p`
    font-size: 18px;
`
