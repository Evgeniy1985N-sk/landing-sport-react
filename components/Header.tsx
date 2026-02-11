import Container from "@/components/ui/Container";
import CountDownDisplay from "@/components/CountDownDisplay"

export default function () {
  const targetDate = '2026-06-01T00:00:00';

  return (
    <header className="fixed top-0 left-0 z-10 w-full py-2 bg-[#1D5B43] text-center">
      <Container>
        <p className="text-[24px] font-semibold">
          Успейте открыть пробную неделю
        </p>
        <CountDownDisplay />
      </Container>
    </header>
  )

}