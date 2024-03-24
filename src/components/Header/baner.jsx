import CountdownTimer from '../timer/CountdownTimer';
import { useContext } from 'react';
import { Context } from '../Context/Context';
import { Language } from '@/Localization/Localization';


function Baner() {

    const {lang} = useContext(Context)

    const day = 3;

    const dateTime = day * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const targetDate = NOW_IN_MS + dateTime;
      
  return (
    <div className="bg-white mb-16 z-20 relative rounded-[20px] mx-auto 400px:px-[45px] md:max-w-[800px] lg:max-w-[900px] md:px-[0px]  xl:max-w-[1140px] 300px:px-[20px] md:flex 300px:space-x-0 space-x-56 md:space-x-6 lg:space-x-14 xl:space-x-36  justify-center  py-[20px]">
        <div className="space-y-8">
            <div>
                <b className="text-red-500 text-[20px]"><span className="text-[26px]">50%</span> &nbsp; {Language[lang].Banner.Bannerchergerma}</b>
                <h2 className="text-[28px] font-bold">{Language[lang].Banner.Banneraksiya}</h2>
                <p className="text-[14px] text-[#7a7a7a]"> {Language[lang].Banner.BannerText} <br/>
                </p>
            </div>
            <div>
                <p className="text-[15px] font-normal">{Language[lang].Banner.BannerTime}</p>
                <CountdownTimer targetDate={targetDate} />
            </div>
        </div>
        <div className='pt-[40px]'>
            <img className='md:w-[300px] xl:w-[400px] 400px:w-full' src="/public/images/baner/Baner.png" alt="Baner" />
        </div>
    </div>
  )
}

export default Baner