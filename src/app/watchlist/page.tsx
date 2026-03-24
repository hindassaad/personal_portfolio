import type { Metadata } from "next";
import { shows, currentlyWatching } from "@/data/shows";

export const metadata: Metadata = { title: "watchlist" };

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

export default function Watchlist() {
  const byCategory = shows.reduce<Record<string, typeof shows>>((acc, show) => {
    const cat = show.category ?? "other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(show);
    return acc;
  }, {});

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold mb-4">watchlist</h1>
      <p className="text-[#6e6e6e] text-sm mb-8 leading-relaxed">
        my all-time rankings. s tier means i&apos;d recommend it to anyone, no caveats.
      </p>

      {currentlyWatching.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xs uppercase tracking-widest text-[#6e6e6e] mb-4">currently watching</h2>
          <div className="space-y-10">
            {Object.entries(
              currentlyWatching.reduce<Record<string, typeof currentlyWatching>>((acc, show) => {
                const cat = show.category ?? "other";
                if (!acc[cat]) acc[cat] = [];
                acc[cat].push(show);
                return acc;
              }, {})
            ).map(([category, categoryShows]) => (
              <div key={category}>
                <h3 className="text-xs uppercase tracking-widest text-[#6e6e6e] mb-4">{category}</h3>
                <div className="space-y-6">
                  {categoryShows.map((show) => (
                    <div key={show.title}>
                      <div className="flex items-baseline justify-between mb-0.5">
                        <p className="font-medium text-sm">{show.title}</p>
                        {show.rating && <Stars rating={show.rating} />}
                      </div>
                      {show.note && (
                        <p className="text-sm text-[#6e6e6e] leading-relaxed">{show.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-10">
        {Object.entries(byCategory).map(([category, categoryShows], index) => (
          <div key={category}>
            {index > 0 && (
              <div
                className="mb-10 h-px"
                style={{ background: "linear-gradient(to right, #89c4e1, #e88fa0, #e8c76a, #7ec89a, #b088e0, #e8a87c)" }}
              />
            )}
            <h2 className="text-xs uppercase tracking-widest text-[#6e6e6e] mb-4">{category}</h2>
            <div className="space-y-6">
              {categoryShows.map((show) => (
                <div key={show.title}>
                  <div className="flex items-baseline justify-between mb-0.5">
                    <p className="font-medium text-sm">{show.title}</p>
                    {show.rating && <Stars rating={show.rating} />}
                  </div>
                  {show.note && (
                    <p className="text-sm text-[#6e6e6e] leading-relaxed">{show.note}</p>
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
