import { Sidebar } from '@/components/sidebar'
import { UnitsMap } from '@/components/units-map'

export default function Home() {
	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-50 flex">
			<UnitsMap />
			<Sidebar />
		</div>
	)
}
