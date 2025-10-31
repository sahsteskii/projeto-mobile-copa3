import { ThemedView } from '@/components/themed-view';
import { Link, useRouter } from 'expo-router';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
export default function HomeScreen() {
  const router = useRouter();

  const handlePlayerPress = (playerName: string) => {
    router.push({
      pathname: '/jogadores',
      params: { player: playerName }
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground  
        source={require('@/assets/images/copa4.webp')}
        resizeMode="cover" 
        style={styles.image}
      >
        <View style={styles.titleContainer}>
          {/* Título Principal */}
          <View style={styles.mainTitleContainer}>
            <Text style={styles.mainTitle}>CONVOCADOS</Text>
            <Text style={styles.subTitle}>COPA 2014</Text>
          </View>
          
          {/* Container dos Botões dos Jogadores */}
          <View style={styles.playersContainer}>
            
            {/* Primeira Linha */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.playerButton} onPress={() => handlePlayerPress('Neymar')}>
                <Text style={styles.playerButtonText}>Neymar </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.playerButton} onPress={() => handlePlayerPress('Thiago Silva')}>
                <Text style={styles.playerButtonText}>Thiago Silva</Text>
              </TouchableOpacity>
            </View>
            
            {/* Segunda Linha */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.playerButton} onPress={() => handlePlayerPress('David Luiz')}>
                <Text style={styles.playerButtonText}>David Luiz</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.playerButton} onPress={() => handlePlayerPress('Júlio César')}>
                <Text style={styles.playerButtonText}>Júlio César</Text>
              </TouchableOpacity>
            </View>
            
            {/* Terceira Linha */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.playerButton} onPress={() => handlePlayerPress('Luiz Gustavo')}>
                <Text style={styles.playerButtonText}>Luiz Gustavo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.playerButton} onPress={() => handlePlayerPress('Marcelo')}>
                <Text style={styles.playerButtonText}>Marcelo</Text>
              </TouchableOpacity>
            </View>
            
            {/* Quarta Linha */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.playerButton} onPress={() => handlePlayerPress('Dani Alves')}>
                <Text style={styles.playerButtonText}>Dani Alves</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.playerButton} onPress={() => handlePlayerPress('Oscar')}>
                <Text style={styles.playerButtonText}>Oscar</Text>
              </TouchableOpacity>
            </View>
            
            {/* Quinta Linha */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.playerButton} onPress={() => handlePlayerPress('Fred')}>
                <Text style={styles.playerButtonText}>Fred </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.playerButton} onPress={() => handlePlayerPress('Hulk')}>
                <Text style={styles.playerButtonText}>Hulk </Text>
              </TouchableOpacity>
            </View>
            
            {/* Sexta Linha */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.playerButton} onPress={() => handlePlayerPress('Fernandinho')}>
                <Text style={styles.playerButtonText}>Fernandinho </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.playerButton} onPress={() => handlePlayerPress('Willian')}>
                <Text style={styles.playerButtonText}>Willian </Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </ImageBackground>
    

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
    marginTop: 40,
    flex: 1,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  mainTitleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'yellow',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'yellow',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: -5,
  },
  playersContainer: {
    width: '90%',
    alignItems: 'center',
    gap: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
  },
  playerButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'yellow',
    flex: 1,
    alignItems: 'center',
    minHeight: 50,
    justifyContent: 'center',
  },
  playerButtonText: {
    color: 'yellow',
    fontSize: 14,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textAlign: 'center',
  }
});