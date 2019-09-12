import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Reactotron from 'reactotron-react-native';

import { getMultiSearch } from '~/services/Search';

import Loading from '~/components/UI/loading';
import ListSearch from '~/components/UI/listSearch';

import { 
  Container,
  SearchWrapper,
  InputText
} from './styles';

Icon.loadFont();
const OS = (Platform.OS === 'ios') ? 'ios' : 'md';

export default SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [medias, setMedias] = useState({});
  const [loading, setLoading] = useState(false)

  async function loadMultiSearch() {
    try {
      setLoading(true);
      const response = await getMultiSearch(query);
      Reactotron.log('loadMultiSearch', response.data);
      setMedias(response.data);
      setTimeout(() => {
        setQuery('');
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };
  
  handleSetSearch = (value) => {
    setQuery(value);
  }

  return (
    <>
      <Loading visible={loading} />
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
          &&
          <ListSearch
            data={medias.results}
          />
        }
      </Container>
    </>
    );
}

 SearchScreen;