"use client";

import React from "react";
import Pagination from "../../components/ui/pagination/pagination";
import { parseAsInteger, useQueryState } from "nuqs";

const BoardPage = () => {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-100">
      <div className="flex flex-col justify-center items-center gap-32 w-1/2 h-1/2">
        <div className="text-6xl font-bold">현재 페이지: {page}</div>
        <Pagination page={page} setPage={setPage} limit={3} totalCount={31} />
      </div>
    </div>
  );
};

export default BoardPage;
