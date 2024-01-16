import { atom, useAtom } from "jotai"

import { Squad, squads } from "@/app/web/squads/data"

type Config = {
  selected: Squad["id"] | null
}

const configAtom = atom<Config>({
  selected: squads[0].id,
})

export function useSquad() {
  return useAtom(configAtom)
}
