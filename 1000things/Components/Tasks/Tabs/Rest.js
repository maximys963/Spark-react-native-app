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


export default class Rest extends Component{
  static navigationOptions= {
    title: "Rest",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
  };

render(){
  const artTasks = [
    {key: "Покататись на санчатах",
    time: '1 день',
    done: false,
    wasTapped:false},
    {key: "Покататись на лижах",
    time: '1 день',
    done: false,
    wasTapped:false},
    {key: "Покататись на ковзанах",
    time: '1 день',
    done: false,
    wasTapped:false},
    {key: "Покататись на сноуборді",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Покататись на роликах",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Стрибнути з парашутом",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Стрибнути з мосту (банджі джампінг)",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Поїхати на відпочинок з друзями посмажити шашлики",
    time: '2 дні',
    done: true,
    wasTapped:false},
    {key: "Навчитися готувати нову страву",
    time: '2 дні',
    done: true,
    wasTapped:false},
    {key: "Відвідати нове місто",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Зробити кардинально нову заціску",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Відвідати телешоу у якості глядача",
    time: '5 днів',
    done: true,
    wasTapped:false},
    {key: "Зустріти світанок з друзями",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Зробити карту своїх бажань",
    time: '2 дні',
    done: true,
    wasTapped:false},
    {key: "Відвідати 5 відомих місць будь якого міста",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Побувати на оглядовому майданчику",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Поїхати закордон",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Не користуватись телефоном весь день",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Не заходити в соц.мережі весь день",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Зіграти в настольну гру з друзями ",
    time: '12 годин',
    done: true,
    wasTapped:false},
    {key: "Подивитись ТОП-25 TedTalks",
    time: '12 днів',
    done: true,
    wasTapped:false},
    {key: "Зібрати пазл із 5000+ частин",
    time: '5 днів',
    done: true,
    wasTapped:false},
    {key: "Зробити орігамі",
    time: '3 години',
    done: true,
    wasTapped:false},
    {key: "Зібрати повну скарбничку монет",
    time: '13 днів',
    done: true,
    wasTapped:false},
    {key: "Не говорити Так весь день",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Протанцювати всю ніч",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Вивчити Привіт на 15-ти мовах",
    time: '2 дні',
    done: true,
    wasTapped:false},
    {key: "Вивчити столиці 50-ти країн світу",
    time: '15 днів',
    done: true,
    wasTapped:false},
    {key: "Не спати всю ніч",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Поспілкуватися з іноземцем",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Запустити в небо китайський ліхтарик",
    time: '12 годин',
    done: true,
    wasTapped:false},
    {key: "Зробити фото з кумиром/відомою людиною",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Зробити фото на плівку",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Виключити вдома на 1 день повністю електроенергію",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Приготувати нову страву",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Зняти з друзями смішне відео",
    time: '2 дні',
    done: true,
    wasTapped:false},
    {key: "Піти в поход у гори з друзями",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Поїхати на море, зробити фото на пляжі",
    time: '4 дні',
    done: true,
    wasTapped:false},
    {key: "Провести вечір з другом/коханою людиною",
    time: '12 годин',
    done: true,
    wasTapped:false},
    {key: "Знайти нове красиве місце в своєму місті",
    time: '7 днів',
    done: true,
    wasTapped:false},


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
