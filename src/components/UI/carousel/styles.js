import styled from 'styled-components/native';
import theme from '~/styles/theme';

export const Container = styled.View`
  flex-direction: column;
  height: 220px;
`;

export const Section = styled.Text`
  color: ${theme.colors.primary};
  font-size: 28;
  margin-bottom: 10px;
`;

export const Backdrop = styled.ImageBackground`
  flex: 1;
  align-items: flex-end;
  flex-direction: row;
  width: 300px;
  height: 169px;
`;

export const Header = styled.View`
  flex: 1;
  align-items: baseline;
  flex-direction: column;
  align-content: flex-end;
  width: 300px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
`;

export const Title = styled.Text`
  color: ${theme.colors.primary};
  font-size: 20;
`;

export const Release = styled.Text`
  flex: 1;
  align-items: flex-end;
  flex-direction: row;
  color: ${theme.colors.primary};
  font-weight: bold;
`;
