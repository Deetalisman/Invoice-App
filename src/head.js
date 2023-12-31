import Logo from "./img/logo.svg";
import moon from "./img/icon-moon.svg";
import sun from "./img/icon-sun.svg";
import man from "./img/image-avatar.jpg";
function Head({ isDark, setIsDark }) {
  function handledark() {
    setIsDark((isDark) => !isDark);
    console.log(isDark);
    isDark && dark();
    !isDark && light();
  }
  function dark() {
    document.body.style.backgroundColor = "white";
  }
  function light() {
    document.body.style.backgroundColor = "#0f172a";
  }
  return (
    <div
      id="head"
      className="bg-slate-600 flex z-10 justify-between  lg:w-25 lg:flex lg:flex-col lg:mr-10 lg:justify-between lg:absolute lg:h-full "
    >
      <div className=" h-15 bg-purple-500 p-7 rounded-r-3xl lg:p-4 lg:h-18 lg:pl-6">
        <img
          src={Logo}
          alt="man"
          className="w-9 lg:w-25 lg:h-10 cursor-pointer"
        />
      </div>
      <div className="flex lg:block lg:justify-end lg:items-end">
        <div className="border-r-2 border-gray-300 cursor-pointer  lg:border-b-2 lg:pb-5 lg:border-r-0">
          <img
            src={!isDark ? sun : moon}
            alt="man"
            className="w-8 h-8 mr-6 mt-7 cursor-pointer lg:ml-7"
            onClick={handledark}
          />
        </div>
        <img
          src={man}
          alt="man"
          className="rounded-full w-15 h-16 ml-5 p-3 mt-3 lg:ml-3"
        />
      </div>
    </div>
  );
}

export default Head;
