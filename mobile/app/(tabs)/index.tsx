import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import contatoscreen from './grazy';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {title: 'entrar'},
    },
    Profile: {
      screen: contatoscreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Sua lógica de login aqui
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('@/assets/images/oii.png')}
        resizeMode="cover" 
        style={styles.image}
      >
        {/* Overlay escuro para melhor contraste */}
        <View style={styles.overlay} />
        
        <KeyboardAvoidingView 
          style={styles.loginContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {/* Container do formulário de login */}                               
          <View style={styles.loginBox}>
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.subtitle}>Faça login para continuar</Text>
            
            {/* Campo Emai                                                                                                                                                                                                                                                                                                                                                                                                                                                                  l */}
            <TextInput                                                 
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            {/* Campo Senha */}
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            
            {/* Botão de Login */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>
            
            {/* Link para cadastro */}
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Não tem conta? </Text>
              <TouchableOpacity>
                <Text style={styles.registerLink}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>

        {/* Seus componentes existentes - mantidos no lugar */}
        <ThemedView style={styles.titleContainer}>
          {/* Seu conteúdo existente */}
        </ThemedView>
        
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
          {/* Seu conteúdo existente */}
        </ThemedView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)', // Overlay para melhor legibilidade
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  loginBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    padding: 25,
    borderRadius: 15,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#B8860B',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#999',
    shadowColor: '#999',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  loginButton: {
    backgroundColor: '#B8860B',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#999',
    fontSize: 14,
  },
  registerLink: {
    color: '#B8860B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    // Ajuste a posição se necessário
    position: 'absolute',
    top: 50,
    left: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    // Ajuste a posição dos containers existentes
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});