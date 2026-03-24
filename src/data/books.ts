export type Book = {
  title: string;
  author: string;
  year?: number;
  rating?: number; // 1-5
  note?: string;
  category?: string;
};

export const currentlyReading: Book[] = [];

export const books: Book[] = [
  {
    title: "Code",
    author: "Charles Petzold",
    year: 2023,
    rating: 5,
    note: "The clearest explanation of how hardware actually works that I've come across.",
    category: "tech",
  },
  {
    title: "Looking for Alaska",
    author: "John Green",
    year: 2024,
    rating: 4,
    note: "Less a coming-of-age story, more a meditation on guilt and the people we can't stop thinking about.",
    category: "fiction",
  },
  {
    title: "Conversations with Friends",
    author: "Sally Rooney",
    year: 2024,
    rating: 4,
    note: "Less about what's said than everything that isn't.",
    category: "fiction",
  },
  {
    title: "The Long Walk",
    author: "Stephen King",
    year: 2024,
    rating: 4,
    note: "King wrote this at 18 and it of shows.",
    category: "fiction",
  },
  {
    title: "Freakonomics",
    author: "Steven D. Levitt & Stephen J. Dubner",
    year: 2023,
    rating: 4,
    note: "Teaches you to ask why in directions most people don't bother.",
    category: "nonfiction",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    year: 2023,
    rating: 3,
    note: "The core argument - choose what you care about deliberately - is solid, even if it overstays its welcome.",
    category: "nonfiction",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2023,
    rating: 4,
    note: "The ideaology of becoming someone who achieves goals rather than just aiming to achieve a goal was life-changing for me.",
    category: "nonfiction",
  },
];
