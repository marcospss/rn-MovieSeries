import styled from 'styled-components/native';
import theme from '~/styles/theme';

export const Background = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ActivityIndicatorWrapper = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    width: 100px;
    background-color: ${theme.colors.primary};
    border-radius: 10;
`;