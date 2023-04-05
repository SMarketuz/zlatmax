import { bgimg, knifProd } from "../images/img"

const New = () => {
  return (
    <div className="">
        <div className=" relative sm:h-[100vh] h-[100vh]  ">
          <div className=" absolute sm:flex block sm:h-[100vh] h-[100vh]    ">
            <img src={bgimg} alt="" className="sm:h-[100vh] h-[100vh] w-full"  />

            <div className=" absolute top-0 sm:p-[150px] p-[30px] leading-[40px] ">
                <h1 className="sm:text-[40px] text-[20px]">Новинки </h1>
                <p className="max-w-[400px] pt-[30px]">Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине представлен наиболее широкий выбор Златоустовских ножей от Златоустовских Оружейных Фабрик и компаний, мы являемся официальными поставщиками.</p>
                <div className=" flex gap-5 items-center text-[20px] mt-[20px]">
                    <a href="#" className="text-[#E8AA31]">Больше новинок</a>
                    <i class="fa-solid fa-angle-right text-[#E8AA31]"></i>
                </div>
            </div>

            <div className=" absolute text-black flex sm:right-[300px] right-0 gap-52 "> 

            <div className="sm:bg-white bg-[#E5E5E5] p-[40px] sm:pt-[0] mt-12  ">
            <img src={knifProd} alt="" />
            <div className="text-[20px]">
                <h1>Нож Лиса</h1>
            </div>
            <div className="text-[#ABABAB] flex gap-5 justify-between items-center  text-[20px]">
                <p>95х18</p>
                <p>Орех, Алюминий</p>
            </div>
            <div className="flex gap-5 justify-between items-center border-b-4 border-[black] pb-2 text-[15px]">
                <div className="text-[#E8AA31] flex gap-5">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p className="text-[#ABABAB] ">12 отзывов</p>
            </div>

            <div className="flex items-center justify-between pt-5">
                <div className="sm:text-[30px] text-[20px]">
                    <h1>2 719 р.</h1>
                </div>
                <div className="flex gap-3 sm:text-[30px] text-[20px] ">
                    <i class="fa-solid fa-scale-balanced"></i>
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div className="bg-[#E8AA31] p-3 mt-5 flex justify-center items-center gap-7 text-[white] rounded-[10px]">
                <a href="#">В корзину </a>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            </div>
            </div>
            <div className="flex gap-5 items-center justify-center mt-[40px] absolute bottom-5 sm:pl-[550px] pl-[30px]">
                <div className="bg-[#E8AA31] w-[15px] h-[15px] rounded-[50%]"></div>
                <div className="w-[40px] h-[5px] bg-[#E8AA31]"></div>
                <div className="w-[40px] h-[5px] bg-white"></div>
                <div className="w-[40px] h-[5px] bg-white"></div>
                <div className="w-[40px] h-[5px] bg-white"></div>
            </div>
            
          </div>

        </div>  







    </div>
  )
}

export default New