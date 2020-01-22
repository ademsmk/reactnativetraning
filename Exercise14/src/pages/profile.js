import React from 'react'
import { View, Text, Button } from 'react-native'
import { withNavigation } from 'react-navigation';

export function Profile(props) {
    return (<View><Text>Profile</Text>
        <Button onPress={() => {
            props.navigation.goBack();
        }} title="Back"></Button>
    </View>)
}

export default withNavigation(Profile);