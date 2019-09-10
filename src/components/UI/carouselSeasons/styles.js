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

export const Item = styled.View`
  flex: 1 0;
  flex-direction: row;
  width: 100%;
`;

export const Poster = styled.Image`
  width: 110px;
  height: 150px;
  border-radius: 5;
`;

export const Info = styled.View`
  flex-direction: column;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: ${theme.fontSize.md};
  color: ${theme.colors.primary};
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Episodes = styled.Text`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.primary};
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Release = styled.Text`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.primary};
  font-weight: bold;
`;

