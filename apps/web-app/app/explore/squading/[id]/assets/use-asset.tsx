import { atom, useAtom } from "jotai"

import { Asset, assets } from "@/app/examples/explore/squading/[id]/assets/data"

type Config = {
  selected: Asset["transaction_id"] | null
}

const configAtom = atom<Config>({
  selected: assets[0].transaction_id,
})

export function useAsset() {
  return useAtom(configAtom)
}
