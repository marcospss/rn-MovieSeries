import { Dimensions } from 'react-native'

export default {
    colors: {
        primary: '#fff',
        secondary: '#000',
    },
    dimensions: {
        fullHeight: Dimensions.get('window').height,
        fullWidth: Dimensions.get('window').width
    },
    padding: {
        sm: 10,
        md: 20,
        lg: 30,
        xl: 40,
    },
    fontSize: {
        sm: 12,
        md: 18,
        lg: 28,
    },
    fontFamily: {
        primary: 'Cochin'
    }
};
