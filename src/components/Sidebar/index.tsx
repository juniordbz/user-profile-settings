'use client'

import { Logo } from './logo'
import { MainNavigation } from './MainNavigation'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import { Menu, Search } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white px-5 py-4 data-[state=open]:bottom-0 lg:inset-auto lg:h-screen  lg:w-80 lg:border-r lg:py-8 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between ">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="size-6 " />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex "
      >
        <InputRoot>
          <InputPrefix>
            <Search className="size-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>

        <MainNavigation />

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
