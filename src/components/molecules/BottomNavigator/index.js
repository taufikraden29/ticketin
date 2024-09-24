import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
	HomeOff,
	HomeOn,
	PesananOff,
	PesananOn,
	ProfileOff,
	ProfileOn,
	WishlistOff,
	WishlistOn,
} from "../../../assets";

const Icon = ({ label, focus }) => {
	switch (label) {
		case "Home":
			return focus ? <Image source={HomeOn} /> : <Image source={HomeOff} />;
		//
		case "Pesanan":
			return focus ? (
				<Image source={PesananOn} />
			) : (
				<Image source={PesananOff} />
			);
		//
		case "Wishlist":
			return focus ? (
				<Image source={WishlistOn} />
			) : (
				<Image source={WishlistOff} />
			);
		//
		case "Profile":
			//
			return focus ? (
				<Image source={ProfileOn} />
			) : (
				<Image source={ProfileOff} />
			);
		default:
			return <Image source={HomeOn} />;
	}
};

const BottomNavigator = ({ state, descriptors, navigation }) => {
	return (
		<View style={styles.container}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
							? options.title
							: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TouchableOpacity
						key={index}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
					>
						<Icon label={label} focus={isFocused} />
						{/* <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
							{label}
						</Text> */}
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default BottomNavigator;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 24,

		backgroundColor: "white",
		justifyContent: "space-between",
	},
});
