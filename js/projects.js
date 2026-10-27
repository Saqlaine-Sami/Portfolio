// All project data lives here. Edit this file to change any project's details.
const PROJECTS = [
  {
    id: "fitlog",
    name: "FitLog – Workout Library",
    image: "assets/fitlog-1.jpg",
    gallery: ["assets/fitlog-2.jpg", "assets/fitlog-3.jpg"],
    short: "A dark-theme gym companion: browse 12 workouts, sort them and build your plan.",
    stack: ["Next.js", "React", "Tailwind CSS", "REST API", "Vercel"],
    description: "FitLog is a dark, no-nonsense workout library. It shows 12 exercises covering every major muscle group as cards with the equipment needed, duration, calories and rating. Users can sort by duration and add exercises to \"My Plan\" or save them, with live counters in the header. The UI follows a provided Figma design and is fully responsive.",
    live: "https://fit-log-gold-nine.vercel.app/",
    github: "https://github.com/Saqlaine-Sami/fit-log",
    challenges: [
      "Matching the Figma design closely while keeping the layout responsive with Tailwind CSS",
      "Keeping sorting and the Plan/Saved counters in sync using clean state management",
      "Handling images of different sizes so every card stays aligned",
      "Understanding client vs. server components and image optimization in Next.js"
    ],
    future: [
      "User accounts so workout plans are saved to a database",
      "Logging sets, reps and weight, with progress charts",
      "Search and filtering by muscle group",
      "PWA support so it works offline at the gym"
    ]
  },
  {
    id: "bazardor",
    name: "Bazardor – Market Price Tracker",
    image: "assets/bazardor-1.jpg",
    gallery: ["assets/bazardor-2.jpg", "assets/bazardor-3.jpg"],
    short: "Today's prices of daily essentials and how they changed, in a clean Bangla interface.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    description: "Bazardor (বাজার দর) is a fully Bangla website that shows today's prices of everyday essentials: rice, lentils, oil, vegetables, fish, meat, eggs and dairy, and spices. It has a scrolling price ticker, category navigation, and separate sections for items whose price rose or fell today. Each product shows its percentage change in red (up), green (down) or grey (unchanged).",
    live: "https://bazardor-sami.vercel.app/",
    github: "https://github.com/Saqlaine-Sami/bazardor-Sami",
    challenges: [
      "Displaying Bangla fonts, numerals and dates correctly",
      "Splitting 30+ products into rising, falling and unchanged groups",
      "Building a smooth scrolling price ticker that still works on mobile",
      "Organising product data by category in a clean, reusable way"
    ],
    future: [
      "Fetching real market prices automatically from a live data source",
      "Price history charts (weekly and monthly)",
      "Alerts when a favourite product's price changes",
      "District-wise price comparison"
    ]
  },
  {
    id: "movie-explorer",
    name: "MovieExplorer",
    image: "assets/movie-1.jpg",
    gallery: ["assets/movie-2.jpg", "assets/movie-3.jpg"],
    short: "Search movies and TV shows, check ratings and release years, and open full details.",
    stack: ["JavaScript", "React", "REST API", "CSS", "Vercel"],
    description: "MovieExplorer lets you discover and search movies and TV shows. Every card shows the poster, rating and release year, and a \"See Details\" button opens more information. The home page has a cinematic hero section, and the dark theme with a responsive grid looks great on every screen size.",
    live: "https://movie-explorer-lac-psi.vercel.app/",
    github: "https://github.com/Saqlaine-Sami/movie-explorer",
    challenges: [
      "Fetching data from an external API and handling loading and error states",
      "Keeping the UI stable when a show has a missing poster or incomplete data",
      "Avoiding unnecessary API calls while the user types in search",
      "Keeping the poster grid neat across all screen sizes"
    ],
    future: [
      "Filters by genre, rating and year",
      "Favourites and a watchlist with user login",
      "Trailers and cast information",
      "Pagination or infinite scroll"
    ]
  },
  {
    id: "dev-stack-builder",
    name: "Dev Stack Builder",
    image: "assets/devstack-1.jpg",
    gallery: ["assets/devstack-2.jpg"],
    short: "Explore frontend, backend, database and tooling options and assemble your ideal tech stack.",
    stack: ["JavaScript", "React", "Tailwind CSS", "Vercel"],
    description: "Dev Stack Builder helps developers choose technologies for their next project. It presents cards for React, Vue.js, Svelte, Next.js, Node.js, PostgreSQL, Redis, TypeScript, Docker and more, each with a category, difficulty level and rating. Pressing \"Add to Stack\" adds a technology to the \"Your Stack\" panel, so users can assemble a stack that fits their project.",
    live: "https://dev-stack-builder-gihi.vercel.app/",
    github: "https://github.com/Saqlaine-Sami/dev-stack-builder",
    challenges: [
      "Managing the \"Your Stack\" state: adding, removing and preventing duplicates",
      "Presenting different technologies in one consistent card design",
      "Making the card grid and the stack sidebar work well on mobile",
      "Keeping a modern, clean UI with gradient branding"
    ],
    future: [
      "Side-by-side comparison of technologies",
      "Search and filters by category and difficulty",
      "Saving, sharing or exporting the finished stack",
      "Automatic stack suggestions based on project type"
    ]
  }
];
