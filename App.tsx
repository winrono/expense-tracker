import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, createTheme, Button } from '@rneui/themed';

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
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Welcome to the expense tracker app!</Text>
        <StatusBar style="auto" />
        <Button title="whatever" />
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
