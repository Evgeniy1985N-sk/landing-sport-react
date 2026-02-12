'use client'

import { TariffWithActive } from "@/types/tariffData";
import { useEffect, useState } from "react";
import Tariff from "@/components/Tariff";
import Benefit from "@/components/Benfit"
import CheckBox from "@/components/Checkbox"
import Button from '@/components/Button'
import Agreement from '@/components/Agreement'

export default function Form() {
  const [tariffs, setTariffs] = useState < TariffWithActive[] > ([])

  useEffect(() => {
    async function fetchTariffs() {
      try {
        const res = await fetch('https://t-core.fit-hub.pro/Test/GetTariffs')
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const result: TariffWithActive[] = await res.json()
        const tariffsWithActive = result.map((item) => ({
          ...item,
          isActive: item.is_best
        }))
        setTariffs(tariffsWithActive)

      } catch (error) {
        console.error('Error fetching tariffs:', error)
      }
    }
    fetchTariffs()
  }, [])

  function toggleActiveTariff(index: number) {
    setTariffs(tariffs.map((item, i) => ({
      ...item,
      isActive: i === index
    })))
  }

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

      <CheckBox />

      <Button />

      <Agreement />

    </form>
  )
}