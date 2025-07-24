import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import LikeButton from './LikeButton';
import { COLORS, SIZES } from '../styles/globalStyles';

export default function VideoItem({ item, isActive, onLike }) {
  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState({});
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.playAsync();
    } else if (videoRef.current) {
      videoRef.current.pauseAsync();
    }
  }, [isActive]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: item.url }}
        shouldPlay={isActive}
        isLooping
        isMuted={isMuted}
        resizeMode="cover"
        onPlaybackStatusUpdate={setStatus}
      />
      
      <View style={styles.overlay}>
        {/* Right side actions */}
        <View style={styles.rightActions}>
          <TouchableOpacity style={styles.userAvatarContainer}>
            <Image source={{ uri: item.userAvatar }} style={styles.userAvatar} />
            <View style={styles.followButton}>
              <Ionicons name="add" size={16} color={COLORS.white} />
            </View>
          </TouchableOpacity>
          
          <LikeButton
            isLiked={item.isLiked}
            likeCount={item.likes}
            onPress={() => onLike(item.id)}
          />
          
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={28} color={COLORS.white} />
            <Text style={styles.actionText}>89</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="share-outline" size={28} color={COLORS.white} />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton} onPress={toggleMute}>
            <Ionicons
              name={isMuted ? 'volume-mute' : 'volume-high'}
              size={28}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
        
        {/* Bottom info */}
        <View style={styles.bottomInfo}>
          <Text style={styles.username}>@{item.username}</Text>
          <Text style={styles.description}>{item.description}</Text>
          
          {/* Music info */}
          <View style={styles.musicInfo}>
            <Ionicons name="musical-note" size={14} color={COLORS.white} />
            <Text style={styles.musicText}>Original audio - {item.username}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SIZES.screenWidth,
    height: SIZES.screenHeight,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
  },
  rightActions: {
    position: 'absolute',
    right: 12,
    bottom: 120,
    alignItems: 'center',
  },
  userAvatarContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  followButton: {
    position: 'absolute',
    bottom: -8,
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    marginVertical: 12,
    alignItems: 'center',
  },
  actionText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
  },
  bottomInfo: {
    position: 'absolute',
    bottom: 120,
    left: 12,
    right: 80,
  },
  username: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: COLORS.white,
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 18,
  },
  musicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicText: {
    color: COLORS.white,
    fontSize: 12,
    marginLeft: 4,
    opacity: 0.8,
  },
});
