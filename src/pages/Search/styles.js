import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.secondary};
`;

export const SearchWrapper = styled.View`
  flex-direction: row;
  border-radius: 6px;
  align-items: center;
  margin: 10px;
  background: ${theme.colors.primary};
  border-radius: 5;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: `${theme.colors.gray}`,
  underlineColorAndroid: `${theme.colors.primary}`,
  maxLength: 30,
})`
  display: flex;
  font-size: ${theme.fontSize.md};
  color: ${theme.colors.secondary};
  background: ${theme.colors.primary};
  margin-top: 5px;
  flex: 1 0;
`;
