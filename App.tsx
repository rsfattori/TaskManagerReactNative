import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Tarefa } from "./models/Tarefa";
import TelaLista from "./screens/TelaLista";
import TelaNova from "./screens/TelaNova";

// App.tsx é o "cérebro": guarda o estado principal (lista de tarefas e
// qual tela está ativa) e decide qual tela renderizar. A navegação é
// feita apenas com useState (sem bibliotecas).
export default function App() {
	// ESTADO: lista de tarefas (começa com exemplos em memória).
	const [tarefas, setTarefas] = useState<Tarefa[]>([
		{
			id: 1,
			titulo: "Estudar React Native",
			descricao: "Revisar componentes, props e estados",
			status: "Pendente",
		},
		{
			id: 2,
			titulo: "Preparar o Checkpoint 01",
			descricao: "Organizar a estrutura inicial do projeto",
			status: "Pendente",
		},
	]);

	// ESTADO: qual tela está sendo exibida.
	const [tela, setTela] = useState<"lista" | "nova">("lista");

	// Adiciona uma nova tarefa e volta para a lista.
	function adicionar(titulo: string, descricao: string) {
		const nova: Tarefa = {
			id: Date.now(),
			titulo: titulo,
			descricao: descricao,
			status: "Pendente",
		};

		setTarefas([...tarefas, nova]);
		setTela("lista");
	}

	// Remove uma tarefa pelo id.
	function excluir(id: number) {
		setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
	}

	return (
		<>
			<StatusBar style="auto" />

			{tela === "lista" ? (
				<TelaLista
					tarefas={tarefas}
					onExcluir={excluir}
					onIrParaNova={() => setTela("nova")}
				/>
			) : (
				<TelaNova
					onAdicionar={adicionar}
					onVoltar={() => setTela("lista")}
				/>
			)}
		</>
	);
}
