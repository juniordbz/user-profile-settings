import { Logo } from './logo'
import { MainNavigation } from './MainNavigation'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import { Search } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="fixed inset-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white px-5 py-4 lg:relative lg:inset-auto lg:w-80 lg:border-r lg:py-8">
      <Logo />
      <InputRoot>
        <InputPrefix>
          <Search className="size-5 text-zinc-500" />
        </InputPrefix>
        <InputControl placeholder="Search" />
      </InputRoot>

      <MainNavigation />

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200" />
      <Profile />
    </aside>
  )
}
