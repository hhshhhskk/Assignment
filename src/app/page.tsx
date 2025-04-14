import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-200">
      <div className="w-1/2 h-40 flex justify-between">
        <Link
          href={"/app-router/ssr"}
          className="cursor-pointer w-40 py-14 bg-red-600 text-white text-center text-4xl"
        >
          SSR
        </Link>
        <Link
          href={"/app-router/ssg"}
          className="cursor-pointer w-40 py-14 bg-blue-600 text-white text-center text-4xl"
        >
          SSG
        </Link>
        <Link
          href={"/app-router/isr"}
          className="cursor-pointer w-40 py-14 bg-green-600 text-white text-center text-4xl"
        >
          ISR
        </Link>
      </div>
    </div>
  );
}
