import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5;
  bottom: 8px;
  right: 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  line-height: ${theme.fontSize.sm};
  z-index: 10;
`;

export const Button = styled.TouchableOpacity``;
