'use client'

import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useTheme } from 'next-themes'

export default function Settings() {
	const { setTheme, theme } = useTheme()

	return (
		<aside className="p-6 bg-card absolute left-4 inset-y-4 w-96 z-40 rounded-lg shadow-md">
			<div className="space-y-2">
				<Label>Selecione o tema</Label>

				<Select defaultValue={theme ?? 'system'} onValueChange={(theme) => setTheme(theme)}>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">
							Claro
						</SelectItem>

						<SelectItem value="dark">
							Escuro
						</SelectItem>

						<SelectItem value="system">
							Mesmo do sistema
						</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</aside>
	)
}
