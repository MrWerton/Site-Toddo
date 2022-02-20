import styled from 'styled-components';
import { Colors } from '../../themes';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    margin: 10px;
    color: ${Colors.primary};
    border: 1px solid ${Colors.primary};
    display: flex;
    padding: 20px;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    div {
        align-items: center;
        justify-content: center;

        padding: 10px;
        p {
            color: ${Colors.primary};
            text-align: center;
        }
    }
`;
