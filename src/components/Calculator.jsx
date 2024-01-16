import styled from "styled-components";


const Calculator = () => {
    return (
        <Container></Container>
    );
}

export default Calculator;

const Container = styled.div`
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
`;