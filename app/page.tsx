// import Image from "next/image";

import Star from "@/components/icon/Star";
import Container from "@/components/ui/Container";

export default function Home() {
  return (

    <>
      <header className="fixed top-0 left-0 w-full py-2 bg-[#1D5B43] text-center">
        <Container>
          <p className="text-[24px] font-semibold">
            Успейте открыть пробную неделю
          </p>
          <div className="flex items-center justify-center gap-2 text-[#FFBB00] text-[40px] font-bold">
            <Star />
            <span className="font-raleway">
              15:59
            </span>
            <Star />
          </div>
        </Container>
      </header>

      <main className="pt-12.5 pb-37.5">
        <Container>
          <h1 className="h-[2000px] text-[28px] lg:text-[40px] font-bold">
            Выбери подходящий для себя <span className="text-(--color-1)">тариф</span>
          </h1>
        </Container>
      </main>
    </>

  );
}
