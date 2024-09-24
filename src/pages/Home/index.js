import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { home } from "../../assets";
import { ic_home } from "../../assets/image/home";

const index = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#09367A",
			}}
		>
			<StatusBar backgroundColor={"#09367A"} barStyle={"light-content"} />
			<View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						paddingHorizontal: 30,
					}}
				>
					<Image source={home.ic_home} style={{ w: 50 }} />
					<Image source={home.ic_profile} style={{ width: 50, height: 50 }} />
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						paddingHorizontal: 30,
					}}
				>
					<View>
						<Text style={{ fontSize: 18, color: "white" }}>Diskon</Text>
						<Text style={{ fontSize: 18, color: "white" }}>Dengan Bunga</Text>
						<Text
							style={{
								fontSize: 30,
								color: "white",
								fontFamily: "Roboto-Medium",
							}}
						>
							0%
						</Text>
					</View>
					<View style={{ flexDirection: "row" }}>
						<Image source={home.ic_1_human} />
						<Image source={home.ic_2_human} />
					</View>
				</View>
			</View>

			<View
				style={{
					backgroundColor: "white",
					flex: 1,
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						backgroundColor: "white",
						justifyContent: "space-evenly",
						alignItems: "center",
						marginHorizontal: 30,
						borderRadius: 10,
						marginTop: -30,
						elevation: 5,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Image source={ic_home.Wallet} style={{ height: 26, width: 26 }} />
						<Text style={{ fontSize: 20, fontWeight: "800" }}>
							Rp.5000.0000
						</Text>
					</View>
					<View>
						<Image source={ic_home.Line} />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Image source={ic_home.Scan} style={{ height: 26, width: 26 }} />
						<Text style={{ fontSize: 20, fontWeight: "800" }}>SCAN</Text>
					</View>
				</View>
				<Text>Testing</Text>
			</View>
		</View>
	);
};

export default index;

const styles = StyleSheet.create({});
