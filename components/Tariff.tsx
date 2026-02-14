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

  const baseClass = 'relative flex items-center sm:justify-between gap-[7px] xs:gap-[20px] sm:flex-col p-5 sm:pb-8 sm:px-4.5 bg-[#313637] rounded-[20px] sm:rounded-[40px] border-2 hover:bg-[#3a4041] hover:shadow-[0_0_15px_rgba(253,176,86,0.4)] cursor-pointer transition'
  const activeClass = `${card.isActive ? ' border-[#FDB056]' : ' border-[#484D4E]'}`
  const bestClass = `${card.is_best ? 'flex sm:gap-10 sm:flex-row gap-6 sm:items-center sm:justify-center w-full sm:-order-1 sm:pt-8.5' : 'w-full sm:w-[calc((100%-1.75rem)/3)] sm:pt-17.5'}`
  
  const priceClass = `${card.is_best ? 'sm:min-w-[220px]' : ''} ${card.isActive ? 'text-(--color-1)' : 'text-white'} text-center text-[30px] xs:text-[34px] sm:text-[50px] leading-[100%] font-semibold transition-colors`
  
  const discountBestClass = `${card.is_best ? 'right-[50px] xs:right-[62px]' : 'right-6.5'}`

  return (

    /* CARD */
    <div onClick={onClick} className={`${activeClass} ${bestClass} ${baseClass}`}>

      {/* DISCOUNT */}
      <div className={`${discountBestClass} absolute top-0 flex items-center justify-center w-fit h-5.75 xs:h-6.75 sm:h-9.75 sm:left-12.5 py-0.75 px-1.5 sm:py-1 sm:px-2 bg-[#FD5656] rounded-b-lg`}>
        <span className="font-gilroy text-[13px] xs:text-base sm:text-[22px] leading-3 sm:leading-[130%] font-medium">
          {-Math.round(((card.full_price - card.price) / card?.full_price) * 100)}%
        </span>
      </div>
      {/* DISCOUNT */}

      {/* HIT */}
      {card.is_best && (
        <div className="absolute top-1.5 right-3.5 sm:top-2.5 sm:right-5">
          <span className="text-[13px] xs:text-base sm:text-[22px] leading-[130%] font-medium text-(--color-1)">
            хит!
          </span>
        </div>
      )}
      {/* HIT */}

      {/* WRAPPER */}
      <div className={`${card.is_best ? 'gap-4 mb-0' : 'gap-4 sm:gap-7.5 sm:mb-10'} grid justify-start sm:justify-center min-w-30 xs:min-w-34`}>

        {/* PERIOD */}
        <span className="sm:text-center xs:text-[18px] sm:text-[26px] leading-[120%] font-medium">
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
                <span className='block animate-zoom-in whitespace-nowrap'>
                  {`${card?.full_price} ₽`}
                </span>
              )
            }
          </p>
          <span className={`${card.is_best ? 'sm:pr-5' : ''} ${isTimeOver ? 'animate-zoom-out' : ''} text-right text-[14px] text-base sm:text-[24px] leading-[120%] line-through text-[#919191]`}>
            {card?.full_price} ₽
          </span>
        </div>
        {/* PRICE */}

      </div>
      {/* WRAPPER */}

      {/* TEXT */}
      <p className='sm:flex sm:flex-col sm:items-start sm:min-h-12 text-[14px] sm:text-base sm:max-w-82.5'>


        {!card.is_best && (
          <span>
            {card?.text}
          </span>
        )}

        {card.is_best && (
          <span className="sm:hidden">
            Всегда быть в форме
          </span>
        )}

        {card.is_best && (
          <span className="hidden sm:block">
            {card?.text}
          </span>
        )}

      </p>
      {/* TEXT */}

    </div>
    /* CARD */

  )
}

