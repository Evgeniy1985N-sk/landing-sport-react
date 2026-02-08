import { CardData } from "@/app/types/cardData"

interface Props {
  card: CardData
  classCard?: string
}



export default function Card({ card, classCard }: Props) {
  return (

    /* CARD */
    <div className={`${classCard} ${card.is_best ? 'flex gap-10 items-center justify-center pt-8.5' : 'pt-17.5'} relative pb-8 px-4.5 bg-[#313637] rounded-[40px] border border-[#484D4E] cursor-pointer`}>

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
      )
      }
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
          <p className={`${card.is_best ? 'text-(--color-1)' : 'text-white'} text-center text-[50px] leading-[100%] font-semibold`}>
            {card?.price} ₽
          </p>
          <span className="text-right text-[24px] leading-[120%] line-through text-[#919191]">
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

