import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { headerStyles } from '../styles/HeaderStyles';

const Header = ({ openAdd }) => {
    return (
        <View>
            <ImageBackground source={require('../assets/headerImg.jpg')} style={headerStyles.backgroundImgStyles}>
                <View style={headerStyles.appTitleStyles} />
                <TouchableOpacity onPress={() => openAdd(true)}
                    style={headerStyles.btn}>
                    <Text style={headerStyles.btnText}>ADD TEAM</Text>
                </TouchableOpacity>
            </ImageBackground>

            <View style={headerStyles.yourTeamsContainer}>
                <Text style={headerStyles.yourTeamsText}>Your Teams</Text>
            </View>
        </View>
    );
}
export default Header;