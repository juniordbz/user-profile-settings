import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/juniordbz.png"
        className="size-10 rounded-full"
        alt=""
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Francisco Bezerra
        </span>
        <span className="truncate text-sm text-zinc-500">
          Franciscojunior02@hotmail.com.br
        </span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-50">
        <LogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  )
}
