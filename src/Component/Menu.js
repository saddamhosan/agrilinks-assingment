import { TbLanguage } from "react-icons/tb";
const Menu = () => {
  return (
    <div className="flex justify-between h-[50px] bg-gradient-to-b from-[#6202ee] to-[rgba(98,2,238,.5)] text-white font-bold px-3">
      <h1> </h1>
      <h1 className="text-2xl flex items-center">Profile</h1>
      <h1 className="text-3xl flex items-center">
        <TbLanguage />
      </h1>
    </div>
  );
};

export default Menu;
