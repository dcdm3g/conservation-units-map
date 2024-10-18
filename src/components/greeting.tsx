import { Sparkles } from 'lucide-react'
import { BookOpen, Info, MapPin } from 'lucide-react'

export function Greeting() {
	return (
		<div className="flex flex-col gap-6">
			<div className="size-10 flex justify-center items-center rounded-full border-2 border-primary">
				<Sparkles className="size-6 text-primary" />
			</div>

			<h1 className="text-3xl font-semibold text-foreground">
				Explorando as Unidades de Conservação do RS
			</h1>

			<ul className="flex flex-col gap-4">
				<li className="flex gap-2.5 items-baseline">
					<MapPin className="text-primary size-4 shrink-0" /> Explore o mapa e
					descubra a variedade de Unidades de Conservação do Rio Grande do Sul.
				</li>
				<li className="flex gap-2.5 items-baseline">
					<Info className="text-primary size-4 shrink-0" /> Clique em uma
					unidade para obter mais informações detalhadas sobre ela.
				</li>
				<li className="flex gap-2.5 items-baseline">
					<BookOpen className="text-primary size-4 shrink-0" /> Aprofunde seu
					conhecimento sobre a importância e os benefícios das áreas protegidas.
				</li>
			</ul>
		</div>
	)
}
