import Constants from "expo-constants";
import { Tarefa } from "../models/Tarefa";

// Usa o mesmo IP do computador que está rodando o Expo.
const ip = Constants.expoConfig?.hostUri?.split(":")[0];
const API_URL = `http://${ip}/taskmanager-api`;

export async function buscarTarefas(): Promise<Tarefa[]> {
	let response: Response;

	try {
		response = await fetch(`${API_URL}/tarefas.php`);
	} catch {
		throw new Error("Não foi possível conectar ao servidor");
	}

	if (!response.ok) {
		const dados = await response.json();
		throw new Error(dados.mensagem);
	}

	const tarefas: Tarefa[] = await response.json();
	return tarefas;
}
