import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    min-height: 200vh;
    padding: 30px;
    flex: 1;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        width: 100%;
        min-height: 300px;
    }
    @media (max-width: 700px) {
        height: 100%;
        justify-content: center;

        div {
            height: auto;
            margin: 10px;
        }
    }
`;
