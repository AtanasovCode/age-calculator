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

            <InputContainer>
                <Label>MONTH</Label>
                <Input
                    type="text"
                    placeholder="MM"
                />
            </InputContainer>

            <InputContainer>
                <Label>YEAR</Label>
                <Input
                    type="text"
                    placeholder="YYYY"
                />
            </InputContainer>
        </Container>
    );
}

export default InputYear;

const Container = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const InputContainer = styled.div`
    flex: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: 2rem;
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
`;

const Input = styled.input`
    color: ${props => props.theme.text};
    min-width: 0;
    width: 100%;
    border-radius: .5rem;
    padding: 0.75rem 1.5rem;
    font-size: 2rem;
    background-color: transparent;
    border: 1px solid ${props => props.theme.text};

    &:focus {
        outline: none;
    }
`;