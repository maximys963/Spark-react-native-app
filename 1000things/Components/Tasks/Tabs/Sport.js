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


export default class Sport extends Component{
  static navigationOptions= {
    title: "DoePub",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
  };

render(){
  const artTasks = [
    {key: "Підтягнутись 10 разів",
    time: '40 днів ',
    done: false,
    wasTapped:false},
    {key: "Підтягнутись 5 разів ",
    time: '20 днів ',
    done: false,
    wasTapped:false},
    {key: "Підтягнутись 15 разів ",
    time: '60 днів ',
    done: false,
    wasTapped:false},
    {key: "Підгягнутись 20 разів ",
    time: '90 днів',
    done: true,
    wasTapped:false},
    {key: "Віджатись 5 разів ",
    time: '14 днів ',
    done: true,
    wasTapped:false},
    {key: "Віджатись 10 разів ",
    time: '20 днів ',
    done: true,
    wasTapped:false},
    {key: "Віджатись 15 разів ",
    time: '30 днів ',
    done: true,
    wasTapped:false},
    {key: "Пробігти 1 км",
    time: '15 днів ',
    done: true,
    wasTapped:false},
    {key: "Пробігти 3 км",
    time: '30 днів',
    done: true,
    wasTapped:false},
    {key: "Пробігти 5 км",
    time: '60 днів',
    done: true,
    wasTapped:false},
    {key: "Пробігти 10 км",
    time: '150 днів',
    done: true,
    wasTapped:false},
    {key: "Пробігти 20 км ",
    time: '300 днів',
    done: true,
    wasTapped:false},
    {key: "Пробігти марафон ",
    time: '360 днів',
    done: true,
    wasTapped:false},
    {key: "Зробити сальто назад ",
    time: '30 днів',
    done: true,
    wasTapped:false},
    {key: "Навчитись плавати ",
    time: '50 днів ',
    done: true,
    wasTapped:false},
    {key: "Пропливти 100 м",
    time: '15 днів ',
    done: true,
    wasTapped:false},
    {key: "Пропливти 200 м",
    time: '20 днів ',
    done: true,
    wasTapped:false},
    {key: "Пропливти 500 м",
    time: '30 днів ',
    done: true,
    wasTapped:false},
    {key: "Пропливти 1 км ",
    time: '60 днів',
    done: true,
    wasTapped:false},
    {key: "Пропливти 3 км ",
    time: '50 днів',
    done: true,
    wasTapped:false},
    {key: "Пропливти 5 км ",
    time: '120 днів ',
    done: true,
    wasTapped:false},
    {key: "Вижати 20 кг ",
    time: '10 днів ',
    done: true,
    wasTapped:false},
    {key: "Вижати 40 кг ",
    time: '20 днів',
    done: true,
    wasTapped:false},
    {key: "Вижаи 50 кг ",
    time: '30 днів',
    done: true,
    wasTapped:false},
    {key: "Вижати 60 кг ",
    time: '60 днів ',
    done: true,
    wasTapped:false},
    {key: "Вижати 70 кг ",
    time: '80 днів',
    done: true,
    wasTapped:false},
    {key: "Вижати 100 кг",
    time: '120 днів ',
    done: true,
    wasTapped:false},
    {key: "Сісти на поперечний шпагат ",
    time: '360 днів',
    done: true,
    wasTapped:false},
    {key: "Сісти на продольний шпагат",
    time: '360 днів',
    done: true,
    wasTapped:false},
    {key: "Закинути ногу за голову ",
    time: '120 днів ',
    done: true,
    wasTapped:false},
    {key: "Не їсти солодке тиждень",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Пити не менше 1.5 л. води кожного дня протягом тижня",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Пити не менше 1.5 л. води кожного дня протягом місяця",
    time: '30 днів',
    done: true,
    wasTapped:false},
    {key: "Робити ранкову зарядку тиждень",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Робити ранкову зарядку місяць",
    time: '30 днів',
    done: true,
    wasTapped:false},
    {key: "Відвідати будь-який спортивний захід",
    time: '14 днів',
    done: true,
    wasTapped:false},
    {key: "Пограти в баскетбол з друзями",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Вгадати результат гри (футболу, баксетболу і т.д.)",
    time: '30 днів',
    done: true,
    wasTapped:false},
    {key: "Прострибати на скакалці 50 разів без зупинки",
    time: '1 день',
    done: true,
    wasTapped:false},
    {key: "Прострибати на скакалці 150 разів без зупинки",
    time: '3 дні',
    done: true,
    wasTapped:false},
    {key: "Прострибати на скакалці 300 разів без зупинки",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Навчитися набивати м'яч",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Долучити друга до занять спортом",
    time: '7 днів',
    done: true,
    wasTapped:false},
    {key: "Відмовитися від алкоголю на півроку",
    time: '6 місяців',
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
         { padding: 10, fontSize:18, height: 64, backgroundColor: 'white', color:"grey", textAlign: 'justify', textAlignVertical: 'center'}
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
