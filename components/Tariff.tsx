'use client'

import { TariffWithActive } from "@/types/tariffData"
import { useCountDown } from "@/hooks/useCountDown"

interface Props {
  card: TariffWithActive
  onClick: (event: React.MouseEvent) => void
}

export default function Tariff({ card, onClick }: Props) {
  const [minutes, seconds] = useCountDown()
  const isTimeOver = minutes === 0 && seconds === 0

  const baseClass = 'relative pb-8 px-4.5 bg-[#313637] rounded-[40px] border-2 hover:bg-[#3a4041] hover:shadow-[0_0_15px_rgba(253,176,86,0.4)] cursor-pointer transition'
  const activeClass = `${card.isActive ? ' border-[#FDB056]' : ' border-[#484D4E]'}`
  const bestClass = `${card.is_best ? 'flex gap-6 items-center justify-center w-full -order-1 pt-8.5' : 'w-[calc((100%-1.75rem)/3)] pt-17.5'}`
  const priceClass = `${card.is_best ? 'min-w-[220px]' : ''} ${card.isActive ? 'text-(--color-1)' : 'text-white'} text-center text-[50px] leading-[100%] font-semibold transition-colors`

  return (

    /* CARD */
    <div onClick={onClick} className={`${activeClass} ${bestClass} ${baseClass}`}>

      {/* DISCOUNT */}
      <div className="absolute top-0 left-12.5 py-1 px-2 bg-[#FD5656] rounded-b-lg">
        <span className="font-gilroy text-[22px] leading-[130%] font-medium">
          {-Math.round(((card.full_price - card.price) / card?.full_price) * 100)}%
        </span>
      </div>
      {/* DISCOUNT */}

      {/* HIT */}
      {card.is_best && (
        <div className="absolute top-2.5 right-5">
          <span className="text-[22px] leading-[130%] font-medium text-(--color-1)">
            хит!
          </span>
        </div>
      )}
      {/* HIT */}

      {/* WRAPPER */}
      <div className={`${card.is_best ? 'gap-4 mb-0' : 'gap-7.5 mb-10'} grid justify-center`}>

        {/* PERIOD */}
        <span className="text-center text-[26px] leading-[120%] font-medium">
          {card?.period}
        </span>
        {/* PERIOD */}

        {/* PRICE */}
        <div className={`flex flex-col justify-center w-fit`}>
          <p className={`${priceClass}`}>
            {
              !isTimeOver && (
                card?.price + '₽'
              )
            }

            {
              isTimeOver && (
                <span className='block animate-zoom-in'>
                  { `${card?.full_price} ₽` }
                </span>
              )
            }
          </p>
          <span className={`${card.is_best ? 'pr-5' : ''} ${isTimeOver ? 'animate-zoom-out' : ''} text-right text-[24px] leading-[120%] line-through text-[#919191]`}>
            {card?.full_price} ₽
          </span>
        </div>
        {/* PRICE */}

      </div>
      {/* WRAPPER */}

      {/* TEXT */}
      <p className={`${card.is_best ? 'max-w-82' : ''}`}>
        {card?.text}
      </p>
      {/* TEXT */}

    </div>
    /* CARD */

  )
}

