interface Props {
  classCard?: string
}

// const class

export default function Card({classCard}: Props ) {
  return (

    /* CARD */
    <div className={`${classCard} relative w-full pt-17.5 pb-8 px-4.5 bg-[#313637] rounded-[40px] border border-[#484D4E]`}>

      <div className="absolute top-0 left-12.5 p-2 bg-[#FD5656] rounded-b-lg">
        <span className="font-gilroy text-[22px] leading-[130%] font-medium">
          -70%
        </span>
      </div>

      <div className="grid gap-7.5 justify-center mb-10">

        <span className="text-center text-[26px] leading-[120%] font-medium">
          3 месяца
        </span>

        {/* PRICE */}
        <div className="flex flex-col justify-center w-fit">
          <p className="text-center text-[50px] leading-[100%] font-semibold">
            1990 ₽
          </p>
          <span className="text-right text-[24px] leading-[120%] line-through text-[#919191]">
            3990 ₽
          </span>
        </div>
        {/* PRICE */}

      </div>

      <p>
        Привести тело в порядок
      </p>

    </div>
    /* CARD */

  )
}

