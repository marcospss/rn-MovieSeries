import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container } from './styles';

const OS = (Platform.OS === 'ios') ? 'ios' : 'md';

Icon.loadFont();

export default Like = ({ media }) => {
    return (
        <Container>
            <TouchableOpacity onPress={() => {}}>
                <Icon
                    name={`${OS}-heart`}
                    size={30}
                    color="#000"
                />
            </TouchableOpacity>
        </Container>
    );
};
