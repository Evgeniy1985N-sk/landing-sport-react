import Image from "next/image";
import Container from "@/components/ui/Container";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { CardData } from "./types/cardData";

async function fetchCards(): Promise<CardData[]> {
  const res = await fetch('https://t-core.fit-hub.pro/Test/GetTariffs')
  return res.json()
}


export default async function Home() {
  const cards = await fetchCards()
  console.log('cards', cards)

  return (
    <>
      <Header />

      <main className="pt-12.5 pb-37.5">
        <Container>
          <h1 className="mb-27.5 text-[28px] lg:text-[40px] font-bold">
            Выбери подходящий для себя <span className="text-(--color-1)">тариф</span>
          </h1>

          <div className="flex justify-between items-center gap-10">
            <Image src={'/image/man.png'} width={381} height={767} alt="Мужчина спортивного телосложения" />

            <div className="flex flex-wrap flex-row-reverse gap-3.5 max-w-187 w-full">

              {cards.map((item, i) => {
                return (
                  <Card
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
