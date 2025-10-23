import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const playerBios: { [key: string]: { bio: string, position: string, club: string } } = {
  'Júlio César': {
    position: 'Goleiro',
    club: 'Internazionale (Itália)',
    bio: 'Considerado na época um dos melhores goleiros do mundo. Tinha grande segurança entre as traves e foi peça fundamental no time defensivamente sólido de Dunga.'
  },
  'Lúcio': {
    position: 'Zagueiro - Capitão',
    club: 'Internazionale (Itália)',
    bio: 'Era o pilar defensivo da equipe. Formou uma dupla de zaga imbatível com Juan durante toda a campanha das eliminatórias e na Copa. Campeão da UEFA naquele ano com a Internazionale.'
  },
  'Maicon': {
    position: 'Lateral-Direito',
    club: 'Internazionale (Itália)',
    bio: 'Destaque do time e um dos melhores do mundo em sua posição. Ficou famoso naquele ano por marcar um gol antológico de fora da área contra a Coreia do Norte na fase de grupos.'
  },
  'Juan': {
    position: 'Zagueiro',
    club: ' Roma (Itália)',
    bio: 'A dupla de zaga com Lúcio era a base do time. Extremamente consistente e confiável, foi titular em todos os jogos da campanha.'
  },
  ' Michel Bastos': {
    position: 'Lateral-Esquerdo',
    club: 'Lyon (França)',
    bio: 'Foi a opção de Dunga para a lateral-esquerda. Tinha um potente chute de fora da área e boa capacidade de apoiar o ataque.'
  },
  'Felipe Melo': {
    position: 'Volante',
    club: 'Juventus (Itália)',
    bio: 'Sua participação foi decisiva, mas de forma negativa. Na derrota para a Holanda, foi ele quem marcou contra na própria baliza (decretando o gol da virada) e depois foi expulso, deixando o time com um a menos.'
  },
  'Kaká': {
    position: 'Meia-Atacante',
    club: ' Real Madrid (Espanha)',
    bio: 'Era a grande estrela do time, porém chegou à Copa lesionado e não conseguiu mostrar seu melhor futebol. Foi o último a receber a bola antes do gol do Robinho contra a Coreia do Norte.'
  },
  'Robinho': {
    position: 'Atacante',
    club: 'Santos (Brasil)',
    bio: 'Um dos mais animados da campanha. Marcou o primeiro gol do Brasil na Copa (contra a Coreia do Norte) e foi um dos principais responsáveis pela armação ofensiva.'
  },
  'Luis Fabiano': {
    position: 'Atacante',
    club: 'Sevilla (Espanha)',
    bio: 'Artilheiro da equipe nas Eliminatórias. Marcou dois gols na vitória por 3-1 contra a Costa do Marfim, um deles após um controvérrio toque de mão não marcado.'
  },
  'Dani Alves': {
    position: 'Lateral / Meia',
    club: 'Barcelona (Espanha)',
    bio: 'Na época, era um dos melhores laterais do mundo, mas era reserva de Maicon. Entrou em campo principalmente como meia-direita durante o torneio.'
  },
  'Ramires': {
    position: 'Volante',
    club: 'Benfica (Portugal)',
    bio: 'Sua incansável capacidade de corrida e recuperação de bola lhe renderam a fama de "caçador de bolas", uma característica muito valorizada pelo técnico Dunga.'
  },
  'Júlio Baptista': {
    position: 'Meia-Atacante',
    club: 'Roma (Itália)',
    bio: 'Conhecido pelo apelido de "A Fera", Julio Baptista era um jogador robusto e de bom chute, mas que, naquela Copa, não conseguiu ter o mesmo impacto que teve em outras convocações, ficando um pouco à sombra de Kaká.'
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
