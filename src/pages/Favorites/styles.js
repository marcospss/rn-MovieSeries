import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${theme.colors.secondary};
`;

export const Item = styled.View`
  margin-top: 15px;
  padding-top: 20px;
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
  width: 60px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 3;
  top: 0px;
  left: 124px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  line-height: ${theme.fontSize.sm};
  z-index: 10;
`;

export const LabelVoteAverage = styled.Text`
  color: ${theme.colors.secondary};
  padding-left: 6px;
  font-weight: bold;
`;

export const Info = styled.View`
  flex: 1 0;
  flex-direction: column;
  justify-content: center;
  padding-left: 14px;
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

export const Overview = styled.Text`
  color: ${theme.colors.primary};
  line-height: ${theme.fontSize.lg};
  text-align: justify;
  padding: 10px 0px;
`;

export const Actions = styled.View.attrs({
  borderStyle: 'solid',
  borderColor: `${theme.colors.gray}`,
  borderBottomWidth: 1,
})`
  flex: 1 0;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 3;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px 8px;
  line-height: ${theme.fontSize.sm};
  z-index: 10;
`;

export const LabelButton = styled.Text`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.secondary};
  font-weight: bold;
  margin: 0px 10px;
`;