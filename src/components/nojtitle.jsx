import { belgi, bigcar, chart, galochka, noj } from "../images/img"

const Nojtitle = () => {
    
    return (
       <div className="">
            <div className="sm:flex block  items-center ">

            <div className="title flex flex-col gap-5 items-start" >
               <div className="hedi text-[30px]">
                    <h1>Интернет магазин сертифицированных  </h1>
                    <h2>златоустовских ножей</h2>
               </div>

                <div className="paragrapg text-[#6b7280]">
                    <p>Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине </p>
                    <p className="max-w-[680px]">представлен наиболее широкий выбор Златоустовских ножей от Златоустовских Оружейных Фабрик и компаний, мы являемся официальными поставщиками.</p>
                </div>

                <div className="flex flex-col gap-[60px]">
                    <button className=" bg-[#E8AA31] py-[12px] px-[40px] rounded-[10px] shadow-[]">
                        <a href="#">Подробнее</a>
                    </button>
                    <div className="sm:block hidden">
                        <div className="flex gap-5 items-center ">
                            <div className="bg-[#E8AA31] w-[15px] h-[15px] rounded-[50%]"></div>
                            <div className="w-[60px] h-[2px] bg-[#E8AA31]"></div>
                            <div className="w-[60px] h-[2px] bg-white"></div>
                            <div className="w-[60px] h-[2px] bg-white"></div>
                            <div className="w-[60px] h-[2px] bg-white"></div>
                            <h2 className="text-[#E8AA31] text-[30px]"> 01 <span className="text-white">/4</span></h2>
                        </div>
                    </div>
                </div>
            </div>
                <div className="nojImg w-full  ">
                    <img src={noj} alt="" />
                </div>
            </div>



            <div className=" sm:flex sm:gap-[0px] gap-[100px] block justify-between pt-[100px]">
                
                <div className="galochka flex flex-col justify-center items-center ">
                    <img src={galochka} alt="" />
                    <h1 className="text-center">Гарантия 100% возврата <br /> денежных средств</h1>
                </div>

                <div className="galochka flex flex-col justify-center items-center sm:pt-[0px] pt-[70px]">
                    <img src={bigcar} alt="" />
                    <h1 className="text-center">Доставка по России, <br /> Казахстану и Белоруссии</h1>
                </div>

                <div className="galochka flex flex-col justify-center items-center sm:pt-[0px] pt-[70px]">
                    <img src={chart} alt="" />
                    <h1 className="text-center">Возможность оформление <br />заказа без регистрации.</h1>
                </div>

                <div className="galochka flex flex-col justify-center items-center sm:pt-[0] pt-[70px]">
                    <img src={belgi} alt="" />
                    <h1 className="text-center">Скидки постоянным <br />покупателям. </h1>
                </div>
            </div>
       </div> 
    )
  }
  
  export default Nojtitle