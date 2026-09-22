import { StyleSheet, Text, TextInput, View } from "react-native";

// Componente próprio de campo de texto (label + input).
// Recebe tudo por PROPS, deixando o formulário mais organizado.
type CampoTextoProps = {
	label: string;
	valor: string;
	onChangeText: (texto: string) => void;
	placeholder: string;
};

export default function CampoTexto({
	label,
	valor,
	onChangeText,
	placeholder,
}: CampoTextoProps) {
	return (
		<View style={styles.campo}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				value={valor}
				onChangeText={onChangeText}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	campo: {
		marginTop: 10,
	},

	label: {
		fontSize: 15,
		fontWeight: "bold",
		marginBottom: 5,
	},

	input: {
		width: "100%",
		borderWidth: 1,
		borderRadius: 8,
		padding: 12,
		fontSize: 16,
	},
});
