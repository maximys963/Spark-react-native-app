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

export default class Art extends Component{
  constructor(props) {
		super(props);

	this.state = {
		isTapped: [],
	};
	}



	 StyleChange(item){
		 console.log(`clicked ${item.key} isTapped ${item.wasTapped}`)
		 return(item.wasTapped = !item.wasTapped);
		 // console.log(`clicked ${item.key} isTapped ${item.wasTapped}`)

	 }

  static navigationOptions= {
    title: "Art",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
  };



  render(){
    const artTasks = [
      {key: "Намалювати портрет",
      time: '3 дні',
      done: false,
			wasTapped:false},
      {key: "Намалювати карекатуру",
      time: '2 дні',
      done: false,
			wasTapped:false},
      {key: "Намалювати пейзаж ",
      time: '3 дні',
      done: false,
			wasTapped:false},
      {key: "Намалювати натюрморт ",
      time: '3 дні',
      done: true,
			wasTapped:false},
      {key: "Намалюй все, що знайдеш на улюбленій вулиці міста",
      time: '1 день',
      done: true,
			wasTapped:false},
      {key: "Накресли карту місць, де ти був в цей день",
      time: '1 день',
      done: true,
		  wasTapped:false},
      {key: "Познайомся з творчістю нового художника",
      time: '2 дні',
      done: true,
		  wasTapped:false},
      {key: "Напиши есе: що мене надихає в творчості художника? ",
      time: '1 день',
      done: true,
		  wasTapped:false},
      {key: "Намалюй шрифтову композицію",
      time: '2 дні',
      done: true,
		  wasTapped:false},
      {key: "Протягом дня малюй тільки червоні предмети",
      time: '1 день',
      done: true,
		  wasTapped:false},
      {key: "Напиши вірш",
      time: '3 дні',
      done: true,
		  wasTapped:false},
      {key: "Запиши пісню для когось",
      time: '4 дні',
      done: true,
		  wasTapped:false},
      {key: "Заспівай під гітару",
      time: '12 годин',
      done: true,
		  wasTapped:false},
      {key: "Подаруй близькій людині річ, яку зробиш власноруч",
      time: '2 дні',
      done: true,
		  wasTapped:false},
      {key: "Спробуй свої сили на кастингу",
      time: '3 дні',
      done: true,
		  wasTapped:false},
      {key: "Напиши автобіографічну історію",
      time: '5 днів',
      done: true,
		  wasTapped:false},
      {key: "Посліхай будь-яку симфонію від початку до кінця",
      time: '12 годин',
      done: true,
		  wasTapped:false},
			{key: "Вивчи будь-який вірш і запиши на відео, як ти його декламуєш",
      time: '1 день',
      done: true,
		  wasTapped:false},
			{key: "Оволодій азами гри на новому музичному інструменті",
      time: '5 днів',
      done: true,
		  wasTapped:false},
			{key: "Зроби аматорський кліп на улюблений трек",
      time: '3 дні',
      done: true,
		  wasTapped:false},
			{key: "Напиши смішну пісню і зроби під неї кліп",
      time: '2 дні',
      done: true,
		  wasTapped:false},
			{key: "Зроби таймлапс заходу сонця",
      time: '1 день',
      done: true,
		  wasTapped:false},
			{key: "Зроби 5 фотографій природи та гарно їх оброби",
      time: '3 дні',
      done: true,
		  wasTapped:false},
			{key: "Станцюй під улюблений танцювальний трек",
      time: '2 дні',
      done: true,
		  wasTapped:false},
			{key: "Вивчи кілька рухів гопака і станцюй",
      time: '3 дні',
      done: true,
		  wasTapped:false},
			{key: "Придумай твір, в якому всі слова будуть починатись з букви П",
      time: '1 день',
      done: true,
		  wasTapped:false},
			{key: "Вивчи будь-який монолог",
      time: '1 день',
      done: true,
		  wasTapped:false},
			{key: "Уяви, що ти дід/баба, що постійно бурчить. Зроби відео",
      time: '1 день',
      done: true,
		  wasTapped:false},
			{key: "Зроби 30-сек відео, в якому зобразиш сум, радість,страх, сміх, тупість, біль, надію.",
      time: '2 дні',
      done: true,
		  wasTapped:false},
			{key: "Купи білу тарілку і розмалюй її спеціальними фарбами для посуду",
      time: '2 дні',
      done: true,
		  wasTapped:false},
			{key: "Намалюй індіанця або індіанку",
      time: '1 день',
      done: true,
		  wasTapped:false},
			{key: "Спробуй створити шматочок електронної музики",
      time: '3 дні',
      done: true,
		  wasTapped:false},
			{key: "Описуй у блокноті кожен свій день протягом тижня, ніби ти письменник",
      time: '7 днів',
      done: true,
		  wasTapped:false},
			{key: "Придумай обкладинку книзі Робінзон Крузо",
      time: '3 дні',
      done: true,
		  wasTapped:false},
			{key: "Намалюй головну сторінку сайту, який ти хотів(ла) б мати, на якому було б все твоє життя",
      time: '2 дні',
      done: true,
		  wasTapped:false},
			{key: "Зроби декупаж на коробці",
      time: '1 день',
      done: true,
		  wasTapped:false},
			{key: "Зроби з папіру велику і гарну аплікацію",
      time: '2 дні',
      done: true,
		  wasTapped:false},
			{key: "Вишити хрестиком на полотні свою улюблену тваринку",
      time: '3 дні',
      done: true,
		  wasTapped:false},
			{key: "Сфотографуй чітко в макрозйомці око людини",
      time: '2 дні',
      done: true,
		  wasTapped:false},
			{key: "Намалюй обстановку ванної кімнати своєї мрії",
      time: '1 день',
      done: true,
		  wasTapped:false},
			{key: "Зроби гарне фото з квітами",
      time: '1 день',
      done: true,
		  wasTapped:false},
			{key: "Збери екібану і опиши її 4-ма словами",
			time: '12 годин',
			done: true,
			wasTapped:false},
			{key: "Дізнатися біографії 5-ти композиторів Європи",
			time: '2 дні',
			done: true,
			wasTapped:false},
			{key: "Подивитись балет Лускунчик",
			time: '1 день',
			done: true,
			wasTapped:false},
			{key: "Прочитати 5 прозових творів української класичної літератури",
			time: '7 днів',
			done: true,
			wasTapped:false},
			{key: "Вивчити вірш українського письменника",
			time: '1 день',
			done: true,
			wasTapped:false},
			{key: "Вивчити вірш іноземного письменника в оригіналі",
			time: '2 дні',
			done: true,
			wasTapped:false},
			{key: "Дізнатися про відомих українських режисерів",
			time: '1 день',
			done: true,
			wasTapped:false},
			{key: "Сходити на академічний концерт випускників музичного уличища/колледжу/інституту",
			time: '1 день',
			done: true,
			wasTapped:false},
			{key: "Зробити колаж з улюблених своїх фотографій",
			time: '2 дні',
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
