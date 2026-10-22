import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import TelaLista from "./screens/TelaLista";
import TelaNova from "./screens/TelaNova";

export default function App() {
	const [tela, setTela] = useState<"lista" | "nova">("lista");

	return (
		<>
			<StatusBar style="auto" />

			{tela === "lista" ? (
				<TelaLista onIrParaNova={() => setTela("nova")} />
			) : (
				<TelaNova onVoltar={() => setTela("lista")} />
			)}
		</>
	);
}
