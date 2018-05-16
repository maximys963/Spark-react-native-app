import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";



export default class Achives extends Component{
  static navigationOptions= {
    title: "Achives",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
     header: null
  };
  constructor(props){
    super(props);
    this.kppCheck = this.kppCheck.bind(this);
    this.state = {
      KPPisdone: false
    }
}
kppCheck(){
  if(!this.state.KPPisdone){
    this.setState({
      KPPisdone: true
    })
  }
}

sourceHandle(Done){
  if(Done){
    return(require('./icons/android.png'))
  }else{
    return(require('./icons/lock.png'))
  }
}

  render(){
    return(

      <View style={styles.container}>
      <View><Text style={{fontSize:20, alignSelf: 'center', marginTop:20}}>Ваші досягнення</Text></View>
      <View style={styles.rowcontainer}>
        <View style={styles.achivcontainer}>
          <Text style={styles.headText}>Братюня</Text>
          <Image style={styles.acheevka}
            source={require('./icons/lock.png')}
            ></Image>
          <Text style={styles.achText}>Додай 3 друзів</Text>
        </View>
        <View style={styles.achivcontainer}>
          <Text style={styles.headText}>Android Dev</Text>
          <Image style={styles.acheevka}
            source={this.sourceHandle(this.state.KPPisdone)}
            ></Image>
          <Text style={styles.achText}
              onPress={this.kppCheck}
            >Здай проект з КПП</Text>
        </View>
        <View style={styles.achivcontainer}>
          <Text style={styles.headText}>Інтелегент</Text>
          <Image style={styles.acheevka}
            source={require('./icons/lock.png')}
            ></Image>
          <Text style={styles.achText}>Рецензуй 1 книгу </Text>
        </View>
      </View>
      <View style={styles.rowcontainer}>
        <View style={styles.achivcontainer}>
          <Text style={styles.headText}>Едванст</Text>
          <Image style={styles.acheevka}
            source={require('./icons/lock.png')}
            ></Image>
          <Text style={styles.achText}>Зроби по завданню із 3 категорій</Text>
        </View>
        <View style={styles.achivcontainer}>
          <Text style={styles.headText}>Номер 1 </Text>
          <Image style={styles.acheevka}
            source={require('./icons/medal.png')}
            ></Image>
          <Text style={styles.achText}>Виконай 1 завдання</Text>
        </View>
        <View style={styles.achivcontainer}>
          <Text style={styles.headText}>Екстраверт</Text>
          <Image style={styles.acheevka}
            source={require('./icons/lock.png')}
            ></Image>
          <Text style={styles.achText}>Додай інформацію про себе</Text>
        </View>
      </View>
      <View style={styles.rowcontainer}>
        <View style={styles.achivcontainer}>
          <Text style={styles.headText}>Proofmaker</Text>
          <Image style={styles.acheevka}
            source={require('./icons/photo.png')}
            ></Image>
          <Text style={styles.achText}>Розмісти свою історію</Text>
        </View>
        <View style={styles.achivcontainer}>
          <Text style={styles.headText}>Термінатор</Text>
          <Image style={styles.acheevka}
            source={require('./icons/lock.png')}
            ></Image>
          <Text style={styles.achText}>Виконай 5 завдань</Text>
        </View>
        <View style={styles.achivcontainer}>
          <Text style={styles.headText}>Instweetbook</Text>
          <Image style={styles.acheevka}
            source={require('./icons/lock.png')}
            ></Image>
          <Text style={styles.achText}>Підключи 3 соц мережі</Text>
        </View>
      </View>


      </View>

    );
  }
}
const styles  = StyleSheet.create({
container:{
  flex:1,
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignContent: 'space-around',
},
rowcontainer:{
  flexDirection: 'row',
  justifyContent: 'space-around',
},
achivcontainer:{
  flexDirection: 'column',

},
acheevka:{
  width: 80,
  height: 80,
},
achText:{
  width: 80,
  height: 50,
  fontSize: 11,
  textAlign: 'center',
},
headText:{
  marginBottom: 5,
  fontSize: 12,
  width: 80,
  textAlign: 'center',
  fontWeight: 'bold',
}




});
