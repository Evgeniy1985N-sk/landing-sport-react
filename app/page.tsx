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

          <h1 className="mb-6 lg:mb-27.5 text-[22px] xs:text-[24px] sm:text-[28px] lg:text-[40px] font-bold">
            Выбери подходящий для себя <span className="text-(--color-1)">тариф</span>
          </h1>

          <div className="flex justify-between flex-col lg:flex-row items-center lg:gap-10">
            <Image className="max-w-25 xs:max-w-31 sm:max-w-full" src={'/image/man.png'} width={381} height={767} loading="eager" alt="Мужчина спортивного телосложения" />

            <Form />
          </div>

          <Guarantee />

        </Container>
      </main>
    </>
  );
}
