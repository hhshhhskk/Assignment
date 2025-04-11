import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-100">
      <Link
        className="p-9 bg-red-200 text-white text-2xl font-bold"
        href={`/board?page=1`}
      >
        게시판 가기
      </Link>
    </div>
  );
}
