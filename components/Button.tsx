interface Props {
  isSuccess: boolean
  handleClick: (event: React.MouseEvent) => void
}
export default function Button({ handleClick, isSuccess }: Props) {
  const baseClass = `${isSuccess ? ' bg-green-300' : ' bg-[#FDB056] animate-pulse' } flex items-center justify-center max-w-88 w-full mt-4 p-5 hover:animate-none rounded-[20px] cursor-pointer`

  return (
    <button onClick={handleClick} className={baseClass}>
      <span className="text-[20px] leading-130% text-[#191E1F] font-bold">
        {!isSuccess && ('Купить')}
        {isSuccess && ('Готово')}
      </span>
    </button>
  )
}