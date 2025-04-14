import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen gap-30 bg-blue-200">
      <Link
        href="/app-ssr?q=app"
        className="flex justify-center items-center w-40 h-40 bg-red-200 text-white text-2xl"
      >
        <span>App Router</span>
      </Link>
      <Link
        href="/page-ssr?q=page"
        className="flex justify-center items-center w-40 h-40 bg-red-200 text-white text-2xl"
      >
        <span>Page Router</span>
      </Link>
    </div>
  );
}
