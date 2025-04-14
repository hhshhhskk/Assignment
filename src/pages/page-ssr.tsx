import { GetServerSideProps } from "next";

interface MySSRPageProps {
  q: string;
}

export default function MySSRPage({ q }: MySSRPageProps) {
  return (
    <div>
      <h1>Page Router SSR 페이지</h1>
      <p>서버에서 온 메세지: {q}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<MySSRPageProps> = async (
  context
) => {
  const { query } = context;

  const q = typeof query.q === "string" ? query.q : "";

  return {
    props: {
      q,
    },
  };
};
