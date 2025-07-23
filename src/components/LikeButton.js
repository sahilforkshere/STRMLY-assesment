import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withSequence 
} from 'react-native-reanimated';
import { COLORS } from '../styles/globalStyles';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export default function LikeButton({ isLiked, likeCount, onPress }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withSequence(
      withSpring(1.2, { duration: 100 }),
      withSpring(1, { duration: 100 })
    );
    onPress();
  };

  return (
    <View style={styles.container}>
      <AnimatedTouchableOpacity 
        style={[styles.button, animatedStyle]} 
        onPress={handlePress}
      >
        <Ionicons
          name={isLiked ? 'heart' : 'heart-outline'}
          size={32}
          color={isLiked ? COLORS.primary : COLORS.white}
        />
      </AnimatedTouchableOpacity>
      <Text style={styles.count}>{likeCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    padding: 8,
  },
  count: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
