import React, { useEffect, useState } from 'react';

const teste = () => {
	console.log('Clicou no h1');
};

export const Teste: React.FC = () => {
	const [countA, setCountA] = useState(0);
	const [countB, setCountB] = useState(10);

	// Exemplo de montagem e desmontagem do UseEffect, component Will UnMount
	useEffect(() => {
		document.querySelector('h1')?.addEventListener('click', teste);

		return () => {
			document.querySelector('h1')?.removeEventListener('click', teste);
		};
	}, []);

	// vida util do componente, fica observando os componentes.

	// 1 - useEffect sendo usado para cada reload da pagina (ou renderização), comparavel a component DidUpdate
	// toda vez que atualiza ele é chamado.
	useEffect(() => {
		console.log('Utilizado para renderização da página');
	});

	// 2 - useEffect sendo usado na incrementação do countA,
	useEffect(() => {
		console.log('Utilizado para incrementaçao do botão A');
	}, [countA]);

	// 3 - Array de depedencia vazia, so executa uma vez quando a pagina é carregada, comparavel componet DidMount
	// ele ve quando o componente é montando.
	useEffect(() => {
		console.log('Isso será executado uma vez!');
	}, []);

	return (
		<main>
			<div>
				<h1>Clica em mim</h1>
				<p>Você clicou {countA} vez</p>
				<button onClick={() => setCountA(countA + 1)}>Botão A</button>
			</div>
			<div>
				<p>Você clicou {countB} vez</p>
				<button onClick={() => setCountB(countB + 1)}>Botão B</button>
			</div>
		</main>
	);
};

export default Teste;
