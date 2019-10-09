import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Message } from './styles';

const OS = (Platform.OS === 'ios') ? 'ios' : 'md';

Icon.loadFont();

export default AlertError = () => (
    <Container>
        <Icon
            name={`${OS}-alert`}
            size={80}
            color="#ff0000"
        />
        <Message>Unfortunately an error has occurred.</Message>
    </Container>
);
