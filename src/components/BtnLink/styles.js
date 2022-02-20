import styled from 'styled-components';
import { Colors } from '../../themes';

export const Container = styled.div`
    width: 200px;
    border-radius: 20px;
    height:auto;
    padding:10px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${Colors.background};
    h2{
        color: ${Colors.primary}
    }
    a{
        text-decoration: none;
    }
`;
