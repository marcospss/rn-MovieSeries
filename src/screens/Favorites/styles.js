import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.secondary};
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  margin: 10px 0px;
  border-radius: 6px;
`;


export const Poster = styled.Image`
  width: 100%;
  height: 220px;
  border-radius: 6px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const Details = styled.View`
  flex-direction: column;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 6px;
`;

export const Title = styled.Text`
  color: ${theme.colors.secondary};
  font-size: ${theme.fontSize.md};
  font-weight: bold;
  margin-bottom: 5px;
  text-shadow: 0px 3px 9px rgba(0,0,0,0.3);
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
  flex-direction: row;
  color: ${theme.colors.secondary};
  line-height: ${theme.fontSize.md};
`;
