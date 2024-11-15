import { Image, StyleSheet, Platform } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const { colors } = useTheme(); // Access the current theme's colors

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors.background as any} // Dynamically apply theme background
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={[styles.reactLogo, { tintColor: colors.text }]} // Tint image based on theme
        />
      }
    >
      <ThemedView style={[styles.titleContainer, { backgroundColor: colors.card }]}>
        <ThemedText type="title" style={{ color: colors.primary }}>
          Welcome!
        </ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={[styles.stepContainer, { backgroundColor: colors.card }]}>
        <ThemedText type="subtitle" style={{ color: colors.text }}>
          Step 1: Try it
        </ThemedText>
        <ThemedText style={{ color: colors.text }}>
          Edit{' '}
          <ThemedText type="defaultSemiBold" style={{ color: colors.primary }}>
            app/(tabs)/index.tsx
          </ThemedText>{' '}
          to see changes. Press{' '}
          <ThemedText type="defaultSemiBold" style={{ color: colors.primary }}>
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      {/* Additional steps */}
      <ThemedView style={[styles.stepContainer, { backgroundColor: colors.card }]}>
        <ThemedText type="subtitle" style={{ color: colors.text }}>
          Step 2: Explore
        </ThemedText>
        <ThemedText style={{ color: colors.text }}>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={[styles.stepContainer, { backgroundColor: colors.card }]}>
        <ThemedText type="subtitle" style={{ color: colors.text }}>
          Step 3: Get a fresh start
        </ThemedText>
        <ThemedText style={{ color: colors.text }}>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold" style={{ color: colors.primary }}>
            npm run reset-project
          </ThemedText>{' '}
          to get a fresh{' '}
          <ThemedText type="defaultSemiBold" style={{ color: colors.primary }}>
            app
          </ThemedText>{' '}
          directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold" style={{ color: colors.primary }}>
            app
          </ThemedText>{' '}
          to{' '}
          <ThemedText type="defaultSemiBold" style={{ color: colors.primary }}>
            app-example
          </ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
