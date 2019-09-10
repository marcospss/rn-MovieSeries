import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import { Background, ActivityIndicatorWrapper } from './styles';

export default Loading = ({ visible }) => {
    return (
        <Modal 
            visible={visible}
            animationType="slide"
            transparent={true}
        >
            <Background>
                <ActivityIndicatorWrapper>
                    <ActivityIndicator
                        size="large"
                        color="#000"
                    />
                </ActivityIndicatorWrapper>
            </Background>
        </Modal>
    );
};
