import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
`;

export const Title = styled.Text`
  color: ${theme.colors.primary};
  font-size: 20;
  margin: 10px;
`;

export const Items = styled.View`
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 100%;
`;

export const Poster = styled.Image`
  width: 92;
  height: 138;
  border-radius: 5;
  margin: 6px;
`;