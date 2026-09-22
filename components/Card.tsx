import { Pressable, StyleSheet, Text, View } from "react-native";

// Componente próprio que exibe uma tarefa na lista.
// Recebe os dados da tarefa e a ação de excluir por PROPS.
type CardProps = {
	id: number;
	titulo: string;
	descricao: string;
	status: string;
	onExcluir: (id: number) => void;
};

export default function Card({
	id,
	titulo,
	descricao,
	status,
	onExcluir,
}: CardProps) {
	return (
		<View style={styles.card}>
			<Text style={styles.titulo}>{titulo}</Text>
			<Text style={styles.descricao}>{descricao}</Text>

			<View style={styles.rodape}>
				<Text style={styles.status}>Status: {status}</Text>

				<Pressable
					style={styles.botaoExcluir}
					onPress={() => onExcluir(id)}
				>
					<Text style={styles.textoExcluir}>Excluir</Text>
				</Pressable>
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

	botaoExcluir: {
		borderWidth: 1,
		borderRadius: 6,
		paddingVertical: 8,
		paddingHorizontal: 12,
	},

	textoExcluir: {
		fontWeight: "bold",
	},
});
