import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  height: 150;
`;

export const Section = styled.Text`
  color: ${theme.colors.primary};
  font-size: 20;
  margin: 10px;
`;

export const Items = styled.View`
  
  
`;

export const Poster = styled.Image`
  width: 110;
  height: 150;
  border-radius: 5;
  margin: 8px;
`;

export const Title = styled.Text`
  width: 110;
  color: ${theme.colors.primary};
  font-size: 14;
  margin: 10px;
  overflow: hidden;
`;
