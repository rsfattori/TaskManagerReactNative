import { StyleSheet, Text, View } from "react-native";

type CardProps = {
	titulo: string;
	descricao: string;
	status: string;
};

export default function Card({ titulo, descricao, status }: CardProps) {
	return (
		<View style={styles.card}>
			<Text style={styles.titulo}>{titulo}</Text>
			<Text style={styles.descricao}>{descricao}</Text>

			<View style={styles.rodape}>
				<Text style={styles.status}>Status: {status}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderWidth: 1,
		borderRadius: 8,
		padding: 16,
		marginBottom: 12,
	},

	titulo: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 6,
	},

	descricao: {
		fontSize: 15,
		marginBottom: 8,
	},

	rodape: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 12,
	},

	status: {
		fontSize: 14,
		fontWeight: "bold",
	},
});
