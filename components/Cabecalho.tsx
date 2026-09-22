import { StyleSheet, Text, View } from "react-native";

// Componente próprio do cabeçalho.
// Recebe o título e o subtítulo por PROPS.
type CabecalhoProps = {
	titulo: string;
	subtitulo: string;
};

export default function Cabecalho({ titulo, subtitulo }: CabecalhoProps) {
	return (
		<View style={styles.cabecalho}>
			<Text style={styles.titulo}>{titulo}</Text>
			<Text style={styles.subtitulo}>{subtitulo}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	cabecalho: {
		alignItems: "center",
		marginBottom: 30,
	},

	titulo: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
	},

	subtitulo: {
		fontSize: 16,
		textAlign: "center",
	},
});
