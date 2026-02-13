import { ChangeEvent } from "react"
import Link from 'next/link'
import Check from "@/components/icon/Check"

interface Props {
  isChecked: boolean
  isError: boolean
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({ isChecked, isError, handleChange }: Props) {

  return (
    <label className="flex items-center gap-3 max-w-162.5 mt-7.5 cursor-pointer select-none">
      <input type="checkbox" className="hidden peer" checked={isChecked} onChange={handleChange} />
      <span className={ `${isError && !isChecked ? 'border-red-600' : 'border-[#606566] '} flex items-center justify-center shrink-0 w-8 h-8 border-2 rounded-md` }>
        {
          isChecked && <Check />
        }
      </span>
      <span className="text-[#CDCDCD]">Я согласен с <Link className="border-b border-white" href="/">офертой рекуррентных платежей</Link> и <Link className="border-b border-white" href="/">Политикой конфиденциальности</Link></span>
    </label>
  )
}