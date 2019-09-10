import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  padding: 10px;
`;

export const Section = styled.Text`
  color: ${theme.colors.primary};
  font-size: 24;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Item = styled.View`
  margin-bottom: 20px;
`;

export const Header = styled.View`
  flex: 1 0;
  flex-direction: row;
  width: 100%;
`;

export const Poster = styled.Image`
  width: 185px;
  height: 104px;
  border-radius: 3;
`;

export const VoteAverage = styled.View`
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 3;
  top: 0px;
  left: 124px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px 8px;
  line-height: ${theme.fontSize.sm};
  z-index: 10;
`;

export const Label = styled.Text`
  color: ${theme.colors.secondary};
  padding-left: 6px;
  font-weight: bold;
`;

export const Info = styled.View`
  flex: 1 0;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: ${theme.fontSize.md};
  color: ${theme.colors.primary};
  font-weight: bold;
`;

export const Release = styled.Text`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.primary};
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Content = styled.View`
  flex: 1 0;
  flex-direction: column;
`;

export const Overview = styled.Text`
  color: ${theme.colors.primary};
  line-height: ${theme.fontSize.lg};
  text-align: justify;
  padding: 10px 0px;
`;
