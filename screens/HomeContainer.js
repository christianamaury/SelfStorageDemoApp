import * as React from 'react';
import {View, Text} from 'react-native';
//Navigation Libraries
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Importing screens
import Details from './Details';
import Home from './Home';
import Bids from './Bids';

//Creating a navigator tab
const NavigatorTab = createBottomTabNavigator();

//Creating the names for every each of my screens
const homeScreen = 'Home';
const detailsScreen = 'Details';
const bidsScreen = 'Bids';

//Initial Route Name would be my homeScreen Component
//screenOptions: Give us a lot of flexibility of how we would like our layout to look on our end
//route = its the location where we're on at the moment
//route would be inside an arrow function
//Ternuary Operator;
const HomeContainer = () => {
    return(
        <NavigationContainer>
            <NavigatorTab.Navigator initialRouteName={homeScreen}
            screenOptions={({route}) => ({

                tabBarIcon: ({ focused, color, size}) =>  {
                    var naomeOfIcon
                    var routerName = route.name; 

                    if (routerName === homeScreen){
                        naomeOfIcon = focused ? 'home' : 'home-outline';

                    }


                },

            })}>


            </NavigatorTab.Navigator>            

        </NavigationContainer>
    );

}

export default HomeContainer

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
