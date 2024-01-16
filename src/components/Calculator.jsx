import styled from "styled-components";

import Arrow from '../assets/arrow.svg';

import InputYear from "./InputYear";
import Result from "./Result";


const Calculator = ({
    theme,
}) => {
    return (
        <Container>
            <InputYear />

            <SubmitContainer>
                <Line />
                <Submit>
                    <SubmitIcon src={Arrow} alt="arrow down icon" theme={theme} />
                </Submit>
            </SubmitContainer>

            <Result />
        </Container>
    );
}

export default Calculator;

const Container = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.font};
    padding: 3.5rem;
    margin: 2rem;
    border-radius: 1.5rem 1.5rem 12.5rem 1.5rem;
    transition: all .6s ease;
`;

const SubmitContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`;

const Line = styled.div`
    flex: 100%;
    height: 1px;
    background-color: ${props => props.theme.accent};
`;

const Submit = styled.div`
    border-radius: 50%;
    background-color: ${props => props.theme.secondary};
    display: flex;
    width: 6rem;
    height: 6rem;
    min-width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const SubmitIcon = styled.img`
    height: 45%;

    ${props => props.theme == "day" && `
        filter: invert(100%);
    `}
`;