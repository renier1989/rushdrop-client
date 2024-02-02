import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center flex-col md:flex-row">
        <Image
          className="w-32 mb-8 md:mb-0 rotate-180"
          src="logo.svg"
          alt="logo"
          width={32}
          height={32}
        />
        <div className="font-Anton text-6xl">
          <span className="text-sky-800">Rush</span>
          <span className="text-rose-700">Drop</span>
        </div>
      </div>

      <div className="pt-8 md:pt-0">
      <button className="bg-rose-800 text-white">Iniciar Sesion</button>

      </div>

    </header>
  );
};

export default Header;
