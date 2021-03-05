import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {Color} from '../../styles';
import Mouse from '../../assets/images/mouse.svg';
const Loading: React.FC = ({}) => {
  const startValue = new Animated.Value(1);
  const endValue = 1.5;
  const [counter, setCounter] = useState(-1);
  const colorAnimation = new Animated.Value(0);
  //const colors = [Color.STRONG_ORANGE, Color.SMOOTH_ORANGE, Color.GRAY3];
  const animatedInterpolate = colorAnimation.interpolate({
    inputRange: [0, 150, 300],
    outputRange: [Color.STRONG_ORANGE, Color.SMOOTH_ORANGE, Color.GRAY3],
  });
  const backAnimated = {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: animatedInterpolate,
  };
  useEffect(() => {
    setTimeout(() => {
      if (counter === 2) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 2000);
    Animated.timing(colorAnimation, {
      toValue: 350,
      duration: 3000,
      useNativeDriver: false,
    }).start();
    Animated.loop(
      Animated.spring(startValue, {
        toValue: endValue,
        friction: 0.2,
        useNativeDriver: true,
      }),
      {iterations: 100},
    ).start();
  }, [startValue, endValue, counter, colorAnimation]);
  return (
    <View style={[styles.animatedContainer]}>
      <Animated.View style={backAnimated} />
      <Animated.View
        style={[
          styles.mousePosition,
          {
            transform: [{scale: startValue}],
          },
        ]}>
        <Mouse height={100} width={100} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mousePosition: {
    position: 'absolute',
  },
});

export default Loading;
