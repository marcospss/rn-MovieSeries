import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import { Background, ActivityIndicatorWrapper } from './styles';

const Loading = ({ visible }) => {
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

export default Loading; 