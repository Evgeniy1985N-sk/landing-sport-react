import { TariffWithActive } from "@/types/tariffData";
import { useEffect, useState } from "react";

const useFetchingData = () => {
  const [tariffs, setTariffs] = useState<TariffWithActive[]>([])

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

  return { tariffs, toggleActiveTariff }

}

export { useFetchingData }