'use client'

import Image from "next/image";
import Container from "@/components/ui/Container";
import Tariff from "@/components/Tariff";
import Header from "@/components/Header";
import { TariffData } from "./types/tariffData";
import { useEffect, useState } from "react";


export default function Home() {
  const [tariffs, setTariff] = useState<TariffData[]>([])

  useEffect(() => {

    async function fetchTariffs() {
      try {
        const res = await fetch('https://t-core.fit-hub.pro/Test/GetTariffs')

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }

        const result: TariffData[] = await res.json()
        setTariff(result)
      } catch(error) {
        console.error('Error fetching tariffs:', error)
      }

    }

    fetchTariffs()

  }, [])

  function handleClick() {

  }

  return (
    <>
      <Header />

      <main className="pt-12.5 pb-37.5">
        <Container>
          <h1 className="mb-27.5 text-[28px] lg:text-[40px] font-bold">
            Выбери подходящий для себя <span className="text-(--color-1)">тариф</span>
          </h1>

          <div className="flex justify-between items-center gap-10">
            <Image src={'/image/man.png'} width={381} height={767} loading="eager" alt="Мужчина спортивного телосложения" />

            <div className="flex flex-wrap flex-row-reverse gap-3.5 max-w-187 w-full">

              {tariffs.map((item, i) => {
                return (
                  <Tariff
                    onClick={handleClick}
                    card={item}
                    classCard={item.is_best ? 'w-full -order-1' : 'w-[calc((100%-1.75rem)/3)]'}
                    key={i}
                  />
                )
              })}

            </div>

          </div>
        </Container>
      </main>
    </>
  );
}
