import { UnitsSearch } from '@/app/search/_components/units-search'

export default function Search() {
	return (
		<aside className="p-6 bg-card absolute left-4 inset-y-4 w-96 z-40 rounded-lg shadow-md">
			<UnitsSearch />
		</aside>
	)
}
