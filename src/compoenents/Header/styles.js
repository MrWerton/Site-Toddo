import styled from 'styled-components';
import { Colors } from '../../themes';
export const Container = styled.div`
    height: 65vh;
    background-color: ${Colors.primary};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    @media (max-width: 700px) {
        flex-direction: column-reverse;
        height: auto;
    }
`;
export const Content = styled.div`
    height: 100%;
    width: 50vw;
    display: flex;
    flex-direction: column;
    div {
        padding-left: 40px;

        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-end;
        h1 {
            color: ${Colors.textLight};
            font-size: 56px;
        }
    }
    .Description {
        flex: 1;
        p {
            font-size: 56px;
            padding: 10px 0;
            color: ${Colors.textLight};
        }
    }

    @media (max-width: 700px) {
        height: 60%;
        width: 100%;
        align-items: center;
        justify-content: center;
        div {
            width: 100%;
            align-items: center;
            justify-content: center;
            h1 {
                font-size: 40px;
            }
        }
        .Description {
            padding: 0px 50px 40px 50px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            p {
                text-align: center;
                font-size: 36px;
            }
        }
    }
`;
export const Illustration = styled.div`
    height: 100%;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 30px 60px;
    img {
        object-fit: contain;
        height: 130%;
        bottom: -120px;
        position: absolute;
    }

    @media (max-width: 700px) {
        height: 40%;
        width: 100%;
        padding: 2px;

        img {
            padding: 10px;
            width: 100%;
            height: 100%;
            position: relative;
            bottom: -20px;
        }
    }
`;
