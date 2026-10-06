import bcrypt from "bcrypt";
import { prisma } from "../src/lib/prisma.js";

const SALT_ROUNDS = 12;

const titles = [
  {
    name: "Stranger Things",
    genre: "Sci-Fi",
    description:
      "A group of friends uncover mysterious events and a hidden world.",
    duration: 3600,
  },
  {
    name: "Dark",
    genre: "Sci-Fi",
    description:
      "A mystery involving time travel and interconnected families.",
    duration: 3600,
  },
  {
    name: "Interstellar",
    genre: "Sci-Fi",
    description:
      "Explorers travel beyond Earth in search of a new home.",
    duration: 5400,
  },
  {
    name: "The Matrix",
    genre: "Sci-Fi",
    description:
      "A hacker discovers that reality is not what it seems.",
    duration: 8100,
  },
  {
    name: "Dune",
    genre: "Sci-Fi",
    description:
      "A young heir becomes involved in a conflict over a desert planet.",
    duration: 9300,
  },
  {
    name: "Arrival",
    genre: "Sci-Fi",
    description:
      "A linguist works to communicate with mysterious visitors from another world.",
    duration: 6900,
  },
  {
    name: "Blade Runner 2049",
    genre: "Sci-Fi",
    description:
      "A detective uncovers a secret that could change the future of humanity.",
    duration: 9900,
  },
  {
    name: "The Conjuring",
    genre: "Horror",
    description:
      "A family experiences terrifying supernatural events.",
    duration: 6600,
  },
  {
    name: "Insidious",
    genre: "Horror",
    description:
      "A family battles a supernatural force affecting their child.",
    duration: 6000,
  },
  {
    name: "Breaking Bad",
    genre: "Crime",
    description:
      "A chemistry teacher enters the dangerous world of crime.",
    duration: 3000,
  },
  {
    name: "Narcos",
    genre: "Crime",
    description:
      "The rise and fall of powerful drug cartels.",
    duration: 3600,
  },
  {
    name: "The Office",
    genre: "Comedy",
    description:
      "A group of coworkers navigate everyday office life.",
    duration: 1800,
  },
  {
    name: "Friends",
    genre: "Comedy",
    description:
      "Six friends navigate relationships and life together.",
    duration: 1500,
  },
];

const ensureTitle = async (
  input: (typeof titles)[number],
) => {
  const existing = await prisma.title.findFirst({
    where: {
      name: input.name,
    },
  });

  if (existing) {
    return existing;
  }

  return prisma.title.create({
    data: {
      name: input.name,
      genre: input.genre,
      description: input.description,
      duration: input.duration,
      isActive: true,
    },
  });
};

const ensureUser = async (
  name: string,
  email: string,
) => {
  const existing = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existing) {
    return existing;
  }

  const passwordHash = await bcrypt.hash(
    "Password123!",
    SALT_ROUNDS,
  );

  return prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
    },
  });
};

const ensureInteraction = async (
  userId: string,
  titleId: string,
  type:
    | "VIEW"
    | "LIKE"
    | "DISLIKE"
    | "COMPLETE"
    | "SKIP"
    | "WATCH",
) => {
  const existing =
    await prisma.interaction.findFirst({
      where: {
        userId,
        titleId,
        type,
      },
    });

  if (existing) {
    return existing;
  }

  return prisma.interaction.create({
    data: {
      userId,
      titleId,
      type,
    },
  });
};

const main = async () => {
  console.log(
    "🌱 Seeding recommendation demo data...",
  );

  const seededTitles = new Map<
    string,
    Awaited<ReturnType<typeof ensureTitle>>
  >();

  for (const titleData of titles) {
    const title = await ensureTitle(titleData);

    seededTitles.set(
      titleData.name,
      title,
    );
  }

  const user1 = await ensureUser(
    "Recommendation User One",
    "recommendation1@test.com",
  );

  const user2 = await ensureUser(
    "Recommendation User Two",
    "recommendation2@test.com",
  );

  const user3 = await ensureUser(
    "Recommendation User Three",
    "recommendation3@test.com",
  );

  const title = (name: string) => {
    const result = seededTitles.get(name);

    if (!result) {
      throw new Error(
        `Seeded title not found: ${name}`,
      );
    }

    return result;
  };

  /*
   * --------------------------------------------------
   * USER 1
   * Strong Sci-Fi preference
   * --------------------------------------------------
   */

  await ensureInteraction(
    user1.id,
    title("Dark").id,
    "COMPLETE",
  );

  await ensureInteraction(
    user1.id,
    title("Dark").id,
    "LIKE",
  );

  await ensureInteraction(
    user1.id,
    title("Interstellar").id,
    "WATCH",
  );

  await ensureInteraction(
    user1.id,
    title("Dune").id,
    "LIKE",
  );

  await ensureInteraction(
    user1.id,
    title("Arrival").id,
    "COMPLETE",
  );

  /*
   * --------------------------------------------------
   * USER 2
   * Shares interests with User 1
   * --------------------------------------------------
   */

  await ensureInteraction(
    user2.id,
    title("Dark").id,
    "LIKE",
  );

  await ensureInteraction(
    user2.id,
    title("Interstellar").id,
    "COMPLETE",
  );

  await ensureInteraction(
    user2.id,
    title("The Matrix").id,
    "LIKE",
  );

  await ensureInteraction(
    user2.id,
    title("Stranger Things").id,
    "WATCH",
  );

  /*
   * --------------------------------------------------
   * USER 3
   * Mixed preference + Sci-Fi overlap
   * --------------------------------------------------
   */

  await ensureInteraction(
    user3.id,
    title("The Conjuring").id,
    "LIKE",
  );

  await ensureInteraction(
    user3.id,
    title("Insidious").id,
    "COMPLETE",
  );

  await ensureInteraction(
    user3.id,
    title("Breaking Bad").id,
    "WATCH",
  );

  await ensureInteraction(
    user3.id,
    title("Dune").id,
    "LIKE",
  );

  await ensureInteraction(
    user3.id,
    title("Blade Runner 2049").id,
    "COMPLETE",
  );

  console.log(
    `✅ Seeded ${seededTitles.size} recommendation titles`,
  );

  console.log(
    "✅ Seeded recommendation interaction dataset",
  );

  console.log(
    "👤 Demo users:",
  );

  console.log(
    "   recommendation1@test.com",
  );

  console.log(
    "   recommendation2@test.com",
  );

  console.log(
    "   recommendation3@test.com",
  );

  console.log(
    "🔑 Demo password: Password123!",
  );
};

main()
  .catch((error) => {
    console.error(
      "❌ Recommendation seed failed:",
      error,
    );

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });