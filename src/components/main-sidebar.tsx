'use client'

import { Sidebar, SidebarGroup, SidebarItem } from '@/components/ui/sidebar'
import { Home, Search } from 'lucide-react'

export function MainSidebar() {
	return (
		<Sidebar className="hidden md:flex">
			<SidebarGroup className="flex-1">
				<SidebarItem label="Home" href="/">
					<Home />
				</SidebarItem>

				<SidebarItem label="Buscar" href="/search">
					<Search />
				</SidebarItem>
			</SidebarGroup>
		</Sidebar>
	)
}
