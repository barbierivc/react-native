import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Picker} from '@react-native-community/picker';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      pizza:0,
      /*Criando um array para Picker Dinamico */
      pizzas: [
        {key: 1, nome:'Calabresa', valor: 19.90},
        {key: 2, nome:'Lombo Canadense', valor: 49.90},
        {key: 3, nome:'4 Queijos', valor: 69.90},
        {key: 4, nome:'Portuguesa', valor: 39.90},
      ]
    };
  };
  render(){

    let pizzasItem= this.state.pizzas.map((v,k)=>{
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return(
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker 
        selectedValue={this.state.pizza}
        onValueChange={ (itemValue, itemIndex) => this.setState({pizza: itemValue})}
        >
          {pizzasItem}
        </Picker>

        <Text style={styles.pizza}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizza}>R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },

  logo:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight:'bold',
  },

  pizza:{
    marginTop: 15,
    fontSize: 22,
    textAlign:'center'

  },
});