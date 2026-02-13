import Container from "@/components/ui/Container";
import CountDownDisplay from "@/components/CountDownDisplay"

export default function () {
  const targetDate = '2026-06-01T00:00:00';

  return (
    <header className="fixed top-0 left-0 z-10 w-full pt-2 pb-3 bg-[#1D5B43] text-center">
      <Container>
        <div className="grid gap-1">
          <p className="text-sm xs:text-[18px] sm:text-[24px] leading-[130%] font-semibold">
            Успейте открыть пробную неделю
          </p>
          <CountDownDisplay />
        </div>
      </Container>
    </header>
  )

}