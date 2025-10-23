import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';

// Definindo a interface para o jogador
interface Jogador {
  id: number;
  nome: string;
  posicao: string;
  idade: number;
  clube: string;
  jogosSelecao: number;
  golsSelecao: number;
}

// Dados dos jogadores
const jogadores: Jogador[] = [
  {
    id: 1,
    nome: 'Alisson',
    posicao: 'Goleiro',
    idade: 25,
    clube: 'Roma',
    jogosSelecao: 31,
    golsSelecao: 0,
  },
  {
    id: 2,
    nome: 'Fagner',
    posicao: 'Lateral-direito',
    idade: 29,
    clube: 'Corinthians',
    jogosSelecao: 8,
    golsSelecao: 0,
  },
  {
    id: 3,
    nome: 'Thiago Silva',
    posicao: 'Zagueiro',
    idade: 33,
    clube: 'PSG',
    jogosSelecao: 65,
    golsSelecao: 5,
  },
  {
    id: 4,
    nome: 'Miranda',
    posicao: 'Zagueiro',
    idade: 33,
    clube: 'Inter de Milão',
    jogosSelecao: 52,
    golsSelecao: 2,
  },
  {
    id: 5,
    nome: 'Marcelo',
    posicao: 'Lateral-esquerdo',
    idade: 30,
    clube: 'Real Madrid',
    jogosSelecao: 55,
    golsSelecao: 6,
  },
  {
    id: 6,
    nome: 'Casemiro',
    posicao: 'Volante',
    idade: 26,
    clube: 'Real Madrid',
    jogosSelecao: 28,
    golsSelecao: 0,
  },
  {
    id: 7,
    nome: 'Paulinho',
    posicao: 'Meio-campista',
    idade: 29,
    clube: 'Barcelona',
    jogosSelecao: 51,
    golsSelecao: 12,
  },
  {
    id: 8,
    nome: 'Philippe Coutinho',
    posicao: 'Meio-campista',
    idade: 26,
    clube: 'Barcelona',
    jogosSelecao: 38,
    golsSelecao: 10,
  },
  {
    id: 9,
    nome: 'Willian',
    posicao: 'Meia-atacante',
    idade: 29,
    clube: 'Chelsea',
    jogosSelecao: 65,
    golsSelecao: 8,
  },
  {
    id: 10,
    nome: 'Neymar Jr',
    posicao: 'Atacante',
    idade: 26,
    clube: 'PSG',
    jogosSelecao: 85,
    golsSelecao: 55,
  },
  {
    id: 11,
    nome: 'Gabriel Jesus',
    posicao: 'Atacante',
    idade: 21,
    clube: 'Manchester City',
    jogosSelecao: 17,
    golsSelecao: 10,
  },
];

// Componente do Card do Jogador
const JogadorCard: React.FC<{ jogador: Jogador }> = ({ jogador }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardNome}>{jogador.nome}</Text>
        <Text style={styles.cardPosicao}>{jogador.posicao}</Text>
      </View>
      
      <View style={styles.cardBody}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Idade:</Text>
          <Text style={styles.infoValue}>{jogador.idade}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Clube:</Text>
          <Text style={styles.infoValue} numberOfLines={1}>{jogador.clube}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Jogos:</Text>
          <Text style={styles.infoValue}>{jogador.jogosSelecao}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Gols:</Text>
          <Text style={styles.infoValue}>{jogador.golsSelecao}</Text>
        </View>
      </View>
    </View>
  );
};

// Componente Principal
const SelecaoBrasileira2018: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Seleção Brasileira - Copa do Mundo 2018</Text>
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.jogadoresGrid}>
          {jogadores.map((jogador) => (
            <JogadorCard key={jogador.id} jogador={jogador} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Estilos
const { width } = Dimensions.get('window');
const cardWidth = (width - 45) / 2; // 2 cards por linha com menos espaçamento

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15, // Reduzido o padding
  },
  titulo: {
    color: '#003366',
    textAlign: 'center',
    marginBottom: 20, // Reduzido
    fontSize: 20, // Reduzido
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 15,
  },
  jogadoresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10, // Reduzido o gap
  },
  card: {
    width: cardWidth,
    backgroundColor: '#008000',
    borderRadius: 8, // Reduzido
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1, // Reduzido
    },
    shadowOpacity: 0.2, // Reduzido
    shadowRadius: 2, // Reduzido
    elevation: 3, // Reduzido
    marginBottom: 10, // Reduzido
  },
  cardHeader: {
    backgroundColor: '#006400',
    padding: 8, // Reduzido
    alignItems: 'center',
  },
  cardNome: {
    color: 'white',
    fontSize: 14, // Reduzido
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardPosicao: {
    color: '#e0e0e0',
    fontSize: 10, // Reduzido
    marginTop: 2, // Reduzido
    textAlign: 'center',
  },
  cardBody: {
    padding: 8, // Reduzido
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4, // Reduzido
  },
  infoLabel: {
    color: '#e0e0e0',
    fontSize: 10, // Reduzido
    fontWeight: '600',
  },
  infoValue: {
    color: 'white',
    fontSize: 10, // Reduzido
    fontWeight: '400',
    textAlign: 'right',
    flexShrink: 1,
  },
});

export default SelecaoBrasileira2018;