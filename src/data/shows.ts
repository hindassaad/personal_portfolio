export type Show = {
  title: string;
  rating?: number; // 1-5
  note?: string;
  category?: string;
};

export const currentlyWatching: Show[] = [];

export const shows: Show[] = [
  {
    title: "Pluribus",
    category: "s tier",
    rating: 5,
    note: "Can't stop thinking about it.",
  },
  {
    title: "Better Call Saul",
    category: "s tier",
    rating: 5,
    note: "Better than Breaking Bad. A slow burn - Kim Wexler is my favourite character of all time.",
  },
  {
    title: "Breaking Bad",
    category: "s tier",
    rating: 5,
    note: "10/10 - no notes.",
  },
  {
    title: "Game of Thrones",
    category: "s tier",
    rating: 5,
    note: "I skipped a lot of dialogue but the overall arc and storybuilding is exquisite.",
  },
  {
    title: "The Pitt",
    category: "s tier",
    rating: 5,
    note: "Absolutely adore how they skip out on the drama and relationships between the characters, and just focus on the ER.",
  },
  {
    title: "House of the Dragon",
    category: "s tier",
    rating: 5,
    note: "The Targaryens are more compelling than the Starks ever were.",
  },
  {
    title: "Ozark",
    category: "s tier",
    rating: 5,
    note: "Every character is making the worst possible decision for completely understandable reasons.",
  },
  {
    title: "Severance",
    category: "s tier",
    rating: 5,
    note: "I LOVE THIS SHOW.",
  },
  {
    title: "Vikings",
    category: "s tier",
    rating: 5,
    note: "Watched some of this with my parents. Enjoyed it thoroughly.",
  },
  {
    title: "All Her Fault",
    category: "s tier",
    rating: 5,
    note: "Finished this in 2 days.",
  },
  {
    title: "Black Mirror",
    category: "s tier",
    rating: 5,
    note: "Shut Up and Dance.",
  },
  {
    title: "The Handmaid's Tale",
    category: "s tier",
    rating: 5,
    note: "Seasons 1 and 2 only. The constant close-up reaction shots of June in the following seasons ruined it for me.",
  },
  {
    title: "Bridgerton",
    category: "honourable mentions",
    rating: 3,
    note: "Not S-tier, but a good watch - can be boring.",
  },
  {
    title: "Criminal Minds",
    category: "honourable mentions",
    rating: 4,
    note: "My gulty pleasure but hard to stream in Canada.",
  },
  {
    title: "The Wire",
    category: "planning to watch",
    note: "If I'm not wrong, this is widely regarded as one of the best TV shows of all time.",
  },
  {
    title: "Dark",
    category: "planning to watch",
    note: "Supposedly the most intricate plot in TV history.",
  },
  {
    title: "The Lincoln Lawyer",
    category: "planning to watch",
    note: "My dream car growing up was a Lincoln.",
  },
];
