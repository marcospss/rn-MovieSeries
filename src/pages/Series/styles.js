import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.secondary};
`;

export const Content = styled.View`
  flex-direction: row;
  margin: 10px 0px;
  background-color: #ffffff7e;
`;

export const Poster = styled.View`
  flex-direction: column;
  padding: 20px;
`;

export const Image = styled.Image`
  width: 92px;
  height: 138px;
`;

export const Details = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Title = styled.Text`
  color: ${theme.colors.secondary};
  font-size: ${theme.fontSize.md};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const Category = styled.Text`
  color: ${theme.colors.secondary};
  font-size: ${theme.fontSize.sm};
  line-height: ${theme.fontSize.md};
  margin-bottom: 5px;
`;

export const VoteAverage = styled.Text`
  color: ${theme.colors.secondary};
  font-size: ${theme.fontSize.sm};
  line-height: ${theme.fontSize.md};
  margin-bottom: 5px;
`;

export const Overview = styled.Text`
  color: ${theme.colors.secondary};
  line-height: ${theme.fontSize.md};
`;
