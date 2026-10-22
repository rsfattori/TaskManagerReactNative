import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { Tarefa } from "../models/Tarefa";
import { buscarTarefas } from "../services/tarefaService";
import Cabecalho from "../components/Cabecalho";
import Botao from "../components/Botao";
import Card from "../components/Card";

type TelaListaProps = {
	onIrParaNova: () => void;
};

export default function TelaLista({ onIrParaNova }: TelaListaProps) {
	const [tarefas, setTarefas] = useState<Tarefa[]>([]);
	const [carregando, setCarregando] = useState(true);
	const [erro, setErro] = useState("");

	async function carregarTarefas() {
		setCarregando(true);
		setErro("");

		try {
			const dados = await buscarTarefas();
			setTarefas(dados);
		} catch (e) {
			setErro(e instanceof Error ? e.message : "Erro desconhecido");
		} finally {
			setCarregando(false);
		}
	}

	useEffect(() => {
		carregarTarefas();
	}, []);

	if (carregando) {
		return (
			<View style={styles.centro}>
				<ActivityIndicator size="large" />
				<Text style={styles.mensagem}>Carregando tarefas...</Text>
			</View>
		);
	}

	if (erro !== "") {
		return (
			<View style={styles.centro}>
				<Text style={styles.mensagem}>{erro}</Text>
				<Botao titulo="Tentar novamente" onPress={carregarTarefas} />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={tarefas}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.conteudo}
				ListHeaderComponent={
					<View>
						<Cabecalho
							titulo="TASKAPP"
							subtitulo="Gerenciador de Tarefas"
						/>

						<Botao titulo="Nova Tarefa" onPress={onIrParaNova} />

						<View style={styles.cabecalhoLista}>
							<Text style={styles.tituloLista}>LISTA</Text>
							<Text style={styles.tituloLista}>
								{tarefas.length > 0
									? `${tarefas.length} tarefas`
									: "Nenhuma tarefa"}
							</Text>
						</View>
					</View>
				}
				renderItem={({ item }) => (
					<Card
						titulo={item.titulo}
						descricao={item.descricao}
						status={item.status}
					/>
				)}
				ListEmptyComponent={
					<View style={styles.listaVazia}>
						<Text style={styles.textoListaVazia}>
							Nenhuma tarefa encontrada
						</Text>
					</View>
				}
			/>
		</View>
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

	centro: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 24,
		backgroundColor: "#fff",
	},

	mensagem: {
		fontSize: 16,
		fontWeight: "bold",
		marginTop: 10,
		textAlign: "center",
	},

	cabecalhoLista: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 25,
	},

	tituloLista: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 15,
	},

	listaVazia: {
		borderWidth: 1,
		borderRadius: 8,
		padding: 20,
		alignItems: "center",
	},

	textoListaVazia: {
		fontSize: 17,
		fontWeight: "bold",
	},
});
