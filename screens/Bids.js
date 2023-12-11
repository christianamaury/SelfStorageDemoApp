import * as React from 'react';
import {View, Text} from 'react-native';

const Bids = ({navigation}) => {
    return(

    <View style={styles.container}>    
        <Text style={styles.text} onPress={() => navigation.navigate('Details')} > Hello There! </Text>  
    </View>
    
    );
}

export default Bids

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyCenter: 'center',

    },

    text: {
        fontSize: 14,
        color: 'gray',
        marginTop: 18,
      
      },

});