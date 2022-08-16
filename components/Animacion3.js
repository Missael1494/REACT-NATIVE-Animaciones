import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Animated
  } from 'react-native';

const Animacion3 = () => {

    const [animacion] = useState( new Animated.Value(14) )

    useEffect(() => {
      Animated.timing(
        animacion, {
            toValue: 40, // al valor al que llega
            duration: 500       // cantidad de tiempo en llegar
        }
      ).start();
    
      
    }, [])
    

  return (
    <View>
        <Animated.Text 
        style={[styles.texto, {fontSize: animacion}]} 
        
    >
        Animacion 3
    </Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Animacion3