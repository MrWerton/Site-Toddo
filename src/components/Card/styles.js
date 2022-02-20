import styled from 'styled-components';
import { Colors } from '../../themes';

export const Container = styled.div`
    background-color:${Colors.background};
    height: 140px;
    align-items: center;
    justify-content:center;
    display: flex;
    width: 120px;
    flex-direction: column;
    margin: 10px;
    border-radius: 10px;
    
    img{ 
        margin-bottom: 5px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    p{ color: ${Colors.primary}}
`;
