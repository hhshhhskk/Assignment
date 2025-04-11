"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination/shadcn-pagination";

interface IPagination {
  page: number;
  limit: number;
  totalCount: number;
}

const Pagination = ({ page, limit, totalCount }: IPagination) => {
  const router = useRouter();
  const totalPage = Math.ceil(totalCount / limit);

  const goToPage = (pageNum: number) => {
    router.push(`?page=${pageNum}`);
  };

  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => goToPage(page > 1 ? page - 1 : 1)}
            className="cursor-pointer"
          />
        </PaginationItem>

        {[...Array(totalPage)].map((_, i) => {
          const currentPage = i + 1;
          return (
            <PaginationItem key={currentPage}>
              <PaginationLink
                onClick={() => goToPage(currentPage)}
                isActive={currentPage === page}
                className="cursor-pointer"
              >
                {currentPage}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            onClick={() => goToPage(page < totalPage ? page + 1 : totalPage)}
            className="cursor-pointer"
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
};

export default Pagination;
