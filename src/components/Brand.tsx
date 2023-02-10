import Link from "next/link";
import Image from "next/image";

function Brand() {
  return (
    <Link href="/">
      <div className="flex w-auto items-center justify-between">
        <Image
          src="/logo.png"
          alt="logo"
          className="object-cover "
          width={100}
          height={100}
        />
        <h1 className="font-pacifico text-4xl not-italic leading-[7rem] text-black/80 md:text-5xl lg:text-6xl">
          Infinity
        </h1>
      </div>
    </Link>
  );
}
export default Brand;
