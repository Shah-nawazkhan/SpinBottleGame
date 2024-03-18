import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	geekText: {
		marginBottom: '10%',
		fontSize: 25,
		color: '#228B22',
		fontWeight: 'bold',
	},
	bottle: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	rectangle3: {
		width: 30,
		height: 14,
		backgroundColor: '#43E71A',
	},
	rectangle2: {
		width: 100,
		height: 106,
		backgroundColor: '#B4F6A3',
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		overflow: 'hidden',
	},
	rectangle1: {
		width: 100,
		height: 157,
		backgroundColor: '#A2F74D',
	},
	spinButton: {
		alignItems: 'center',
		marginTop: '20%',
		borderRadius: 5,
		paddingTop: 6,
		paddingBottom: 6,
		paddingLeft: 15,
		paddingRight: 15,
	},
	spinButtonText: {
		fontSize: 18,
		color: 'white',
		userSelect: 'none',
	},
});
