import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';
import { globalStyles, COLORS } from '../styles/globalStyles';

export default function AuthScreen() {
    const { signInWithGoogle } = useAuth();

    return (
        <View style={[globalStyles.container, globalStyles.center, styles.container]}>
            <View style={styles.content}>
                <Text style={globalStyles.title}>TikTok Clone</Text>
                <Text style={globalStyles.subtitle}>
                    Discover amazing videos from creators
                </Text>

                <TouchableOpacity
                    style={[globalStyles.button, styles.googleButton]}
                    onPress={signInWithGoogle}
                >
                    <View style={globalStyles.row}>
                        <Ionicons name="logo-google" size={20} color="white" />
                        <Text style={[globalStyles.buttonText, styles.buttonText]}>
                            Continue with Google
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    content: {
        alignItems: 'center',
    },
    googleButton: {
        backgroundColor: '#4285F4',
        marginTop: 40,
        paddingHorizontal: 30,
    },
    buttonText: {
        marginLeft: 10,
    },
});
