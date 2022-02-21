import styled from 'styled-components';
import { Colors } from '../../themes';

export const Container = styled.div`
    margin-top: 100px;
    padding: 0 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const Illustration = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    flex-direction: column;
    h2 {
        padding: 5px 0;
        font-size: 48px;
        text-align: center;
        color: ${Colors.textDark};
    }
    flex: 1;
    @media (max-width: 700px) {
        margin-left: 0;
        flex-direction: column;

        h2 {
            color: ${Colors.textDark};
            padding: 20px;
            text-align: center;
            font-size: 24px;
        }
    }
`;