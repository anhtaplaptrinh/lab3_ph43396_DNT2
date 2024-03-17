import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function bai1() {
  const translateY = useSharedValue(0);

  const handlePress = () => {
    translateY.value += 50; // Di chuyển lên trên
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value) }],
  }));

  return (
    <>
      <View style={styles.container}>
        <Button onPress={handlePress} title="Move" />
      </View>
      <Animated.View style={[styles.box, animatedStyles]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    alignItems: 'center',
    // justifyContent:"center"
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 20,
    marginLeft: 150,
    alignSelf:"center"
  },
});

