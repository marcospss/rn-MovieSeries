import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.secondary};
`;

export const Filters = styled.View`
  flex-direction: row;
  align-content: flex-end;
`;

export const FilterGroup = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-end;
  margin: 0px 0px 10px 10px;
  padding: 5px;
`;

export const LabelFilter = styled.Text`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.primary};
  margin-bottom: 5px;
  font-weight: bold;
  padding: 5px 0px;
`;

export const Picker = styled.Picker`
  background: rgba(255, 255, 255, 0.7);
  color: ${theme.colors.secondary};
`;

export const Button = styled.TouchableOpacity`
  align-self: center;
  margin-top: 24px;
  width: 100px;
  height: 50px;
  background: rgba(255, 255, 255, 0.7);
  flex-direction: row;
  align-items: center;
  justify-content: center; 
  padding: 5px 10px;
`;

export const ContainerDiscover = styled.View`
  padding: 12px;
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
