import React, { Component } from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { 
  Container,
  Filters,
  FilterGroup,
  LabelFilter,
  Picker,
  Button,
} from './styles';

const OS = (Platform.OS === 'ios') ? 'ios' : 'md';
Icon.loadFont();
class DiscoverScreen extends Component {
  constructor() {
    super();
    this.state = {
      language: 'js',
      sortby: 'popularity.desc',
      genre: null,
      genresData:[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}],
    }
  }
  
    render() {
      return (
        <Container>
          <Filters>
            <FilterGroup>
              <LabelFilter>
                Year
              </LabelFilter>
              <Picker
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </FilterGroup>
            <FilterGroup>
              <LabelFilter>
                Genres
              </LabelFilter>
              <Picker
                selectedValue={this.state.sortby}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({sortby: itemValue})
                }>
                <Picker.Item value="popularity.desc" label="Popularity Descending" />
                <Picker.Item value="popularity.asc" label="Popularity Ascending" />
                <Picker.Item value="vote_average.desc" label="Rating Descending" />
                <Picker.Item value="vote_average.asc" label="Rating Ascending" />
                <Picker.Item value="primary_release_date.desc" label="Release Date Descending" />
                <Picker.Item value="primary_release_date.asc" label="Release Date Ascending" />
                <Picker.Item value="title.asc" label="Title (A-Z)" />
                <Picker.Item value="title.desc" label="Title (Z-A)" />
              </Picker>
            </FilterGroup> 
          </Filters>
          <Filters>
            <FilterGroup>
              <LabelFilter>
                Sort By
              </LabelFilter>
              <Picker
                selectedValue={this.state.sortby}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({sortby: itemValue})
                }>
                <Picker.Item value="popularity.desc" label="Popularity Descending" />
                <Picker.Item value="popularity.asc" label="Popularity Ascending" />
                <Picker.Item value="vote_average.desc" label="Rating Descending" />
                <Picker.Item value="vote_average.asc" label="Rating Ascending" />
                <Picker.Item value="primary_release_date.desc" label="Release Date Descending" />
                <Picker.Item value="primary_release_date.asc" label="Release Date Ascending" />
                <Picker.Item value="title.asc" label="Title (A-Z)" />
                <Picker.Item value="title.desc" label="Title (Z-A)" />
              </Picker>
            </FilterGroup>
            <Button onPress={() => {} }>
              <Icon
                  name={`${OS}-search`}
                  size={30}
                  color="#000"
              />
            </Button>
          </Filters>
        </Container>
      );
    }  
}

export default DiscoverScreen;