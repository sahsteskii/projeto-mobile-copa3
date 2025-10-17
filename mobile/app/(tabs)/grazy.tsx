import { ImageBackground, StyleSheet, View } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
export default function contatoscreen() {
  return (
    
    <View
    
      >
        <ImageBackground  source={require('@/assets/images/copagrazzy.png')}
        resizeMode="cover" style={styles.image}>

</ImageBackground>
      <ThemedView style={styles.titleContainer}>
       
     
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        
        
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
          </Link.Trigger>
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  
  },

  image: {
    height: '520%',
    width: '100%', 
    opacity:  0.5
  }
  
});


