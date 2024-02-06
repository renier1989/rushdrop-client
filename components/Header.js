import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { cerrarSesion, usuario } = useAuth();
  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <Link href="/" className="flex items-center flex-col md:flex-row">
        <Image
          className="w-32 mb-8 md:mb-0 rotate-180"
          src="/logo.svg"
          alt="logo"
          width={32}
          height={32}
        />
        <div className="font-Anton text-6xl">
          <span className="text-sky-800">Rush</span>
          <span className="text-rose-700">Drop</span>
        </div>
      </Link>

      <div className="pt-8 md:pt-0 flex flex-col md:flex-row gap-2 ">
        {usuario ? (
          <div className="flex items-center gap-3">
          <p>Hola {usuario.nombre}</p>
          <button 
          onClick={()=>cerrarSesion()}  
          className="bg-sky-800 text-white px-4 py-1 rounded-md uppercase font-bold" type="button">Cerrar Sesión</button>
          </div>
        ) : (
          <>
            <Link
              className="bg-rose-600 text-white px-4 py-1 rounded-md uppercase font-bold"
              href="/login"
            >
              Iniciar Sesion
            </Link>
            <Link
              className="bg-sky-800 text-white px-4 py-1 rounded-md uppercase font-bold"
              href="/registrate"
            >
              Registrate
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
