import styled from 'styled-components';
import { Colors } from '../../themes';
export const Container = styled.div`
    width: 100%;
    border-radius: 10px;
    max-width: 800px;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    align-items: center;
    justify-content: flex-end;
    display: flex;
    padding: 10px 30px;
    background-color: ${Colors.primary};
    height: 340px;
    @media (max-width: 700px) {
        padding:0;
        align-items: center;
        justify-content: center;
        min-height: 300px;
    }
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;
export const Illustration = styled.div`
    width: 50%;
    position: relative;
    img {
        width: 100%;
        max-height: 300px;
        position: absolute;
        bottom: -50px;
    }
    @media (max-width: 700px) {
        align-items: center;
        justify-content: center;

        display: flex;
        img {
            position: relative;
            height: 100%;
        }
    }
    @media (max-width: 500px) {
        align-items: center;
        justify-content: flex-end;
        display: none;
        display: flex;
        height: 100;
        img {
            position: relative;
            height: 180px;
        }
    }
`;

export const Content = styled.div`
    width: 50%;

    object-fit: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
   padding: 10px;
    h2 {
        font-size: 16px;
        margin-bottom: 10px;
        color: ${Colors.textDark};
    }
    p {
        font-size: 11px;
        color: ${Colors.textDark};
        padding: 20px;
    }

    @media (min-width: 768px) {
        width: 100%;
        padding: 0;
        h2 {
            font-size: 40px;
        }
        p {
            font-size: 16px;
            padding: 0;
        }
    }
    @media (max-width: 500px) {
        width: 100%;
        padding: 0;
        flex: 1;
        h2 {
            font-size: 40px;
        }
        p {
            font-size: 16px;
            padding: 15px;
        }
    }
`;
