import { GetServerSideProps } from "next";

interface MySSRPageProps {
  message: string;
}

export default function MySSRPage({ message }: MySSRPageProps) {
  return (
    <div>
      <h1>Page Router SSR 페이지</h1>
      <p>서버에서 온 메세지: {message}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  MySSRPageProps
> = async () => {
  return {
    props: {
      message: "서버에서 날아온 메세지입니다.",
    },
  };
};
