import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, createTheme, Button } from '@rneui/themed';
import { useEffect, useState } from 'react';

const theme = createTheme({
  // lightColors: {
  //   primary: '#e7e7e8',
  // },
  // darkColors: {
  //   primary: '#000',
  // },
  mode: 'light',
});

export default function App() {
  let [items, setItems] = useState([]);

  let initializeItems = async () => {
    let response = await fetch('http://192.168.196.137:8000/');
    let json = await response.json();
    setItems(json);
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Welcome to the expense tracker app!</Text>
        <StatusBar style="auto" />
        <Button title="whatever" onPress={initializeItems} />
        {items.map((item) => {
          return <Text>{item.name}</Text>
        })}
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
