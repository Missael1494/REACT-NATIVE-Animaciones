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

const Animacion2 = () => {

    const [animacion] = useState( new Animated.Value(0) )

    useEffect(() => {
      Animated.timing(
        animacion, {
            toValue: 450, // al valor al que llega
            duration: 1000       // cantidad de tiempo en llegar
        }
      ).start();
    
      
    }, [])
    

  return (
    <Animated.View
        style={[
            styles.caja,
            {
                width: animacion,
                height: animacion
            }
        ]}
    >
        <Text style={styles.texto} >Animacion 2</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})

export default Animacion2