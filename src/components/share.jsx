
const Share = () => {
  return (
    <div className="">
        <div className="sm:flex block justify-around border-b-[2px] pb-5 ">
            <div className=" leading-10">
                <h1>Ножевые стали </h1>
                <ul className="text-[#999]">
                    <li className="hover:text-[red]"><a href="#">Златоустовские ножи <br />в Москве и Московской <br/> области</a></li>
                    <li className="hover:text-[red]"><a href="#">Ножевые стали</a></li>
                    <li className="hover:text-[red]"><a href="#">О нас</a></li>
                    <li className="hover:text-[red]"><a href="#">Условия оплаты <br />и доставки</a></li>
                    <li className="hover:text-[red]"><a href="#">Политика <br />конфиденциальности</a></li>
                </ul>
            </div>

            <div className="leading-10">
                <h1>СЛУЖБА ПОДДЕРЖКИ</h1>
                <ul className="text-[#999]">
                    <li className="hover:text-[red]"><a href="#">Контактная информация</a></li>
                    <li className="hover:text-[red]"><a href="#">Возврат товара</a></li>
                    <li className="hover:text-[red]"><a href="#">Карта сайта</a></li>
                </ul>
            </div>

            <div className="leading-10">
                <h1>ДОПОЛНИТЕЛЬНО</h1>
                <ul className="text-[#999]">
                    <li className="hover:text-[red]"><a href="#">Подарочные сертификаты</a></li>
                    <li className="hover:text-[red]"><a href="#">Партнеры</a></li>
                    <li className="hover:text-[red]"><a href="#">Товары со скидкой</a></li>
                </ul>
            </div>

            <div className="leading-10">
                <h1>ЛИЧНЫЙ КАБИНЕТ</h1>
                <ul className="text-[#999] ">
                    <li className="hover:text-[red]"><a href="#">Личный кабинет</a></li>
                    <li className="hover:text-[red]"><a href="#">История заказов</a></li>
                    <li className="hover:text-[red]"><a href="#">Мои закладки</a></li>
                    <li className="hover:text-[red]"><a href="#">Рассылка новостей</a></li>
                </ul>
            </div>
        </div>

        <div className="sm:flex block justify-around pt-10 items-start border-b-[2px] pb-5">
            <div className="c leading-10">
                <h1> КОНТАКТЫ</h1>

                <div className="flex items-center gap-2">
                    <i class="fa-solid fa-phone"></i>
                    <p>8 (800) 777-49-67</p>
                </div>
                <div className="flex items-center gap-2">
                    <i class="fa-solid fa-clock"></i>
                    <p>Пн-Пт 7:00 - 16:00 (МСК)</p>
                </div>
                <div className="flex items-center gap-2">
                    <i class="fa-solid fa-location-dot"></i>    
                    <p>Златоуст, ул. Шоссейная,д. 1, офис «6Б»</p>
                </div>
                <div className="flex items-center gap-2">
                    <i class="fa-solid fa-envelope"></i>
                    <p>info@zlatmax.ru</p>
                </div>
                <div className="flex items-center gap-5 text-[30px]">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-solid fa-phone-volume"></i>
                    <i class="fa-brands fa-telegram"></i>
                    <i class="fa-brands fa-square-whatsapp"></i>
                </div>
            </div>

            <div className="s leading-10">
                <h1>ПОЛЕЗНЫЕ ССЫЛКИ</h1>
                <ul className="text-[#999]">
                    <li><a href="#">Способы оплаты и доставки</a></li>
                </ul>
            </div>

            <div className="g leading-10">
                <h1>НАША ГАРАНТИЯ</h1>
                <ul className="text-[#999]">
                    <li><a href="#">Недовольны своей покупкой? <br /> Вы можете вернуть ее в течении <br /> 30 дней с даты получения, <br /> согласно <span className="text-[#E8AA31]">нашим правилам</span></a></li>
                </ul>
            </div>

            <div className="n leading-10">
                <h1> НОВОСТНАЯ РАССЫЛКА</h1> 
                <ul>
                    <li><a href="#">Подпишитесь прямо сейчас!</a></li>
                </ul>

                <div className="flex items-center">
                    <input type="email" placeholder="example@gmail.com" className="p-[9px] bg-[#333] " />
                    <i class="fa-sharp fa-solid fa-angle-right text-[20px] bg-[#E8AA31] p-[18px]"></i>
                </div>

                <div className="flex gap-5 ">
                    <input type="checkbox" className="w-[20px]" />
                    <p>Я прочитал Условия соглашения и <br /> согласен с условиями </p>
                </div>
            </div>
        </div>

        <div className="sm:flex block justify-around items-center pt-10">
            <div className="">
                <p className="max-w-[600px] text-[13px]">Все материалы, размещенные на сайте, носят справочный характер и не являются публичной офертой, определяемойположениями Статьи 437 Гражданского кодекса Российской Федерации. При копировании материалов гиперссылка на www.zlatmax.ru обязательна!</p>
            </div>
            
            <div>
                <p>Златоустовские ножи www.zlatmax.ru ©</p>
            </div>
        </div>



    </div>
  )
}

export default Share