import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
`;


export const Message = styled.Text`
  align-items: flex-start;
  flex-direction: row;
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize.md};
`;
