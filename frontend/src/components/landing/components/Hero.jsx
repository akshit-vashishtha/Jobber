import Bg from './herobg.jpg';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
export default function Hero() {
  return (
    <div 
      className=" bg-cover bg-center flex justify-center items-center" 
      style={{ backgroundImage: `url(${Bg})` }}
    >
        <div className='left w-[50%] h-full'>
          <HeroLeft/>
        </div>
        
        <div className='right w-[50%] h-full'>
          <HeroRight/>
        </div>
      
    </div>
  );
}
