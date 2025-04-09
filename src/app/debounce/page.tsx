"use client";

import React from "react";

import { SetStateAction, useEffect, useState } from "react";

interface WikiItem {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

const DebouncePage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<WikiItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (query.length === 0) {
        setResults([]);
        return;
      }

      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${query}`
        );
        const data = await response.json();
        const searchData = await data.query.search;
        // console.log(searchData);

        setResults(searchData);
      } catch (err) {
        console.error(err);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 150);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    console.log("검색 버튼 클릭:", query);
  };
  return (
    <div className="w-full h-screen bg-blue-100 flex justify-center ">
      <div className="flex justify-center w-2/3 h-10 mt-50">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          onChange={handleChange}
          value={query}
          className="w-2/3 px-4 py-2 bg-white rounded-l-2xl outline-none"
        />
        <button
          onClick={handleClick}
          className="px-8 py-2 bg-blue-500 text-white font-bold rounded-r-2xl"
        >
          검색
        </button>
      </div>

      {/* 로딩 드롭다운 */}
      {query.length !== 0 && results.length === 0 && (
        <ul className="absolute top-59 z-10 w-4/9 -translate-x-11 bg-white border border-gray-300 mt-1 rounded-xl shadow-lg h-60 overflow-y-auto">
          loading...
        </ul>
      )}
      {/* 데이터 있는 드롭다운 */}
      {query.length !== 0 && results.length > 0 && (
        <ul className="absolute top-59 z-10 w-4/9 -translate-x-11 bg-white border border-gray-300 mt-1 rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {results.map((search) => (
            <li
              key={search?.pageid}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
              onClick={() => setResults([])}
            >
              {search?.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DebouncePage;
