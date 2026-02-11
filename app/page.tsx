'use client'

import { TariffWithActive } from "./types/tariffData";
import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Tariff from "@/components/Tariff";
import Header from "@/components/Header";
import Benefit from "@/components/Benfit"
import CheckBox from "@/components/Checkbox"
import Button from '@/components/Button'
import Footer from '@/components/Footer'


export default function Home() {
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

              <p className="mt-3.5 text-sm leading-[120%] text-[#9B9B9B]">
                Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению.
                Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в
                случае желания пользователя.
              </p>


            </form>

          </div>

          <Footer />

        </Container>
      </main>
    </>
  );
}
