import { ChangeEvent, useState } from "react"
import Link from 'next/link'
import Check from "@/components/icon/Check"


export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false)
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked)
  }
  return (
    <label className="flex items-center gap-3 max-w-162.5 mt-7.5 cursor-pointer select-none">
      <input type="checkbox" className="hidden peer" checked={isChecked} onChange={handleChange} />
      <span className="flex items-center justify-center shrink-0 w-8 h-8 border-2 border-[#606566] rounded-md">
        {
          isChecked && <Check />
        }
      </span>
      <span className="text-[#CDCDCD]">Я согласен с <Link className="underline" href="/">офертой рекуррентных платежей</Link> и <Link className="underline" href="/">Политикой конфиденциальности</Link></span>
    </label>
  )
}