import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Modal,
  Image,
  ImageBackground
} from 'react-native';

const { width } = Dimensions.get('window');

interface Jogador {
  id: number;
  nome: string;
  posicao: string;
  biografia: string;
  foto: string;
}

const Brazil2018Squad: React.FC = () => {
  const [jogadorSelecionado, setJogadorSelecionado] = useState<Jogador | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const jogadores: Jogador[] = [
    {
      id: 1,
      nome: 'Alisson',
      posicao: 'Goleiro',
      biografia: 'Alisson Becker é considerado um dos melhores goleiros do mundo. Começou sua carreira no Internacional em 2013, onde se destacou e chamou a atenção do futebol europeu. Em 2016, transferiu-se para a Roma, onde teve atuações brilhantes. Após a Copa de 2018, foi contratado pelo Liverpool por €62,5 milhões, tornando-se o goleiro mais caro da história na época. No Liverpool, conquistou a Champions League em 2019 e a Premier League em 2020, consolidando-se como um dos melhores do mundo.',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Alisson_2018.jpg/800px-Alisson_2018.jpg'
    },
    {
      id: 2,
      nome: 'Thiago Silva',
      posicao: 'Zagueiro',
      biografia: 'Thiago Emiliano da Silva é um dos zagueiros mais respeitados de sua geração. Começou no Fluminense em 2006, onde se tornou ídolo. Transferiu-se para o Milan em 2009 e em 2012 foi para o PSG, onde se tornou capitão e ídolo absoluto. Líder nato, foi capitão da seleção brasileira em várias competições importantes. Conhecido por sua elegância, posicionamento impecável e capacidade de saída de bola.',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Thiago_Silva_2018.jpg/800px-Thiago_Silva_2018.jpg'
    },
    {
      id: 3,
      nome: 'Miranda',
      posicao: 'Zagueiro',
      biografia: 'João Miranda de Souza Filho, conhecido como Miranda, teve passagem destacada pelo São Paulo entre 2006 e 2011, onde conquistou três títulos brasileiros consecutivos. Em 2011 transferiu-se para o Atlético de Madrid, onde formou uma das melhores zaga da Europa ao lado de Godín. Na Inter de Milão, a partir de 2015, consolidou-se como um dos melhores zagueiros do futebol italiano.',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Miranda_2018.jpg/800px-Miranda_2018.jpg'
    },
    {
      id: 4,
      nome: 'Marcelo',
      posicao: 'Lateral Esquerdo',
      biografia: 'Marcelo Vieira da Silva Júnior é considerado um dos melhores laterais-esquerdo da história do futebol. Revelado pelo Fluminense, transferiu-se para o Real Madrid em 2007, onde se tornou ídolo absoluto e capitão da equipe. No Real Madrid, conquistou 5 Ligas dos Campeões da UEFA, 6 Campeonatos Espanhóis e 4 Mundiais de Clubes.',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Marcelo_2018.jpg/800px-Marcelo_2018.jpg'
    },
    {
      id: 5,
      nome: 'Casemiro',
      posicao: 'Volante',
      biografia: 'Carlos Henrique Casemiro é um volante de grande marcação e qualidade técnica. Formado nas categorias de base do São Paulo, onde se profissionalizou em 2010. Transferiu-se para o Real Madrid em 2013, inicialmente por empréstimo, e tornou-se peça fundamental na equipe que conquistou 4 Ligas dos Campeões em 5 anos.',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Casemiro_2018.jpg/800px-Casemiro_2018.jpg'
    },
    {
      id: 6,
      nome: 'Neymar Jr',
      posicao: 'Atacante',
      biografia: 'Neymar da Silva Santos Júnior é uma das maiores estrelas do futebol mundial. Revelado pelo Santos em 2009, onde conquistou a Copa Libertadores em 2011. Transferiu-se para o Barcelona em 2013, formando o famoso trio MSN ao lado de Messi e Suárez. Em 2017, tornou-se a transferência mais cara da história ao se transferir para o PSG por €222 milhões.',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Neymar_2018.jpg/800px-Neymar_2018.jpg'
    },
    {
      id: 7,
      nome: 'Gabriel Jesus',
      posicao: 'Atacante',
      biografia: 'Gabriel Fernando de Jesus foi revelado pelo Palmeiras em 2015, onde rapidamente se tornou uma das maiores promessas do futebol brasileiro. Transferiu-se para o Manchester City em 2017 por €32 milhões. Atacante versátil, pode atuar como centroavante ou pelas pontas.',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Gabriel_Jesus_2018.jpg/800px-Gabriel_Jesus_2018.jpg'
    },
    {
      id: 8,
      nome: 'Roberto Firmino',
      posicao: 'Atacante',
      biografia: 'Roberto Firmino Barbosa de Oliveira começou sua carreira no Figueirense em 2009 antes de se transferir para o Hoffenheim alemão em 2011. No Liverpool, a partir de 2015, tornou-se ídolo com seu estilo único de jogo, atuando como falso nove e sendo peça fundamental no sistema de jogo de Jürgen Klopp.',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Roberto_Firmino_2018.jpg/800px-Roberto_Firmino_2018.jpg'
    },
    {
      id: 9,
      nome: 'Marquinhos',
      posicao: 'Zagueiro',
      biografia: 'Marcos Aoás Corrêa, conhecido como Marquinhos, começou sua carreira no Corinthians em 2012, onde rapidamente se destacou como uma das maiores promessas do futebol brasileiro. Em 2013, transferiu-se para a Roma e no mesmo ano foi contratado pelo PSG.',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Marquinhos_2018.jpg/800px-Marquinhos_2018.jpg'
    },
    {
      id: 10,
      nome: 'Danilo',
      posicao: 'Lateral Direito',
      biografia: 'Danilo Luiz da Silva começou sua carreira no América-MG antes de se transferir para o Santos em 2010. No Santos, tornou-se titular e chamou a atenção do futebol europeu. Transferiu-se para o Porto em 2012, onde conquistou títulos importantes.',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Danilo_2018.jpg/800px-Danilo_2018.jpg'
    },
    {
      id: 11,
      nome: 'Fernandinho',
      posicao: 'Volante',
      biografia: 'Fernando Luiz Roza, o Fernandinho, começou sua carreira no Atlético Paranaense em 2002. Em 2005 transferiu-se para o Shakhtar Donetsk, onde se tornou ídolo e conquistou múltiplos títulos ucranianos. Em 2013 foi contratado pelo Manchester City.',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Fernandinho_2018.jpg/800px-Fernandinho_2018.jpg'
    }
  ];

  const abrirModal = (jogador: Jogador) => {
    setJogadorSelecionado(jogador);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setJogadorSelecionado(null);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.ibb.co/0j7L8yN/dudas.png' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.convocados}>CONVOCADOS</Text>
          <Text style={styles.copa}>COPA 2018</Text>
        </View>
        
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.gridContainer}>
            {jogadores.map((jogador) => (
              <TouchableOpacity
                key={jogador.id}
                style={styles.card}
                onPress={() => abrirModal(jogador)}
              >
                <Text style={styles.nome}>{jogador.nome}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={fecharModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {jogadorSelecionado && (
                <>
                  <View style={styles.modalHeader}>
                    <Image 
                      source={{ uri: jogadorSelecionado.foto }} 
                      style={styles.fotoJogador}
                      resizeMode="cover"
                    />
                    <Text style={styles.modalTitulo}>{jogadorSelecionado.nome}</Text>
                    <Text style={styles.modalPosicao}>{jogadorSelecionado.posicao}</Text>
                  </View>
                  
                  <ScrollView style={styles.biografiaContainer}>
                    <Text style={styles.biografiaTexto}>
                      {jogadorSelecionado.biografia}
                    </Text>
                  </ScrollView>
                  
                  <TouchableOpacity style={styles.fecharBotao} onPress={fecharModal}>
                    <Text style={styles.fecharTexto}>Fechar</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
  },
  header: {
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#009C3B',
  },
  convocados: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#009C3B',
    marginBottom: 0,
    textAlign: 'center',
    letterSpacing: 2,
    textShadowColor: '#FFDF00',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  copa: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFDF00',
    textAlign: 'center',
    letterSpacing: 2,
    marginTop: 5,
    textShadowColor: '#009C3B',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#009C3B',
    width: (width - 40) / 2,
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFDF00',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFDF00',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    width: '90%',
    maxHeight: '85%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 3,
    borderColor: '#009C3B',
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  fotoJogador: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#009C3B',
  },
  modalTitulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#009C3B',
    textAlign: 'center',
    marginBottom: 5,
    textShadowColor: '#FFDF00',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  modalPosicao: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '600',
  },
  biografiaContainer: {
    maxHeight: 350,
    marginBottom: 20,
  },
  biografiaTexto: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
  fecharBotao: {
    backgroundColor: '#009C3B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFDF00',
  },
  fecharTexto: {
    color: '#FFDF00',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Brazil2018Squad;