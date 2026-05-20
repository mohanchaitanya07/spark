export const PROJECT_TEMPLATES = [
  {
    emoji: "🎵",
    title: "Build a Spotify clone",
    prompt:
      "Build a Spotify-style music player with a sidebar for playlists, a main area for song details, and playback controls. Use local state for managing playback and song selection. Prioritize layout balance and intuitive control placement for a smooth user experience. Use dark mode.",
  },
  {
    emoji: "🧠",
    title: "Build a focus timer",
    prompt:
      "Build a Pomodoro focus timer with start, pause, and reset controls, customizable work and break durations, and a session history list using local state. Use a calm color palette, large readable timer text, and clear active-state styling.",
  },
  {
    emoji: "💸",
    title: "Build an expense tracker",
    prompt:
      "Build a personal expense tracker with a form to add transactions (amount, category, date), a list view, a running balance, and a category breakdown chart using local state. Use clean typography and color-code income vs expenses.",
  },
  {
    emoji: "🎯",
    title: "Build a habit tracker",
    prompt:
      "Build a daily habit tracker with a grid showing the last 30 days per habit, ability to add and remove habits, and streak counts using local state. Use subtle hover states, filled cells for completed days, and a minimal, motivating layout.",
  },
  {
    emoji: "📓",
    title: "Build a markdown journal",
    prompt:
      "Build a markdown journal with a sidebar list of entries, a live markdown editor with preview, and search by title using local state. Use a comfortable reading font, generous spacing, and clean editor styling.",
  },
  {
    emoji: "🏋️",
    title: "Build a workout tracker",
    prompt:
      "Build a workout tracker where users can log exercises with sets, reps, and weight, view a history list, and see a simple progress chart per exercise using local state. Use bold numbers, clear sectioning, and a strong, energetic visual style.",
  },
  {
    emoji: "🌦️",
    title: "Build a weather dashboard",
    prompt:
      "Build a weather dashboard with a list of saved cities (mock data), current conditions cards, a 5-day forecast strip per city, and the ability to add or remove cities using local state. Use soft gradients matched to weather and a clean card layout.",
  },
  {
    emoji: "📚",
    title: "Build a reading tracker",
    prompt:
      "Build a book reading tracker with a grid of books showing cover placeholder, title, author, and progress bar, plus shelves for Reading, Finished, and Want to Read using local state. Use warm tones, clear typography, and gentle card shadows.",
  },
] as const;
