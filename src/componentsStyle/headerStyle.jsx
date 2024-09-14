import styled from "styled-components";

export const UlHeader = styled.ul `
    display: flex;
`

export const LiHeader = styled.li `
    &:not(:last-child) {
        margin-right: 60px;
    }
`

export const AHeader = styled.a `
    font-size: 20px;
    font-weight: 600;
`