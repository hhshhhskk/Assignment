export default async function AppSSRPage({
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { q } = await searchParams;

  return (
    <div>
      <h1>App Router SSR 페이지</h1>
      <p>서버에서 읽은 query: {q}</p>
    </div>
  );
}
