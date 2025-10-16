import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground  
        source={require('@/assets/images/copa22isa.png')}
        resizeMode="cover" 
        style={styles.image}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>CONVOCADOS COPA 2022</Text>
        </View>
      </ImageBackground>
    
      {/* O resto do seu código continua igual */}
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger />
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 50, // Título no topo
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  image: {
    flex: 1, // Ocupa toda a tela
    width: '100%',
    justifyContent: 'flex-start', // Título no topo
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'yellow', // Cor amarela
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  }
});