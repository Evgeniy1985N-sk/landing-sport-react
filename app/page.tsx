'use client'

import Image from "next/image";
import Container from "@/components/ui/Container";
import Header from "@/components/Header";
import Form from '@/components/Form'
import Guarantee from '@/components/Guarantee'

export default function Home() {

  return (
    <>
      <Header />
      

      <main className="pt-5 pb-7.5 lg:pt-12.5 lg:pb-37.5">
        <Container>

          <h1 className="mb-27.5 text-[28px] lg:text-[40px] font-bold">
            Выбери подходящий для себя <span className="text-(--color-1)">тариф</span>
          </h1>

          <div className="flex justify-between flex-col xl:flex-row items-center gap-10">
            <Image src={'/image/man.png'} width={381} height={767} loading="eager" alt="Мужчина спортивного телосложения" />

            {/* <Form /> */}
          </div>

          <Guarantee />

        </Container>
      </main>
    </>
  );
}
