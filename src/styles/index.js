import styled from 'styled-components/native';

import theme from './theme';

export const Container = styled.View`
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

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#0000ff'
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.Modal.attrs({
  animationType: 'slide',
  transparent: true,
})`
  background-color: ${theme.colors.primary};
`;