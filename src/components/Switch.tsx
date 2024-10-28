import React, {useEffect, useState} from 'react';
import {Animated, Pressable, StyleSheet, View} from 'react-native';
import {colors, GAME_TYPE, sizes} from '../utils.ts';
import Fire from '../assets/Fire.tsx';
import Star from '../assets/Star.tsx';

const styles = StyleSheet.create({
  pressable: {
    width: sizes.switchWidth,
    height: sizes.switchHeight,
    borderRadius: sizes.switchHeight,
    backgroundColor: colors.white_off,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  dot: {
    width: sizes.toggleWidth,
    height: sizes.toggleHeight,
    borderRadius: sizes.toggleHeight,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface SwitchProps {
  value: GAME_TYPE;
  onValueChange: (type: GAME_TYPE) => void;
}

const Switch = ({value, onValueChange}: SwitchProps) => {
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value === GAME_TYPE.LIKE ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [animatedValue, value]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [42, 2],
  });

  const toggleSwitch = () => onValueChange(value === GAME_TYPE.LIKE ? GAME_TYPE.STAR : GAME_TYPE.LIKE);

  return (
    <Pressable onPress={toggleSwitch} style={styles.pressable}>
      <View style={styles.innerContainer}>
        <View style={{position: 'absolute', marginLeft: sizes.m - sizes.xs  }}>
          <Fire color={colors.grey_text}/>
        </View>
        <View style={{position: 'absolute', right: sizes.m - sizes.xs  }}>
          <Star color={colors.grey_text}/>
        </View>
        <Animated.View
          style={{
            transform: [{ translateX }],
          }}>
          <View style={styles.dot}>
            { value === GAME_TYPE.LIKE ?
              <Fire color={colors.pink}/>
              :
              <Star color={colors.pink}/>
            }
          </View>
        </Animated.View>

      </View>
    </Pressable>
  );
};

export default Switch;

