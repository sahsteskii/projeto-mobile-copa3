import { 
  ImageBackground, 
  StyleSheet, 
  View, 
  ScrollView, 
  Pressable,
  Text 
} from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

// Dados das copas para os cards
const copaData = [
  {
    year: '1930',
    title: 'Primeira Copa',
    description: 'Uruguai - Primeira edição da Copa do Mundo',
    route: '/copa1930',
    color: '#4A5568'
  },
  {
    year: '2010',
    title: 'Copa da África do Sul',
    description: 'Espanha Campeã - Primeira copa na África',
    route: '/copa2010',
    color: '#2D3748'
  },
  {
    year: '2014',
    title: 'Copa do Brasil',
    description: 'Alemanha Campeã - Copa realizada no Brasil',
    route: '/copa2014',
    color: '#2B6CB0'
  },
  {
    year: '2018',
    title: 'Copa da Rússia',
    description: 'França Campeã - Copa com tecnologia VAR',
    route: '/copa2018',
    color: '#2C5AA0'
  },
  {
    year: '2022',
    title: 'Copa do Catar',
    description: 'Argentina Campeã - Primeira copa no Oriente Médio',
    route: '/copa2022',
    color: '#97266D'
  }
];

export default function IntroducaoScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('@/assets/images/copagrazzy.png')}
        resizeMode="cover" 
        style={styles.backgroundImage}
      >
        
        <ThemedView style={styles.header}>
          <Text style={styles.title}>Álbum da Copa</Text>
          <Text style={styles.subtitle}>Selecione uma edição</Text>
        </ThemedView>

        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {copaData.map((copa) => (
            <Link 
              key={copa.year} 
              href={copa.route} 
              asChild
            >
              <Pressable style={styles.card}>
                {({ pressed }) => (
                  <View 
                    style={[
                      styles.cardContent,
                      { backgroundColor: copa.color },
                      pressed && styles.cardPressed
                    ]}
                  >
                    <Text style={styles.cardYear}>{copa.year}</Text>
                    <Text style={styles.cardTitle}>{copa.title}</Text>
                    <Text style={styles.cardDescription}>
                      {copa.description}
                    </Text>
                  </View>
                )}
              </Pressable>
            </Link>
          ))}
        </ScrollView>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#E2E8F0',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 30,
    gap: 16,
  },
  card: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    padding: 20,
    borderRadius: 12,
    minHeight: 120,
    justifyContent: 'center',
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  cardYear: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#E2E8F0',
    lineHeight: 20,
  },
}); 