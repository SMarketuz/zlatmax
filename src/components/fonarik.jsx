import { fona1, fonar2 } from "../images/img"

const Fonarik = () => {
  return (
    <div>

        <div className="sm:flex block justify-between">

            <div className="bg-[#fff] p-[40px]">
                <div className="sm:flex block">
                <div className="">
                    <h1 className=" border-b-[5px] border-[#E8AA31] w-[200px] p-[10px]">Тактические фонари</h1>
                    <p>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.</p>
                    <button className="pt-[20px]">
                        <a href="#" className="bg-[#E8AA31] py-[5px] px-[30px]">Подробнее</a>
                    </button>
                </div>
                    <img src={fona1} alt="" className="w-[200px]" />
                </div>
            </div>

            <div className="bg-[#fff] p-[40px] sm:mt-[0px] mt-[20px] ">
                <div className="sm:flex block">
                <div className="">
                    <h1 className=" border-b-[5px] border-[#E8AA31] w-[200px] p-[10px]">Тактические фонари</h1>
                    <p>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.</p>
                    <button className="pt-[20px]">
                        <a href="#" className="bg-[#E8AA31] py-[5px] px-[30px]">Подробнее</a>
                    </button>
                </div>
                    <img src={fonar2} alt="" className="w-[200px]" />
                </div>
            </div>


            
        </div>















    </div>
  )
}

export default Fonarik