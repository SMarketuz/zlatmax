import { knifProd } from "../images/img"


const Prodaje = () => {
  return (
    <div className="">
        <div className="flex  justify-between items-center">
            <h1 className="text-[20px]">Хиты продаж</h1>
            <div className="sm:flex hidden items-center justify-center gap-2  " >
                <a href="#" className="text-[20px]">Перейти в каталог</a>
                <i class="fa-solid fa-right-long text-[40px]"></i>
            </div>
        </div>

        <div className="sm:flex block justify-center gap-[20px]">


        <div className="bg-white p-[40px] sm:pt-[0] mt-12">
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

        <div className="bg-white p-[40px] sm:pt-[0] mt-12">
            <img src={knifProd} alt="" />
            <div className="text-[20px]">
                <h1>Нож Лиса</h1>
            </div>
            <div className="text-[#ABABAB] flex gap-5 justify-between items-center text-[20px]">
                <p>95х18</p>
                <p>Орех, Алюминий</p>
            </div>
            <div className="flex gap-5 justify-between items-center border-b-4 border-[black] pb-2 text-[15px] boxPre">
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
            <div className="bg-[#E8AA31] p-3 mt-5 flex justify-center items-center gap-7 text-[white] rounded-[10px] ">
                <a href="#">В корзину </a>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>

       
        </div>
        <div className="flex gap-5 items-center justify-center mt-[40px]">
            <div className="bg-[#E8AA31] w-[15px] h-[15px] rounded-[50%]"></div>
            <div className="w-[60px] h-[5px] bg-[#E8AA31]"></div>
            <div className="w-[60px] h-[5px] bg-white"></div>
            <div className="w-[60px] h-[5px] bg-white"></div>
            <div className="w-[60px] h-[5px] bg-white"></div>
        </div>
    </div>
  )
}

export default Prodaje