import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-2xl font-bold ">
        Hello Welcome to the Hourss HR managemnet
      </h1>
      <Link href={"/login"}> Login</Link>
    </div>
  );
}
