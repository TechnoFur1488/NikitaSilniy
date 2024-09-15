import styled from "styled-components";

export const DivLine = styled.div `
    width: 300px;
    height: 2px;
    background-color: #6B6B6B;
`

export const FirstInformation = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FirstInformationDivText = styled.div `
    width: 50%;
`

export const FirstInformationDivTextH2 = styled.h2 `
    font-size: 36px;
    color: #6B6B6B;
`

export const FirstInformationDivTextP = styled.p `
    font-size: 30px;
    font-weight: 600;
`

export const SecondInformation = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    padding-top: 100px;
`

export const SecondInformationDivText = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
    text-align: right;
`

export const SecondInformationDivTextH2 = styled.h2 `
    font-size: 36px;
    color: #6B6B6B;
`

export const SecondInformationDivTextP = styled.p `
    font-size: 30px;
    font-weight: 600;
`

export const SectionImg = styled.section `
    background-image: url('/images/image 16.svg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 880px;
`

export const SectionImgColor = styled.div `
    height: 880px;
    background: linear-gradient(65.99deg, #000 0, transparent 99.04%);
`

export const SectionImgH1 = styled.h1 `
    margin: 100px 0;
    color: white;
    font-size: 42px;
`

export const SectionImgP = styled.p `
    width: 70%;
    color: white;
    font-size: 25px;
`