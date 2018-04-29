import React, {
	Component,
} from 'react';
import {
	AppRegistry,
	Dimensions,
	ListView,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	View
} from 'react-native';

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

class ArtList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			listType: 'FlatList',
			listViewData: Array(21).fill('').map((_,i) => ({key: `${i}`, text: `item #${i}`})),
		};
	}
  openRow = (rowRef) => {
    // Use an internal method to manually swipe the row open to whatever value you pass
    rowRef.manuallySwipeRow(50);
  }

	closeRow(rowMap, rowKey) {
		if (rowMap[rowKey]) {
			rowMap[rowKey].closeRow();
		}
	}

	deleteRow(rowMap, rowKey) {
		this.closeRow(rowMap, rowKey);
		const newData = [...this.state.listViewData];
		const prevIndex = this.state.listViewData.findIndex(item => item.key === rowKey);
		newData.splice(prevIndex, 1);
		this.setState({listViewData: newData});
	}

	onRowDidOpen = (rowKey, rowMap) => {
		console.log('This row opened', rowKey);
		setTimeout(() => {
			this.closeRow(rowMap, rowKey);
		}, 2000);
	}

	render() {
		return (
			<View style={styles.container}>






				{
					this.state.listType === 'FlatList' &&

					<SwipeListView
						useFlatList
						data={this.state.listViewData}

						renderItem={ (data, rowMap) => (
							<TouchableHighlight

								style={styles.rowFront}
								underlayColor={'#AAA'}
							>
								<View>
									<Text>I am yep {data.item.text} in a SwipeListView</Text>
								</View>
							</TouchableHighlight>
						)}
						renderHiddenItem={ (data, rowMap) => (
							<View style={styles.rowBack}>
								<Text>Left</Text>
								<TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} onPress={ _ => this.closeRow(rowMap, data.item.key) }>
									<Text style={styles.backTextWhite}>Close</Text>
								</TouchableOpacity>
								<TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={ _ => this.deleteRow(rowMap, data.item.key) }>
									<Text style={styles.backTextWhite}>Delete</Text>
								</TouchableOpacity>
							</View>
						)}
						leftOpenValue={75}
						rightOpenValue={-150}
						previewRowKey={'0'}
						previewOpenValue={-40}
						previewOpenDelay={3000}
						onRowDidOpen={this.onRowDidOpen}
					/>
				}



			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1
	},
	standalone: {
		marginTop: 30,
		marginBottom: 30,
	},
	standaloneRowFront: {
		alignItems: 'center',
		backgroundColor: '#CCC',
		justifyContent: 'center',
		height: 50,
	},
	standaloneRowBack: {
		alignItems: 'center',
		backgroundColor: '#8BC645',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15
	},
	backTextWhite: {
		color: '#FFF'
	},
	rowFront: {
		alignItems: 'center',
		backgroundColor: '#CCC',
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		justifyContent: 'center',
		height: 50,
	},
	rowBack: {
		alignItems: 'center',
		backgroundColor: '#DDD',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
	},
	backRightBtn: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: 75
	},
	backRightBtnLeft: {
		backgroundColor: 'blue',
		right: 75
	},
	backRightBtnRight: {
		backgroundColor: 'red',
		right: 0
	},
	controls: {
		alignItems: 'center',
		marginBottom: 30
	},
	switchContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 5
	},
	switch: {
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'black',
		paddingVertical: 10,
		width: Dimensions.get('window').width / 4,
	}
});
export default ArtList;
