import { Aksi, Fonar, Fonarik, Footbg, NavLogo, New, Nojey, NojTitle, Prodaje, Share, TopSection,} from "./components/comp"
import NavbarTop from "./components/navbarTop"
import Stati from "./components/stati"

const App = () => {
  return (
    <div className="w-full">

      <div className="bg-[#141414] text-white w-full  p-[30px]">
        <NavbarTop />
      </div>

      <div className="bg-white text-black p-[30px] w-full">
        <NavLogo />
      </div>

      <div className="bg-black text-white p-[30px] w-full sm:block hidden">
        <TopSection />
      </div>

      <div className="bg-[#0f172a] text-white p-[30px] sm:h-[100%] h-[100%]">
        <NojTitle />
      </div>

      <div className="w-full bg-[#E5E5E5] text-black h-[100%] sm:p-[100px] p-[30px] ">
        <Nojey />
      </div>

      <div className="w-full bg-[#E5E5E5] h-[100%] text-black sm:p-[50px] p-[30px]">
        <Prodaje />
      </div>

      <div className=" text-white bg-[#E5E5E5] w-full h-[100%]">
        <New />
      </div>

      <div className="bg-[#E5E5E5] w-full h-[100vh] text-[#000 ] sm:p-[60px] p-[30px]">
        <Aksi />
      </div>
      
      <div className="bg-[#E5E5E5] text-[black] sm:p-[50px] p-[30px] sm:mt-0 mt-[1500px] h-[100%]">
        <Stati />
      </div>

      <div className="bg-[#E5E5E5] text-black sm:p-[50px] p-[30px] sm:mt-0 mt-[px] h-[100%]"> 
        <Fonarik />
      </div>

      <div className="bg-[#E5E5E5] text-black sm:p-[50px] p-[30px]sm:p-[50px] p-[30px] ">
        <Fonar /> 
      </div>

      <div className="text-white  w-full sm:h-[50vh] h-[100vh ] ">
        <Footbg />
      </div>

      <div className="bg-[#141414] text-[white] sm:p-[50px] p-[30px] h-[100vh ]">
        <Share />
      </div>
    </div>
  )
}

export default App