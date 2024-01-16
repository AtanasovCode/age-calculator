import styled from "styled-components";

import InputYear from "./InputYear";
import Result from "./Result";


const Calculator = ({
    theme,
    date,
    setDate,
    age,
    setAge,
}) => {
    return (
        <Container>
            <InputYear
                theme={theme}
                date={date}
                setDate={setDate}
            />

            <Result
                age={age}
                setAge={setAge}
            />
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