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
  border-radius: 5;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
  padding: 5px 10px;
`;
