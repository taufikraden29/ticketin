import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { ic_logo } from "../../assets/image";

const index = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace("MainApp");
		}, 2000);
	}, []);
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#09367A",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<StatusBar backgroundColor={"#09367A"} barStyle={"light-content"} />

			<Image source={ic_logo} style={{ resizeMode: "contain", width: 200 }} />
		</View>
	);
};

export default index;

const styles = StyleSheet.create({});
