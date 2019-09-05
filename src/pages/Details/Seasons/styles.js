import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
`;

export const Poster = styled.Image`
  width: 110px;
  height: 150px;
  border-radius: 2px;
  z-index: 1;
`;

export const Info = styled.View`
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: ${theme.fontSize.md};
  color: ${theme.colors.primary};
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Season = styled.Text`
  font-size: ${theme.fontSize.sm};
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

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Overview = styled.Text`
  color: ${theme.colors.primary};
  padding: 10px;
  line-height: ${theme.fontSize.lg};
`;
