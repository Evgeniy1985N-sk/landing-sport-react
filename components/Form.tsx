'use client'
import { useEffect, useState } from "react"
import { useFetchingData } from "@/hooks/useFetchingData"
import Tariff from "@/components/Tariff"
import Benefit from "@/components/Benfit"
import CheckBox from "@/components/Checkbox"
import Button from '@/components/Button'
import Agreement from '@/components/Agreement'

export default function Form() {
  const {tariffs, toggleActiveTariff} = useFetchingData()
  const [agree, setAgree] = useState(false)
  const [valid, setValid] = useState(true)
  const [success, setSuccess] = useState(false)

  function submitForm(e: React.MouseEvent) {
    e.preventDefault()
    if (agree) return setSuccess(true)
    else {
      setValid(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false)
    }, 1500)
  },[success])

  return (
    <form className="max-w-187 w-full">

      <div className="flex flex-wrap flex-row-reverse gap-3.5">
        {tariffs.map((item, i) => {
          return (
            <Tariff
              onClick={() => toggleActiveTariff(i)}
              card={item}
              key={item.id + i}
            />
          )
        })}
      </div>

      <Benefit />

      <CheckBox handleChange={() => setAgree((agree) => agree = !agree)} isChecked={agree} isError={!valid} />

      <Button handleClick={submitForm} isSuccess={success} />

      <Agreement />

    </form>
  )
}