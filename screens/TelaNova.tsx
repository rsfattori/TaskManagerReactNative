import { useState } from "react";
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import Cabecalho from "../components/Cabecalho";
import CampoTexto from "../components/CampoTexto";
import Botao from "../components/Botao";

// Tela de cadastro de nova tarefa (formulário).
// Recebe as ações por PROPS: adicionar e voltar.
type TelaNovaProps = {
	onAdicionar: (titulo: string, descricao: string) => void;
	onVoltar: () => void;
};

export default function TelaNova({ onAdicionar, onVoltar }: TelaNovaProps) {
	// ESTADO local do formulário (useState).
	const [titulo, setTitulo] = useState("");
	const [descricao, setDescricao] = useState("");
	const [erro, setErro] = useState("");

	function salvar() {
		// Validação simples dos campos obrigatórios.
		if (titulo.trim() === "" || descricao.trim() === "") {
			setErro("Título e Descrição são obrigatórios!");
			return;
		}

		onAdicionar(titulo, descricao);
	}

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : undefined}
		>
			<ScrollView contentContainerStyle={styles.conteudo}>
				<Cabecalho titulo="Nova Tarefa" subtitulo="Cadastre uma tarefa" />

				<CampoTexto
					label="Título"
					valor={titulo}
					onChangeText={setTitulo}
					placeholder="Digite o título"
				/>

				<CampoTexto
					label="Descrição"
					valor={descricao}
					onChangeText={setDescricao}
					placeholder="Digite a descrição"
				/>

				{erro !== "" && <Text style={styles.erro}>{erro}</Text>}

				<Botao titulo="Adicionar" onPress={salvar} />
				<Botao titulo="Voltar" onPress={onVoltar} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},

	conteudo: {
		padding: 24,
		paddingTop: 50,
	},

	erro: {
		marginTop: 10,
		fontWeight: "bold",
	},
});
