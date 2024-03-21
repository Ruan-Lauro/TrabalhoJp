import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import {useState, useEffect} from 'react';

export default function AssetExample() {

  const [text, setText] = useState("");  
  const [textFilmes, setTextFilms] = useState("TEXTO AQUI");

  useEffect(()=>{
    if(textFilmes === ""){
      setTextFilms("TEXTO AQUI")
    }
  },[textFilmes])
  

  return (
    <View style={styles.container}>
       <Image style={styles.logo} source={require('../assets/naruto.jpg')} />
      <Text style={styles.cadastreFilmes} > Cadastre o seu Filme </Text>
      <View style={styles.inputDiv}>
        <Text style={styles.tituloDiv}>Título:</Text>
        <TextInput 
          style={styles.input}
          placeholder=''
          value={text}
          keyboardType='text'
          onChangeText={setText}
        ></TextInput>
      </View>
      <View  style={styles.buttonDiv}>
         <TouchableOpacity style={styles.buttonCalculator} onPress={()=>{
          setText("")
        }}>
            <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCalculator}  onPress={()=>{
          setTextFilms(text)
        }}>
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
       <Text style={styles.cadastreFilmes}> {textFilmes} </Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"80%",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  logo: {
    height: 300,
    width: "100%",
  },
  buttonCalculator:{
    backgroundColor:"#D0D050",
    alignItems: "center",
    justifyContent:"center",
    padding:10,

  },
  input:{
    width:250,
    display:"flex",
    borderWidth: 1,
    marginLeft: 3,
    paddingLeft: 10,
  },
  cadastreFilmes:{
    marginTop: 15,
    marginBottom:15,
    fontWeight:"bold",
  },
  inputDiv: {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
  },
  tituloDiv:{
    fontWeight:"bold",
  },
  buttonDiv:{
    display:"flex",
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between",
    marginTop:30,
  }
});

export const globalStyles = StyleSheet.create({
    text: {
      color: 'while',
    },
  });