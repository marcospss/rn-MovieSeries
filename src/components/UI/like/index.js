import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StorageHelper from '~/helpers/Storage';

import { Container } from './styles';

const OS = (Platform.OS === 'ios') ? 'ios' : 'md';

Icon.loadFont();

export default Like = ({ mediaData, mediaType }) => {
    const data = {...mediaData, mediaType};
    return (
        <Container>
            <TouchableOpacity onPress={() => StorageHelper.setValue(data) }>
                <Icon
                    name={`${OS}-heart`}
                    size={30}
                    color="#000"
                />
            </TouchableOpacity>
        </Container>
    );
};
