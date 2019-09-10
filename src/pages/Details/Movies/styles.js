import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.secondary};
`;

export const Backdrop = styled.ImageBackground`
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 250px;
  z-index: 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 150px;
  position: absolute;
  z-index: 9;
  bottom: -80px;
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
  height: 150px;
  padding: 10px;
  margin-top: 60px;
`;

export const Title = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize.md};
  font-weight: bold;
  margin-bottom: 5px;
  width: 58%;
`;

export const Category = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize.sm};
  line-height: ${theme.fontSize.md};
  margin-bottom: 5px;
  width: 58%;
`;

export const VoteAverage = styled.View`
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5;
  top: 8px;
  right: 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  line-height: ${theme.fontSize.sm};
  z-index: 10;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: 100px;
`;

export const Overview = styled.Text`
  color: ${theme.colors.primary};
  padding: 10px;
  line-height: ${theme.fontSize.lg};
  text-align: justify;
`;

export const Label = styled.Text`
  color: ${theme.colors.secondary};
  padding-left: 6px;
  font-weight: bold;
`;
