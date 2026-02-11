import Star from "@/components/icon/Star";
import Container from "@/components/ui/Container";

export default function () {

  return (
    <header className="fixed top-0 left-0 z-10 w-full py-2 bg-[#1D5B43] text-center">
      <Container>
        <p className="text-[24px] font-semibold">
          Успейте открыть пробную неделю
        </p>
        <div className="flex items-center justify-center gap-2 text-[#FFBB00]">
          <Star />
          <span className="font-raleway text-[40px] font-bold">
            15:59
          </span>
          <Star />
        </div>
      </Container>
    </header>
  )

}