import Mark from "./icon/Mark"

export default function () {
  return (
    <div className="flex gap-1.5 sm:gap-2 max-w-125 mt-2.5 xs:mt-3 sm:mt-5 py-3.5 px-3 sm:py-4.5 sm:px-5 bg-(--color-3) rounded-2xl xs:rounded-[20px]">
      <span className="flex items-center justify-center shrink-0 w-6 h-6.5">
        <Mark />
      </span>
      <p className="text-xs sm:text-base leading-[130%]">
        Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
      </p>
    </div>
  )
}