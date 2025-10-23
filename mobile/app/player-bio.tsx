import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const playerBios: { [key: string]: { bio: string, position: string, club: string } } = {
  'Neymar': {
    position: 'Atacante',
    club: 'Barcelona (ESP)',
    bio: 'Jovem destaque da Copa 2022, Antony encantou com sua ousadia e dribles desconcertantes. Trouxe energia renovada ao ataque brasileiro como uma das promessas da Seleção.'
  },
  'Thiago Silva': {
    position: 'Zagueiro / Capitão',
    club: 'Paris Saint-Germain - PSG (FRA)',
    bio: 'Frederico Rodrigues,oi o motor do meio-campo brasileiro na Copa 2022. Com sua experiência e versatilidade, garantiu equilíbrio tático e foi essencial na recomposição defensiva da Seleção.'
  },
  'David Luiz': {
    position: 'Zagueiro',
    club: 'Chelsea (ING) / Paris Saint-Germain - PSG (FRA)',
    bio: 'Fabinho atuou como importante opção no setor defensivo do Brasil na Copa 2022. Sua experiência e capacidade de desarme foram cruciais para proteger a zaga e organizar as saídas de jogo.'
  },
  'Júlio César': {
    position: 'Goleiro',
    club: 'Queens Park Rangers - QPR (ING) / Toronto FC (CAN)',
    bio: 'Paquetá foi um dos grandes destaques do Brasil na Copa 2022, marcando gols decisivos. Sua classe e visão de jogo trouxeram criatividade ao meio-campo da Seleção.'
  },
  'Luiz Gustavo': {
    position: 'Volante',
    club: 'VfL Wolfsburg (ALE)',
    bio: 'Raphinha foi titular na campanha brasileira da Copa 2022, atuando pela direita. Sua velocidade e cruzamentos precisos foram armas importantes no ataque da Seleção.'
  },
  'Marcelo': {
    position: 'Lateral-Esquerdo',
    club: 'Real Madrid (ESP)',
    bio: 'Gabriel Jesus chegou à Copa 2022 como uma das opções de ataque do Brasil. Apesar de lesão durante o torneio, sua experiência e movimentação eram trunfos importantes.'
  },
  'Dani Alves': {
    position: 'Lateral-Direito',
    club: 'Barcelona (ESP)',
    bio: 'Militão foi peça fundamental na defesa brasileira durante a Copa 2022. Sua velocidade e segurança defensiva foram essenciais para a solidez zagueira da Seleção.'
  },
  'Oscar ': {
    position: 'Meia',
    club: 'Chelsea (ING)',
    bio: 'Neymar Jr é um dos maiores jogadores brasileiros da história. Conhecido por sua técnica excepcional, dribles e capacidade de decisão.'
  },
  'Fred': {
    position: 'Atacante',
    club: 'Fluminense (BRA)',
    bio: 'Bruno Guimarães é um meio-campista brasileiro conhecido por sua qualidade no passe e visão de jogo.'
  },
  'Hulk ': {
    position: 'Atacante',
    club: ' Zenit St. Petersburg (RUS)',
    bio: 'Richarlison é um atacante brasileiro que atua pelo Tottenham. Conhecido por sua garra e capacidade de finalização.'
  },
  'Fernandinho ': {
    position: 'Volante',
    club: 'Manchester City (ING)',
    bio: 'Vinicius Junior é um ponta-esquerda brasileiro que atua pelo Real Madrid. Destaca-se por sua velocidade e habilidade no drible.'
  },
  'Willian': {
    position: 'Meia',
    club: 'Chelsea (ING)',
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
    club: 'Clube não informado'
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>
      
      <ScrollView style={styles.content}>
        <Text style={styles.playerName}>{playerName}</Text>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}><Text style={styles.label}>Posição:</Text> {playerData.position}</Text>
          <Text style={styles.infoText}><Text style={styles.label}>Clube:</Text> {playerData.club}</Text>
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
    backgroundColor: '#f5f5f5',
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
  playerName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
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
    color: '#666',
  },
  bioTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    textAlign: 'justify',
  },
});
