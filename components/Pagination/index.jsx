"use client";
export default function Pagination({
  activePage = 0,
  totalPages = 10,
  onClick = () => {},
}) {
  return (
    <div className="mt-8 flex justify-center space-x-4">
      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx}
          onClick={() => onClick(idx + 1)}
          className={`px-4 py-2 border rounded-3xl ${
            activePage === idx + 1 ? "bg-gray-300" : "bg-none"
          }  text-black font-bold`}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
}
