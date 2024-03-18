import React,
{ useRef } from 'react';
import {
	View, Pressable,
	Text, Animated, Easing
} from 'react-native';
import { styles } from './styles';

const generateRandomDecimal =
	() => {
		const randomNumber = Math.random();
		return parseFloat(randomNumber.toFixed(2));
	};


const SpinBottle =
	() => {
		const spinValue =
			useRef(new Animated.Value(0)).current;
		const isSpinning = useRef(false);

		const startSpinAnimation =
			() => {
				if (!isSpinning.current) {
					isSpinning.current = true;
					spinValue.setValue(0);
					Animated.timing(spinValue, {
						toValue: 10 + generateRandomDecimal(),
						duration: 2000,
						easing: Easing.bezier(0.16, 1, 0.3, 1),
						useNativeDriver: false,
					}).start(() => {
						// Animation completed
						isSpinning.current = false;
						// Add any additional logic you want to run after spinning stops
					});
				}
			};

		const spin =
			spinValue.interpolate({
				inputRange: [0, 1],
				outputRange: ['0deg', '360deg'],
			});

		return (
			<View style={styles.container}>
				<Text style={styles.geekText}>
					Spin Bottle Game
				</Text>
				<Animated.View style=
					{
						[styles.bottle,
						{
							transform: [{ rotate: spin }]
						}]}>
					<View style={styles.rectangle3}></View>
					<View style={styles.rectangle2}></View>
					<View style={styles.rectangle1}></View>
				</Animated.View>
				<Pressable
					style={({ pressed }) => [
						styles.spinButton,
						{
							backgroundColor:
								pressed ? '#0F9D58' : '#14EF37',
						},
					]} onPress={startSpinAnimation}>
					<Text style={styles.spinButtonText}>
						SPIN
					</Text>
				</Pressable>
			</View>
		);
	};

export default SpinBottle;
