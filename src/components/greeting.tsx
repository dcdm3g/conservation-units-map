export function Greeting() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold text-foreground">
				Conheça as Unidades de Conservação do Rio Grande do Sul
			</h1>

			<p className="text-foreground">
				As Unidades de Conservação do Rio Grande do Sul desempenham um papel
				fundamental na proteção da biodiversidade e dos ecossistemas locais. Com
				uma variedade que inclui parques, reservas e áreas de proteção
				ambiental, elas são essenciais para a preservação do patrimônio natural
				do estado. Essas áreas não apenas conservam a flora e fauna, mas também
				promovem atividades de pesquisa e educação ambiental.
			</p>

			<p className="text-foreground font-semibold">
				Clique em um dos marcadores para saber mais sobre a unidade de
				conservação.
			</p>
		</div>
	)
}
