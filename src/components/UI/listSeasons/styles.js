import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
`;

export const Section = styled.Text`
  color: ${theme.colors.primary};
  font-size: 24;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Item = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-start;
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
  left: 130px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  line-height: ${theme.fontSize.sm};
  z-index: 10;
`;

export const Label = styled.Text`
  color: ${theme.colors.secondary};
  padding-left: 6px;
  font-weight: bold;
`;

export const Info = styled.View`
  flex-direction: column;
  width: 100%;
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
  flex: 1;
  flex-direction: column;
`;

export const Overview = styled.Text`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.primary};
  line-height: ${theme.fontSize.lg};
`;
