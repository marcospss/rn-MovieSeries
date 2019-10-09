import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { getMultiSearch } from '~/services/Search';

import { 
  Container,
  SearchWrapper,
  InputText
} from './styles';

import Loading from '~/components/UI/loading';
import ListSearch from '~/components/UI/listSearch';
import AlertError from '~/components/UI/alertError';

Icon.loadFont();
const OS = (Platform.OS === 'ios') ? 'ios' : 'md';

export default SearchScreen = () => {
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [medias, setMedias] = useState({});
  const [loading, setLoading] = useState(false)

  async function loadMultiSearch() {
    if (query === '') { return; }
    try {
      setLoading(true);
      const response = await getMultiSearch(query);
      setMedias(response.data);
      setTimeout(() => {
        setQuery('');
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError(true);
    }
  };
  
  handleSetSearch = (value) => {
    setQuery(value);
  }

  return (
    <>
      <Loading visible={loading} />
      { error && <AlertError /> }
      <Container>
        <SearchWrapper>
          <Icon
            style={{marginRight: 10, marginLeft: 10}}
            name={`${OS}-search`}
            size={30}
            color="#000"
          />
          <InputText
            placeholder="Find Movies and TV shows"
            autoCorrect={false}
            value={query}
            returnKeyType="send"
            onSubmitEditing={() => loadMultiSearch()}
            onBlur={Keyboard.dismiss}
            onChangeText={handleSetSearch}
          />
        </SearchWrapper>
        {
          !loading
          && medias 
          && medias.results 
          && (
            <ListSearch
              data={medias.results}
            />
          )
        }
      </Container>
    </>
    );
}
