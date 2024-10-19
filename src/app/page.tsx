import dynamic from 'next/dynamic'

const Application = dynamic(
	() => import('@/components/application').then((module) => module.Application),
	{ ssr: false },
)

export default function Home() {
	return (
		<div className="min-h-screen flex">
			<Application />
		</div>
	)
}
