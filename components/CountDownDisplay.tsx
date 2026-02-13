import { useCountDown } from "@/hooks/useCountDown";
import Star from "@/components/icon/Star";

export default function CountDownDisplay() {
  const [minutes, seconds] = useCountDown();

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  const wrapperClass = `${minutes === 0 && seconds <= 30 ? 'animate-pulse text-[#FF4E4E]' : ' text-[#FFBB00]'} ${minutes === 0 && seconds === 0 ? '!animate-none text-[#FFF]' : ''}`
  const textClass = 'flex justify-center gap-1 xs:gap-2 min-w-24 xs:min-w-30.5 font-raleway text-[28px] xs:text-[32px] sm:text-[40px] font-bold leading-[110%]'

  return (
    <div className={`${wrapperClass} flex items-center justify-center gap-1 sm:gap-2`}>
      <Star />
      <p className={textClass}>
        <span className="min-w-10 xs:min-w-12 sm:min-w-14.25">{formattedMinutes}</span>:<span className="min-w-9 xs:min-w-11 sm:min-w-13.75 text-left">{formattedSeconds}</span>
      </p>
      <Star />
    </div>
  );
}