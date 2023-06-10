import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src={"./22330581.jpeg"}
          alt="this image show syed mohammad hussain naqvi face"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-xl">
            Hi I&apos;m <span className="font-bold">Mohammad Hussain</span>
          </p>
          <Link
            className="text-black bg-white px-2 rounded hover:bg-white-100"
            href={"/about"}
          >
            let know more about me
          </Link>
        </div>
      </div>
    </main>
  );
}
