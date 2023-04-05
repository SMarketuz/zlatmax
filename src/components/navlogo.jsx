import { logo } from "../images/img"

const NavLogo = () => {
    
    return (
      <div className=" flex flex-1 justify-between items-center">
        <div className="">
            <img src={logo} alt="" />
        </div>

        <div className="sm:block hidden">
            <i class="fa-solid fa-magnifying-glass "></i>
            <input type="text" className={`border-[2px] border-black rounded-[10px] `} placeholder="Поиск"/>
        </div>

        <div className="loc sm:block hidden">
        <div className="location flex items-center gap-3 s">
            <i class="fa-solid fa-location-dot " ></i>
            <p>Москва</p>
        </div>
        </div>

        <div  className="call sm:block hidden">

            <div className="phnum flex items-center gap-2">
                <p>8-800-777-49-67</p>
                <i class="fa-solid fa-chevron-down text-[#E8AA31]"></i>
            </div>

                <p className="text-[#E8AA31]">Заказать звонок</p>
        </div>

        <div className="heart sm:block hidden">
            <i class="fa-regular fa-heart text-[28px]"  id="heart"></i>
        </div>

        <div className="marketCkeck sm:block hidden ">
           <div className="marketTitle flex items-center gap-4">
                <i class="fa-solid fa-cart-shopping text-[28px] "></i>
                <div className="postNum">
                    <p className="absalute -top-2 text-[#d97706]">0 p</p>
                    <p>Оформить заказ</p>
                </div>
           </div>
        </div>

      </div>
    )
  }
  
  export default NavLogo