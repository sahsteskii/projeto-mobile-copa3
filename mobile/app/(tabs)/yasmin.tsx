import { ImageBackground, StyleSheet, View } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/themed-text';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
export default function HomeScreen() {
  return (
    
    <View
      ><ThemedView style={styles.titleContainer}>
      <ThemedText 
        type="title"
        style={styles.title}
      >
        Copa 2010
      </ThemedText>
    </ThemedView>
    <head>
      
    </head>

        <ImageBackground  source={require('@/assets/images/copaa.jpg')}
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
    display:'flex',
    justifyContent: 'center'
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  
  },

  image: {
    paddingTop:0,
    marginTop:0,
    height: '325%',
    width: '101%',
    opacity: 0.5
  },
  title: {
    color: 'green',
    textAlign: 'center'
  }
})