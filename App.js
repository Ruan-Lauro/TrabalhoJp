import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <AssetExample />
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    alignItems: "center",
    backgroundColor:"#EB824E",
    height:"100%"
  },
 
});
