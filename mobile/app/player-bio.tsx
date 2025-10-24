import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const playerBios: { 
  [key: string]: { 
    bio: string, 
    position: string, 
    club: string,
    image: any 
  } 
} = {
  'Antony': {
    position: 'Ponta direita',
    club: 'Real Betis',
    image: require('@/assets/images/antony22.jpg'),
    bio: 'Jovem destaque da Copa 2022, Antony encantou com sua ousadia e dribles desconcertantes. Trouxe energia renovada ao ataque brasileiro como uma das promessas da Seleção.'
  },
  'Fred': {
    position: 'Meio-campista',
    club: 'Fenerbahçe',
    image: require('@/assets/images/fred2.png'),
    bio: 'Frederico Rodrigues, o motor do meio-campo brasileiro na Copa 2022. Com sua experiência e versatilidade, garantiu equilíbrio tático e foi essencial na recomposição defensiva da Seleção.'
  },
  'Fabinho': {
    position: 'Volante',
    club: 'Al-Ittihad',
    image: require('@/assets/images/Fabinho.jpg'),
    bio: 'Fabinho atuou como importante opção no setor defensivo do Brasil na Copa 2022. Sua experiência e capacidade de desarme foram cruciais para proteger a zaga e organizar as saídas de jogo.'
  },
  'Lucas Paqueta': {
    position: 'Meio-campista',
    club: 'West Ham United',
    image: require('@/assets/images/paqueta.webp'),
    bio: 'Paquetá foi um dos grandes destaques do Brasil na Copa 2022, marcando gols decisivos. Sua classe e visão de jogo trouxeram criatividade ao meio-campo da Seleção.'
  },
  'Raphinha': {
    position: 'Atacante',
    club: 'Barcelona',
    image: require('@/assets/images/raphinha.webp'),
    bio: 'Raphinha foi titular na campanha brasileira da Copa 2022, atuando pela direita. Sua velocidade e cruzamentos precisos foram armas importantes no ataque da Seleção.'
  },
  'Gabriel Jesus': {
    position: 'Atacante',
    club: 'Arsenal',
    image: require('@/assets/images/gabriel2.jpg'),
    bio: 'Gabriel Jesus chegou à Copa 2022 como uma das opções de ataque do Brasil. Apesar de lesão durante o torneio, sua experiência e movimentação eram trunfos importantes.'
  },
  'Éder Militão': {
    position: 'Zagueiro',
    club: 'Real Madrid',
    image: require('@/assets/images/eder.jpg'),
    bio: 'Militão foi peça fundamental na defesa brasileira durante a Copa 2022. Sua velocidade e segurança defensiva foram essenciais para a solidez zagueira da Seleção.'
  },
  'Neymar': {
    position: 'Atacante',
    club: 'Al-Hilal',
    image: require('@/assets/images/ney22.jpg'),
    bio: 'Neymar Jr é um dos maiores jogadores brasileiros da história. Conhecido por sua técnica excepcional, dribles e capacidade de decisão.'
  },
  'Bruno Guimarães': {
    position: 'Meio-campista',
    club: 'Newcastle United',
    image: require('@/assets/images/bruno.jpg'),
    bio: 'Bruno Guimarães é um meio-campista brasileiro conhecido por sua qualidade no passe e visão de jogo.'
  },
  'Richarlison': {
    position: 'Atacante',
    club: 'Tottenham',
    image: require('@/assets/images/richarlison.jpg'),
    bio: 'Richarlison é um atacante brasileiro que atua pelo Tottenham. Conhecido por sua garra e capacidade de finalização.'
  },
  'Vinicius Jr': {
    position: 'Atacante',
    club: 'Real Madrid',
    image: require('@/assets/images/vini.jpg'),
    bio: 'Vinicius Junior é um ponta-esquerda brasileiro que atua pelo Real Madrid. Destaca-se por sua velocidade e habilidade no drible.'
  },
  'Marquinhos': {
    position: 'Zagueiro',
    club: 'Paris Saint-Germain',
    image: require('@/assets/images/marquihos.jpg'),
    bio: 'Marquinhos é um zagueiro brasileiro e capitão do PSG. Conhecido por sua liderança e qualidade técnica.'
  },
};

export default function PlayerBio() {
  const { player } = useLocalSearchParams();
  const router = useRouter();
  
  const playerName = typeof player === 'string' ? player : player?.[0] || '';
  const playerData = playerBios[playerName] || { 
    bio: 'Biografia não disponível.', 
    position: 'Posição não informada',
    club: 'Clube não informado',
    image: require('@/assets/images/icon.png')
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Image 
            source={playerData.image} 
            style={styles.playerImage}
            resizeMode="cover"
          />
          <Text style={styles.playerName}>{playerName}</Text>
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Posição:</Text> {playerData.position}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Clube:</Text> {playerData.club}
          </Text>
        </View>
        
        <Text style={styles.bioTitle}>Biografia</Text>
        <Text style={styles.bioText}>{playerData.bio}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81d3eaff', // Verde bem claro e suave
    padding: 20,
  },
  backButton: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'yellow',
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  playerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: 'yellow',
    backgroundColor: '#ddd',
  },
  playerName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2d5a2d', // Verde escuro para contraste
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
    color: '#2d5a2d', // Verde escuro para as labels
  },
  bioTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2d5a2d', // Verde escuro para o título
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    textAlign: 'justify',
  },
});