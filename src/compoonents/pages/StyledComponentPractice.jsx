import { memo } from 'react';
import styled from "styled-components";


export const StyledComponentPractice = memo(() => {
    return(
        <SContainer>
            <STitle>- styled componemt -</STitle>
            <SButton>ok!</SButton>
        </SContainer>
    )
});

const SContainer = styled.div`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const STitle = styled.p`
    margin:8px;
    color: #a72175;

`
const SButton = styled.button`
    background-color: #Abcdef;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover (
        backgroud-color: #520508;
        color: #fff;
        cursor: pointer;
    )
`