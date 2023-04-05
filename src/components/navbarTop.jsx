const NavbarTop = () => {
    
  return (
    <div className="">
        <div className="flex justify-between items-center ">
            <ul className="sm:flex gap-[40px] hidden">
                <li><a href="#">О нас</a></li>
                <li><a href="#">Оплата и доставка</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>


            <div className=" sm:block   hidden"> 
                <a href="#" className="pr-[20px]">Личный кабинет</a>
                <i class="fa-solid fa-user"></i>
            </div>

            <div className="hideIcons flex flex-1 gap-[30px] items-center justify-between  sm:hidden block text-[20px] ">
                <i class="fa-solid fa-phone"></i>
                <i class="fa-solid fa-user"></i>
                <i class="fa-regular fa-heart" id="heart"></i>

                <div className="ckeckNum flex items-center relative">
                    <i class="fa-solid fa-cart-shopping "></i>
                    <p className="absalute -top-2 text-[#d97706]">0</p>
                </div>
                <i class="fa-solid fa-bars"></i>
            </div>

        </div>
    </div>
  )
}

export default NavbarTop