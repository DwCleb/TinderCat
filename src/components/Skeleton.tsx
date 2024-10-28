import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import { DimensionValue, StyleSheet, View, ViewProps } from 'react-native';
import {colors, sizes} from '../utils.ts';

Animatable.initializeRegistryWithDefinitions({
  fade: {
    0: {
      opacity: 1,
    },
    0.5: {
      opacity: 0.3,
    },
    1: {
      opacity: 0.7,
    },
  },
});

interface SkeletonProps extends ViewProps {
  duration?: number;
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
  backgroundColor?: string;
  position?: string;
  top?: DimensionValue;
  marginLeft?: DimensionValue;
  marginRight?: DimensionValue;
  marginTop?: DimensionValue;
  marginBottom?: DimensionValue;
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: colors.grey_text,
  },
});

const Skeleton: React.FC<SkeletonProps> = props => {
  const {
    duration = 1000,
    width = '100%',
    height = 20,
    borderRadius = sizes.xs,
    marginTop,
    marginLeft,
    marginBottom = sizes.s,
    marginRight = sizes.s,
    style,
    ...rest
  } = props;
  return (
    <Animatable.View
      animation="fade"
      duration={duration}
      easing="linear"
      iterationCount="infinite"
    >
      <View
        style={[
          styles.skeleton,
          {
            width,
            height,
            borderRadius,
            marginTop,
            marginBottom,
            marginLeft,
            marginRight,
          },
          style,
        ]}
        {...rest}
      />
    </Animatable.View>
  );
};

export default Skeleton;
