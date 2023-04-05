import { stati1, stati2, stati3, stati4 } from "../images/img"

const Stati = () => {
  return (
    <div>
        <div className="">
            <h1 className="text-[20px]">Наши статьи</h1>

            <div className=" sm:flex justify-between block">

                <div className="bg-[#fff] p-[20px] "> 
                    <img src={stati1} alt="" className="w-[250px]" />
                    <h1>Все о ножах: как правильно <br /> выбрать</h1>
                    <p className="text-[#999]">24.07.2019</p>
                </div>

                <div className="bg-[#fff] p-[20px] sm:mt-0 mt-[20px]"> 
                    <img src={stati2} alt="" className="w-[250px]" />
                    <h1>Все о ножах: как правильно <br /> выбрать</h1>
                    <p className="text-[#999]">24.07.2019</p>
                </div>

                <div className="bg-[#fff] p-[20px] sm:mt-0 mt-[20px]"> 
                    <img src={stati3} alt="" className="w-[250px]" />
                    <h1>Все о ножах: как правильно <br /> выбрать</h1>
                    <p className="text-[#999]">24.07.2019</p>
                </div>

                <div className="bg-[#fff] p-[20px] sm:mt-0 mt-[20px]"> 
                    <img src={stati4} alt="" className="w-[250px]" />
                    <h1>Все о ножах: как правильно <br /> выбрать</h1>
                    <p className="text-[#999]">24.07.2019</p>
                </div>

            </div>









        </div>









    </div>
  )
}

export default Stati