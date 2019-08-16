import styled from 'styled-components/native';

import theme from './theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.secondary};
`;

export const Button = styled.TouchableOpacity`
  margin: 20px 0px;
  width: auto;
  height: 40px;
  padding: 5px 20px;
  background-color: ${theme.colors.secondary};
  justify-content: space-between;
  align-items: center;
  border-radius: 5;
  flex-direction: row;
`;

export const Label = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize.sm};
`;