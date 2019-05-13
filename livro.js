import React from 'react';
import {Text, View} from 'react-native';

const livro = (props) => {
    return (
        <View>
          <Text>Título: {props.titulo}</Text>
          {props.paginas !== null && 
            <Text>Páginas: {props.paginas}</Text> }
          <Text>----------------------------------</Text>
        </View>
    )
}

export default livro;