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

    const { day, month, year } = date;

    const padWithZero = (value) => {
        return value < 10 ? `0${value}` : value;
    };

    const calculateAge = (dob) => {
        const dobDate = new Date(`${dob.year}-${dob.month}-${dob.day}`);
        const currentDate = new Date();

        let years = currentDate.getFullYear() - dobDate.getFullYear();
        let months = currentDate.getMonth() - dobDate.getMonth();
        let days = currentDate.getDate() - dobDate.getDate();

        if (days < 0) {
            const lastMonth = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() - 1,
                dobDate.getDate()
            );
            const daysInLastMonth = (currentDate - lastMonth) / (1000 * 60 * 60 * 24);
            days = daysInLastMonth;
        }

        // Check if birthdate in the current month has not occurred yet
        if (currentDate.getMonth() < dobDate.getMonth() ||
            (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
            years--;
            months = 12 - Math.abs(months);
        }

        const newAge = {
            days: padWithZero(Math.abs(days)),
            months: padWithZero(Math.abs(months)),
            years
        };

        setAge(newAge);
    };


    return (
        <Container>
            <InputYear
                theme={theme}
                date={date}
                setDate={setDate}
                calculateAge={calculateAge}
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

    @media (max-width: 1200px) {
        width: 75%;
        padding: 3rem;
    }

    @media (max-width: 900px) {
        width: 85%;
        padding: 2.4rem;
    }

    @media (max-width: 675px) {
        width: 95%;
        margin: 0;
        padding: 3rem 1rem;
    }
`;