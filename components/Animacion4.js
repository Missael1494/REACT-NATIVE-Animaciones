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

const Animacion4 = () => {

    const [animacion] = useState( new Animated.Value(0) )

    useEffect(() => {
      Animated.timing(
        animacion, {
            toValue: 360, // al valor al que llega
            duration: 500       // cantidad de tiempo en llegar
        }
      ).start();
    
      
    }, [])

    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })

    const estiloAnimacion = {
        transform: [{ rotate: interpolacion }]
    }
    

  return (
    <View>
        <Animated.View 
        style={[styles.texto, estiloAnimacion]} 
        
    >
    
        </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
    texto: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})

export default Animacion4