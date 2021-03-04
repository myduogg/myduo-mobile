import React, {useEffect} from 'react';
import {Animated, StyleSheet} from 'react-native';
import Mouse from '../../assets/images/mouse.svg';
const Loading: React.FC = ({}) => {
  const startValue = new Animated.Value(1);
  const endValue = 1.5;
  useEffect(() => {
    Animated.loop(
      Animated.spring(startValue, {
        toValue: endValue,
        friction: 1,
        useNativeDriver: true,
      }),
      {iterations: 2},
    ).start();
  }, [startValue, endValue]);

  return (
    <Animated.View
      style={[
        styles.animatedContainer,
        {
          transform: [
            {
              scale: startValue,
            },
          ],
        },
      ]}>
      <Mouse height={100} width={100} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Loading;
