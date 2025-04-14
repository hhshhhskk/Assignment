import React from "react";

interface BoardDetailPageProps {
  params: { id: string };
}

const BoardDetailPage = ({ params }: BoardDetailPageProps) => {
  return <div>BoardPage {params.id} 입니다</div>;
};

export default BoardDetailPage;
