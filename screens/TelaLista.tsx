import { FlatList, StyleSheet, Text, View } from "react-native";
import { Tarefa } from "../models/Tarefa";
import Cabecalho from "../components/Cabecalho";
import Botao from "../components/Botao";
import Card from "../components/Card";

// Tela principal (Home): mostra a lista de tarefas.
// Recebe os dados e as ações por PROPS vindas do App.tsx.
type TelaListaProps = {
	tarefas: Tarefa[];
	onExcluir: (id: number) => void;
	onIrParaNova: () => void;
};

export default function TelaLista({
	tarefas,
	onExcluir,
	onIrParaNova,
}: TelaListaProps) {
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
						id={item.id}
						titulo={item.titulo}
						descricao={item.descricao}
						status={item.status}
						onExcluir={onExcluir}
					/>
				)}
				ListEmptyComponent={
					<View style={styles.listaVazia}>
						<Text style={styles.textoListaVazia}>
							Nenhuma tarefa cadastrada
						</Text>
						<Text>Toque em "Nova Tarefa" para adicionar.</Text>
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
		marginBottom: 5,
	},
});
