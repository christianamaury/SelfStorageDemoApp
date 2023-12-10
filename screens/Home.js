import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

 const Home = () => {
    return (
        <View style={styles.container}>    
            <Text> Hello </Text>   
                <Button> Testing Details </Button>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyCenter: 'center',



    },

});