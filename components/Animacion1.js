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

const Animacion1 = () => {

    const [animacion] = useState( new Animated.Value(0) )

    useEffect(() => {
      Animated.timing(
        animacion, {
            toValue: 1, // al valor al que llega
            duration: 500       // cantidad de tiempo en llegar
        }
      ).start();
    
      
    }, [])
    

  return (
    <Animated.View
        style={{
            opacity: animacion
        }}
    >
        <Text style={styles.texto} >Animacion 1</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Animacion1