import styled from 'styled-components'

// Info
export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;  
    width: 100%; 
    padding-top: 100px;
    padding-bottom: 125px;
`
export const InfoInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    color: black;
`

export const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 170px;
    padding-right: 25px;
`

export const Feature = styled.div`
    display: flex;
    width: 275px;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`

export const Image = styled.img`
    max-width: 250px;
    max-height: 80px;
`
