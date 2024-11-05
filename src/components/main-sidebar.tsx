import { Sidebar, SidebarGroup, SidebarItem } from '@/components/ui/sidebar'
import { Info, Search, Settings } from 'lucide-react'

export function MainSidebar() {
	return (
		<Sidebar className="hidden md:flex">
			<SidebarGroup className="flex-1">
				<SidebarItem label="Informações" href="/">
					<Info />
				</SidebarItem>

				<SidebarItem label="Buscar" href="/search">
					<Search />
				</SidebarItem>
			</SidebarGroup>
		</Sidebar>
	)
}
