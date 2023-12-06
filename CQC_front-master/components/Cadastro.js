// Componente.js
import React, { useState } from "react";

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Linking,
  Alert,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { LinearGradient } from "expo-linear-gradient";
import "@react-navigation/native";
import listaConexao from "../lista/listaConexao";
import minhaLista from "../lista/listaEventos";

export const Cadastro = ({ navigation }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputSenha, setInputSenha] = useState("");
  const [inputNome, setInputNome] = useState("");
  const [inputSobrenome, setInputSobrenome] = useState("");

  const buttonHandle = async () => {
    const api_url =
      "https://7x3nasz0vi.execute-api.us-east-2.amazonaws.com/dev";
    if (
      inputEmail != "" ||
      inputNome != "" ||
      inputSenha != "" ||
      inputSobrenome != ""
    ) {
      const response = await fetch(`${api_url}/cadastro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: inputNome,
          sobrenome: inputSobrenome,
          email: inputEmail,
          senha: inputSenha,
        }),
      });
      if (response.status == 200) {
        const data = await response.json();
        alert("Cadastrado com sucesso!");
        navigation.navigate("login");
      } else {
        Alert.alert(
          "Erro ao fazer login",
          String("Erro ao cadastrar tente novamente"),
          [{ text: "OK", onPress: () => console.log("OK Pressionado") }]
        );
      }
    } else {
      Alert.alert(
        "Erro ao fazer login",
        String("Preencha todos os campos e tente novamente!"),
        [{ text: "OK", onPress: () => console.log("OK Pressionado") }]
      );
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <LinearGradient colors={["#fefffc", "#5eb6f5"]} style={styles.container}>
        <View style={styles.top}>
          <SafeAreaView style={styles.safe}>
            <View>
              <Text style={styles.titulo}>Cadastre no EventNow</Text>
            </View>
            <Text style={styles.text}>Nome:</Text>
            <View style={styles.container1}>
              <FontAwesomeIcon icon={faUser} />
              <TextInput
                value={inputNome}
                onChangeText={(text) => setInputNome(text)}
                style={styles.input}
                placeholder="Digite seu nome"
              ></TextInput>
            </View>
            <Text style={styles.text}>Sobrenome:</Text>
            <View style={styles.container1}>
              <FontAwesomeIcon icon={faUser} />
              <TextInput
                value={inputSobrenome}
                onChangeText={(text) => setInputSobrenome(text)}
                style={styles.input}
                placeholder="Digite seu sobrenome"
              ></TextInput>
            </View>

            <Text style={styles.text}>E-mail:</Text>
            <View style={styles.container1}>
              <FontAwesomeIcon icon={faUser} />
              <TextInput
                value={inputEmail}
                onChangeText={(text) => setInputEmail(text)}
                style={styles.input}
                placeholder="Digite seu e-mail"
              ></TextInput>
            </View>

            <Text style={styles.text}>Senha:</Text>
            <View style={styles.container1}>
              <FontAwesomeIcon icon={faLock} />
              <TextInput
                value={inputSenha}
                onChangeText={(text) => setInputSenha(text)}
                style={styles.input}
                placeholder="Digite sua senha"
              ></TextInput>
            </View>

            <View style={styles.container2}>
              <Text style={styles.cadastro} onPress={buttonHandle}>
                Cadastre-se
              </Text>
            </View>
          </SafeAreaView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container2: {
    flexDirection: "column",
    alignItems: "center",
  },
  login: {
    backgroundColor: "#5eb6f5",
    textAlign: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 20,
    paddingTop: 10,
    width: "40%",
    borderRadius: 20,
  },
  cadastro: {
    backgroundColor: "#5eb6f5",
    textAlign: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 20,
    paddingTop: 10,
    width: "40%",
    borderRadius: 20,
  },
  safe: {
    flex: 1,
  },
  titulo: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 40,
  },
  text: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    marginLeft: 12,

    padding: 10,
    width: "100%",
  
  },
  container1: {
    borderBottomWidth: 1,
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
  },
  safe: {
    flex: 1,
  },
  container: {
    minWidth: "100%",
    flex: 1,
    justifyContent: "center",
    padding: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  top: {
    flex: 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});