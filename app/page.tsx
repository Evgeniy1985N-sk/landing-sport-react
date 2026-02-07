import Image from "next/image";
import Container from "@/components/ui/Container";
import Card from "@/components/Card";
import Header from "@/components/Header";

export default function Home() {
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

            <div className="grid grid-cols-3 gap-3.5 max-w-187 w-full">
              <Card classCard="col-span-3 flex" />
              <Card />
              <Card />
              <Card />
            </div>

          </div>
        </Container>
      </main>
    </>
  );
}
