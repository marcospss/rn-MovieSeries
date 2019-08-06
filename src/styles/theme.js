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
        xs: 12,
        sm: 14,
        md: 20,
        lg: 28,
    },
    fontFamily: {
        primary: 'Cochin'
    }
};
