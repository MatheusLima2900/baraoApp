/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Livro from './livro';

const livros = [
  {
    "titulo": "Livro 1",
    "qtdPaginas": "123",
  },
  {
    "titulo": "Livro 2",
    "qtdPaginas": "1111",
  },
  {
    "titulo": "Livro 3",
    "qtdPaginas": "1344",
  },
  {
    "titulo": "Livro 4",
    "qtdPaginas": "",
  },
]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {livros.map( (livro) => {
          return (
            <Livro 
              titulo={livro.titulo} 
              paginas={livro.qtdPaginas} />
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
