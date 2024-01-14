import { cookies } from "next/headers"
import Image from "next/image"

import { Squads } from "./components/squads"
import { accounts, squads } from "./data"

export default function MailPage() {


  return (
    <>
      <div className="hidden flex-col md:flex">
        <Squads
          squads={squads}
        />
      </div>
    </>
  )
}
