import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
`;

export const Section = styled.Text`
  color: ${theme.colors.primary};
  font-size: 20;
  margin: 10px;
`;

export const Poster = styled.Image`
  width: 110px;
  height: 150px;
  border-radius: 5;
  margin: 8px;
`;

export const Title = styled.Text`
  max-width: 110px;
  color: ${theme.colors.primary};
  font-size: 14;
  margin: 10px;
  overflow: hidden;
`;
