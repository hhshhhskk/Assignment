export default async function AppSSRPage({
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { q, fruit } = await searchParams;
  const search_query = typeof q === "string" ? q : "";
  const fruitList = Array.isArray(fruit) ? fruit : fruit ? [fruit] : [];

  return (
    <div>
      <h1>App Router SSR 페이지</h1>
      <p>서버에서 읽은 query: {search_query}</p>
      {fruitList.map((fruit, idx) => (
        <p key={fruit}>
          서버에서 읽은 fruit 배열 {idx + 1} : {fruit}
        </p>
      ))}
    </div>
  );
}
