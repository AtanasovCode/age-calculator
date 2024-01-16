import styled from "styled-components";

const InputYear = () => {
    return (
        <Container>
            <InputContainer>
                <Label>DAY</Label>
                <Input 
                type="text"
                placeholder="DD"
            />
            </InputContainer>
        </Container>
    );
}

export default InputYear;

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-right: 2rem;
`;

const Label = styled.div`
    color: ${props => props.theme.accent};

    /* Heading S */
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.21875rem;
    text-transform: uppercase;
    margin-bottom: .5rem;
`;

const Input = styled.input`
    color: ${props => props.theme.text};

    /* Heading M */
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.02rem;
    padding: .75rem 1.5rem;
    background-color: transparent;
    border: 1px solid ${props => props.theme.text};
`;