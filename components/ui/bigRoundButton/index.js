import { View, Text, Pressable,Image } from 'react-native'
import React from 'react'
import { styles } from './styles';


const BigRoundButton = ({ source, onPress, size ,label}) => {
    return (
        <Pressable style={styles.iconContainer} onPress={onPress}>
            <Image source={source} style={[styles.icon, { height: size, width: size }]} />
            {label && <Text style={{color:'black'}}>{label}</Text>}
        </Pressable>
    );
};

export default BigRoundButton