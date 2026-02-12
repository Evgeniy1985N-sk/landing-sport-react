import Mark from "./icon/Mark"

export default function () {
  return (
    <div className="flex gap-2 max-w-125 mt-5 py-4.5 px-5 bg-(--color-3) rounded-[20px]">
      <span className="flex items-center justify-center w-6 h-6.5">
        <Mark />
      </span>
      <p>
        Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
      </p>
    </div>
  )
}