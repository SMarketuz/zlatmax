import { knif1, knif2, knif3, knif4, knif5, knif6 } from "../images/img";

const Nojey = () => {
  return (
    <div className=" ">
      <div className="sm:flex justify-center items-center sm:pt-[0] pt-[20px] block  gap-10">
        <div className="box1 bg-[white] p-[30px] flex sm:mt-[0] mt-[20px]   h-[293px] ">
          <div className="flex-col gap-[20px]">
            <h1 className="border-b-[2px] border-[#E8AA31] w-[200px] pb-3 text-[24px]"> Каталог ножей</h1>
            <ul className="text-[20px]">
              <li className="list-disc">Разделочные </li>
              <li className="list-disc">Туристические </li>
              <li className="list-disc">Охотничьи </li>
            </ul>
          </div>

          <div className="">
            <img src={knif1} alt="" className="w-[400px]" />
          </div>
        </div>

        <div className="box1 bg-[white] p-[30px] flex h-[293px] sm:mt-[0] mt-[20px] relative">
          <div className="">
            <h1 className="border-b-[2px] border-[#E8AA31] w-[200px] pb-3 text-[24px]">
            Среднеклинковое оружие
            </h1>
            <ul className="text-[20px]">
              <li className="list-disc">Разделочные </li>
              <li className="list-disc">Туристические </li>
              <li className="list-disc">Охотничьи </li>
            </ul>
          </div>

          <div className="">
            <img src={knif2} alt="" className="w-[400px]"/>
          </div>
        </div>

        <div className="box1 bg-[white] p-[30px] flex  h-[293px] sm:mt-[0] mt-[20px] relative ">
          <div className="">
            <h1 className="border-b-[2px] border-[#E8AA31] w-[200px] pb-3 text-[24px] ">
              Длинноклинковое оружие
            </h1>
            <ul className="text-[20px]">
              <li className="list-disc">Разделочные </li>
              <li className="list-disc">Туристические </li>
              <li className="list-disc">Охотничьи </li>
            </ul>
          </div>

          <div className="">
            <img src={knif3} alt=""className="w-[400px]" />
          </div>
        </div>
      </div>
      <div className="sm:flex justify-center items-center sm:pt-[0] pt-[20px] block  gap-10 mt-[30px]">
        <div className="box1 bg-[white] p-[30px] flex sm:mt-[0] mt-[20px]   h-[293px] ">
          <div className="flex-col gap-[20px]">
            <h1 className="border-b-[2px] border-[#E8AA31] w-[200px] pb-3 text-[24px]"> Сувенирные изделия</h1>
            <ul className="text-[20px]">
              <li className="list-disc">Разделочные </li>
              <li className="list-disc">Туристические </li>
              <li className="list-disc">Охотничьи </li>
            </ul>
          </div>

          <div className="">
            <img src={knif4} alt="" className="w-[400px]" />
          </div>
        </div>

        <div className="box1 bg-[white] p-[30px] flex h-[293px] sm:mt-[0] mt-[20px] relative">
          <div className="">
            <h1 className="border-b-[2px] border-[#E8AA31] w-[200px] pb-3 text-[24px]">
            Сопутствующие товары
            </h1>
            <ul className="text-[20px]">
              <li className="list-disc">Разделочные </li>
              <li className="list-disc">Туристические </li>
              <li className="list-disc">Охотничьи </li>
            </ul>
          </div>

          <div className="">
            <img src={knif5} alt="" className="w-[400px]"/>
          </div>
        </div>

        <div className="box1 bg-[white] p-[30px] flex  h-[293px] sm:mt-[0] mt-[20px] relative ">
          <div className="">
            <h1 className="border-b-[2px] border-[#E8AA31] w-[200px] pb-3 text-[24px] ">
            Ножевая мастерская
            </h1>
            <ul className="text-[20px]">
              <li className="list-disc">Разделочные </li>
              <li className="list-disc">Туристические </li>
              <li className="list-disc">Охотничьи </li>
            </ul>
          </div>

          <div className="">
            <img src={knif6} alt=""className="w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nojey;
