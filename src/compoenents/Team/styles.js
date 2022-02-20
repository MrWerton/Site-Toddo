import styled from 'styled-components';
import { Colors } from '../../themes';

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    padding:10px;
    width: 90%;
    height:60vh;
    min-height:410px;

    background-color:${Colors.primary};
    border-radius: 10px;
    h2{ 
    color: ${Colors.textLight};
    font-size: 36px;
        }
    div{
        margin-top: 20px;
        display: flex; align-items: center;justify-content: center; flex-wrap: wrap;}
`;
