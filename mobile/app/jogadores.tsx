import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const playerBios: { [key: string]: { bio: string, position: string, club: string } } = {
    'Neymar': {
        position: 'Atacante',
        club: 'Barcelona (ESP)',
        bio: 'Estrela da equipe. Carregou o time até se lesionar contra a Colômbia, abalando toda a estrutura ofensiva.'
      },
      'Thiago Silva': {
        position: 'Zagueiro / Capitão',
        club: 'Paris Saint-Germain - PSG (FRA)',
        bio: 'Zagueiro sólido e capitão. Sua suspensão na semifinal fragilizou gravemente a defesa.'
      },
      'David Luiz': {
        position: 'Zagueiro',
        club: 'Chelsea (ING) / Paris Saint-Germain - PSG (FRA)',
        bio: 'Líder emotivo, fez gol importante, mas a defesa mostrou falhas coletivas.'
      },
   'Júlio César': {
    position: 'Goleiro',
    club: 'Queens Park Rangers - QPR (ING) / Toronto FC (CAN)',
    bio: 'Goleiro seguro. Decisivo nos pênaltis contra o Chile.'
  },
   'Luiz Gustavo': {
    position: 'Volante',
    club: 'VfL Wolfsburg (ALE)',
    bio: 'Volante essencial na contenção. Sua ausência contra a Alemanha foi crucial.'
  },
  'Marcelo ': {
    position: 'Lateral-Esquerdo',
    club: ' Real Madrid (ESP)',
    bio: 'Lateral ofensivo, mas com dificuldades defensivas.'
  },
  'Dani Alves': {
    position: 'Lateral-Direito',
    club: ' Barcelona (ESP)',
    bio: 'Atuação abaixo do esperado, sem seu habitual impacto.'
  },
 
  'Oscar ': {
    position: 'meia',
    club: 'Chelsea (ING)',
    bio: 'Meia com grande entrega e um dos poucos a sair com créditos.'
  },
  'Fred ': {
    position: 'Atacante',
    club: 'Fluminense (BRA)',
    bio: 'Centroavante muito criticado, sem gols e pouca participação.'
  },
  'Hulk': {
    position: 'Atacante',
    club: 'Zenit St. Petersburg (RUS)',
    bio: 'Pouca eficiência, não correspondeu em momentos decisivos.'
  },
  'Fernandinho ': {
    position: 'Volante',
    club: 'Manchester City (ING)',
    bio: 'Pouco utilizado. Entrou na semifinal com o jogo já perdido.'
  },
  'Willian': {
    position: 'Meia',
    club: 'Chelsea (ING)',
    bio: 'Opção rápida e técnica, mas subaproveitado durante o torneio.'
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