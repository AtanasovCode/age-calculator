import { useState } from "react";
import styled from "styled-components";

import Arrow from '../assets/arrow.svg';

const InputYear = ({
    date,
    setDate,
    theme,
    calculateAge,
}) => {

    const { day, month, year } = date;

    const [d, setD] = useState(day);
    const [m, setM] = useState(month);
    const [y, setY] = useState(year);

    const [error, setError] = useState(false);

    const handleSubmit = () => {
        if(d && m && y) {
            setError(false);

            const newDay = parseInt(d, 10);
            const newMonth = parseInt(m, 10);
            const newYear = parseInt(y, 10);

            const tempDate = {day: newDay, month: newMonth, year: newYear};

            setDate(tempDate);
            calculateAge(tempDate);
        } else {
            setError(true);
        }
    }

    return (
        <Container>
            <InputWrapper>
                <InputContainer>
                    <Label>DAY</Label>
                    <Input
                        type="text"
                        placeholder="DD"
                        $error={error}
                        value={d}
                        onChange={(e) => setD(e.currentTarget.value)}
                    />
                </InputContainer>

                <InputContainer>
                    <Label>MONTH</Label>
                    <Input
                        type="text"
                        placeholder="MM"
                        $error={error}
                        value={m}
                        onChange={(e) => setM(e.currentTarget.value)}
                    />
                </InputContainer>

                <InputContainer>
                    <Label>YEAR</Label>
                    <Input
                        type="text"
                        placeholder="YYYY"
                        $error={error}
                        value={y}
                        onChange={(e) => setY(e.currentTarget.value)}
                    />
                </InputContainer>
            </InputWrapper>
            {
                error && <ErrorMessage>Please input valid data</ErrorMessage>
            }

            <SubmitContainer>
                <Line />
                <Submit onClick={() => handleSubmit()}>
                    <SubmitIcon src={Arrow} alt="arrow down icon" theme={theme} />
                </Submit>
            </SubmitContainer>
        </Container>
    );
}

export default InputYear;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const InputWrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 675px) {
        width: 100%;
        justify-content: center;
    }
`;

const ErrorMessage = styled.div`
    font-size: 16px;
    color: red;
    margin-top: .5rem;
`;

const InputContainer = styled.div`
    flex: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: 2rem;

    @media (max-width: 657px) {
        flex: 100%;
        margin: 0;

        &:nth-child(2) {
            margin: 0 .5rem;
        }
    }
`;

const Label = styled.div`
    color: ${props => props.theme.accentText};

    /* Heading S */
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.21875rem;
    text-transform: uppercase;
    margin-bottom: .5rem;
    text-transform: uppercase;

    @media (max-width: 900px) {
        font-size: 11px;
    }
`;

const Input = styled.input`
    color: ${props => props.theme.text};
    min-width: 0;
    width: 100%;
    border-radius: .5rem;
    padding: 0.75rem 1.5rem;
    font-size: 20px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.text};

    &:focus {
        outline: none;
    }

    ${props => props.$error && `
        border: 1px solid red;
    `}

    @media (max-width: 900px) {
        font-size: 16px;
        padding: .4rem .8rem;
    }

    @media (max-width: 675px) {
        font-size: 18px;
        padding: .6rem 1rem;
    }
`;


const SubmitContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    @media (max-width: 675px) {
        justify-content: center;
        position: relative;
        margin: 4rem 0;
    }
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
    width: 4.5rem;
    height: 4.5rem;
    min-width: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (max-width: 675px) {
        position: absolute;
        width: 4rem;
        height: 4rem;
        min-width: 4rem;
    }
`;

const SubmitIcon = styled.img`
    height: 45%;

    ${props => props.theme == "day" && `
        filter: invert(100%);
    `}
`;