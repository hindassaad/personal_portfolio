import type { Metadata } from "next";
import { books, currentlyReading } from "@/data/books";

export const metadata: Metadata = { title: "bookshelf" };

const starColors = ["#5ab4d6", "#d95f7a", "#c9a800", "#3aab68", "#9b6fd4"];

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-xs" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < rating ? starColors[i] : "#d4d4d4" }}>
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

export default function Bookshelf() {
  const byCategory = books.reduce<Record<string, typeof books>>((acc, book) => {
    const cat = book.category ?? "other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(book);
    return acc;
  }, {});

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold mb-4">bookshelf</h1>
      <p className="text-[#6e6e6e] text-sm mb-8 leading-relaxed">
        books i&apos;ve read, loosely annotated. sorted by when i read them, most recent first.
      </p>

      {currentlyReading.length > 0 && <div className="mb-10">
        <h2 className="text-xs uppercase tracking-widest text-[#6e6e6e] mb-4">currently reading</h2>
        <div className="space-y-10">
          {Object.entries(
            currentlyReading.reduce<Record<string, typeof currentlyReading>>((acc, book) => {
              const cat = book.category ?? "other";
              if (!acc[cat]) acc[cat] = [];
              acc[cat].push(book);
              return acc;
            }, {})
          ).map(([category, categoryBooks]) => (
            <div key={category}>
              <h3 className="text-xs uppercase tracking-widest text-[#6e6e6e] mb-4">{category}</h3>
              <div className="space-y-6">
                {categoryBooks.map((book) => (
                  <div key={book.title}>
                    <div className="flex items-baseline justify-between mb-0.5">
                      <p className="font-medium text-sm">{book.title}</p>
                      {book.rating && <Stars rating={book.rating} />}
                    </div>
                    <p className="text-xs text-[#6e6e6e] mb-1">{book.author}</p>
                    {book.note && (
                      <p className="text-sm text-[#6e6e6e] leading-relaxed">{book.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>}

      <div className="space-y-10">
        {Object.entries(byCategory).map(([category, categoryBooks], index) => (
          <div key={category}>
            {index > 0 && (
              <div
                className="mb-10 h-px"
                style={{ background: "linear-gradient(to right, #89c4e1, #e88fa0, #e8c76a, #7ec89a, #b088e0, #e8a87c)" }}
              />
            )}
            <h2 className="text-xs uppercase tracking-widest text-[#6e6e6e] mb-4">{category}</h2>
            <div className="space-y-6">
              {categoryBooks.map((book) => (
                <div key={book.title}>
                  <div className="flex items-baseline justify-between mb-0.5">
                    <p className="font-medium text-sm">{book.title}</p>
                    {book.rating && <Stars rating={book.rating} />}
                  </div>
                  <p className="text-xs text-[#6e6e6e] mb-1">{book.author}</p>
                  {book.note && (
                    <p className="text-sm text-[#6e6e6e] leading-relaxed">{book.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
