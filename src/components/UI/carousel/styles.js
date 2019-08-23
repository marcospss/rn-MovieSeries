import styled from 'styled-components/native';
import theme from '~/styles/theme';

export const Container = styled.View`
  flex-direction: row;
  height: 220px;
`;

export const Backdrop = styled.ImageBackground`
  flex: 1;
  align-items: flex-end;
  flex-direction: row;
  width: 100%;
`;

export const Header = styled.View`
  flex: 1;
  align-items: baseline;
  flex-direction: column;
  align-content: flex-end;
  width: 100%;
  height: 80;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

export const Title = styled.Text`
  flex: 1;
  align-items: flex-start;
  flex-direction: row;
  color: ${theme.colors.primary};
  font-size: 20;
`;

export const Category = styled.Text`
  flex: 1;
  align-items: flex-end;
  flex-direction: row;
  color: ${theme.colors.primary};
  font-weight: bold;
`;
