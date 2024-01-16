import styled from "styled-components";

const Result = () => {
    return (
        <Container>
            <Wrapper>
                <Number>32</Number>
                <Word>Years</Word>
            </Wrapper>
            <Wrapper>
                <Number>11</Number>
                <Word>Months</Word>
            </Wrapper>
            <Wrapper>
                <Number>14</Number>
                <Word>Days</Word>
            </Wrapper>
        </Container>
    );
}

export default Result;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Wrapper = styled.div`
    display: flex;
`;

const Number = styled.div`
    color: ${props => props.theme.secondary};
    font-size: 6.5rem;
    font-style: italic;
    font-weight: 800;
    line-height: 110%;
    letter-spacing: -0.13rem;
    margin-right: 0.5rem;
`;

const Word = styled(Number)`
    margin-right: 0;
    color: ${props => props.theme.text};
`;