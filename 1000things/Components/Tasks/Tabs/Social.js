import React, {Component} from 'react';
import{
	AppRegistry,
	Dimensions,
	ListView,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	View,
  FlatList
} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";
import { SwipeListView } from 'react-native-swipe-list-view';


export default class Social extends Component{
  static navigationOptions= {
    title: "DoePub",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
  };

render(){
  const artTasks = [
    {key: "Посадити дерево",
    time: '1 день',
    done: false,
    wasTapped:false},
    {key: "Подарувати незнайомій дівчині/жінці/бабусі квіти",
    time: '1 день',
    done: false,
    wasTapped:false},
    {key: "Погодувати бездомну тварину",
    time: '1 день',
    done: false,
    wasTapped:false},
    {key: "Стати донором крові",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Вмовити одного знайомого/знайому здати кров",
    time: '5 днів',
    done: true,
    wasTapped:false},
    {key: "Вмовити 3 знайомих здати кров",
    time: '5 днів',
    done: true,
    wasTapped:false},
    {key: "Вмовити 5 знайомих здати кров",
    time: '5 днів',
    done: true,
    wasTapped:false},
    {key: "Вмовити 10 знайомих здати кров",
    time: '5 днів',
    done: true,
    wasTapped:false},
    {key: "Пожертвувати гроші на благодійність",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "За рік здати кров три рази",
    time: '1 рік',
    done: true,
    wasTapped:false},
    {key: "Відвідати дитячий будинок і подарувати вихованцю річ, яка йому необхідна",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Розчистити сніг перед будинком",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Розчистити сніг перед будинком/під'їздом сусідів якщо вони ще не встигли це зробити",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Принести смачненьке на роботу/місце навчання і пригостити колег",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Подарувати мамі/сестрі квіти",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Зібрати іграшки якими вже не граєтесь та передати потребуючим дітям (малозабезпечена сім'я, дитячий будинок)",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Подарувати в бібліотеку новеньку книжку, якої в ній немає",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "В книжковій крамниці запропонувати заплатити за книжку яку збираються придбати",
    time: '2 дні',
    done: true,
    wasTapped:false},
    {key: "аписати лист людині з якою Вам добре і надіслати його поштою",
    time: '5 дні',
    done: true,
    wasTapped:false},
    {key: "Повести близьких людей в театр за свій рахунок",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Залишити офіціанту чайові та записку про його хорошу роботу",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "На кінцевій зупинці транспорту купити водію чай чи каву",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "За погодженням з міською владою/ЖЕКом/відділом благоустрою перетворити стару стіну на поетичну стіну",
    time: '30 днів',
    done: true,
    wasTapped:false},
    {key: "Здати 5 кілограмів макулатури (за раз одна людина)",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Здати 10 кілограмів макулатури (за раз одна людина)",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Здати 15 кілограмів макулатури (за раз одна людина)",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Здати 30 кілограмів макулатури (за раз одна людина)",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Здати 50 кілограмів макулатури (за раз одна людина)",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Розмістити на Вашій активній сторінці в соціальній мережі інформацію про користь донорством та набрати під записом 20 лайків",
    time: '2 дні',
    done: true,
    wasTapped:false},
    {key: "Під час дощу подарувати незнайомцю дощовик",
    time: '2 дні',
    done: true,
    wasTapped:false},
    {key: "Оплатити покупки людини похилого віку в магазині",
    time: '2 дні',
    done: true,
    wasTapped:false},
    {key: "Змайструвати та повісити годівничку з кормом",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Зробити комплімент незнайомцю",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Створити сімейне дерево",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Влаштувати суботник з друзями",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Пройти курси першої допомоги",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Перевірити своє здоровья ( обійти базовий список лікарів, здати основні аналізи)",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Здайте використані батарейки в спеціально відведенемо місці",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Оплатити покупки людини похилого віку в аптеці",
    time: '2 дні',
    done: true,
    wasTapped:false},
    {key: "Допомогти бабусі/дідусю по господарству/зі здоров'ям",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Обійміть за день 10 людей",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Станьте волонтером на спортивному заході",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Здати 10 скляних пляшок (за раз одна людина)",
    time: '2 дні',
    done: true,
    wasTapped:false},
    {key: "Поповнити рахунок незнайомій людині",
    time: '1 день',
    done: true,
    }

  ]
  return(

    <View style={styles.container}>
    <FlatList
      data={artTasks}
      ItemSeparatorComponent={ () => <View style={ { height:2, backgroundColor: 'grey' } } /> }
      renderItem={
        ({item})=> <Text
        onPress={()=> this.StyleChange(item)}

       style={
         { padding: 10, fontSize:18, backgroundColor: 'white', color:"grey", textAlign: 'justify', textAlignVertical: 'center'}
     } >{item.key} {item.time} </Text>
       }
      ></FlatList>
    </View>

  );
}
}
const styles  = StyleSheet.create({

  constainer:{
    flex: 1,
  }



});
