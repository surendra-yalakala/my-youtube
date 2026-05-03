# 📺 My YouTube

A YouTube clone web application built with **React.js** that integrates the **YouTube Data API v3** to fetch and display real videos, channels, and search results — replicating core YouTube features with a clean, responsive UI.

---

## 🚀 Features

- 🔍 Search for any video using the real YouTube Data API
- 🎬 Watch videos with an embedded YouTube player
- 📊 Display video metadata — title, channel name, views, and published date
- 📂 Browse videos by category / topic
- 📱 Fully responsive layout for mobile and desktop
- ⚡ Debounced search input for optimized API usage

---

## 🛠️ Tech Stack

| Layer       | Technology                                      |
|-------------|--------------------------------------------------|
| Frontend    | React.js, JavaScript (ES6+)                      |
| API         | YouTube Data API v3 (Google)                     |
| HTTP Client | Axios                                            |
| Styling     | CSS3, Flexbox, Grid                              |
| State       | React Hooks (`useState`, `useEffect`)            |
| Routing     | React Router DOM                                 |
| Build Tool  | Create React App                                 |

---

## 📁 Project Structure

```
my-youtube/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── SearchBar/
│   │   ├── VideoList/
│   │   ├── VideoCard/
│   │   └── VideoPlayer/
│   ├── api/
│   │   └── youtube.js       # Axios instance with API key config
│   ├── App.js
│   └── index.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 14.x
- npm >= 6.x
- A [YouTube Data API v3 key](https://console.cloud.google.com/) (free via Google Cloud Console)

### Installation

```bash
# Clone the repository
git clone https://github.com/surendra-yalakala/my-youtube.git

# Navigate into the project directory
cd my-youtube

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
```

> ⚠️ Never commit your API key. The `.env` file is already in `.gitignore`.

```bash
# Start the development server
npm start
```

The app will run at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

---

## 🧠 Key Learnings & Highlights

- Integrated **YouTube Data API v3** using Axios with a centralised API config — keeping API keys secure via environment variables
- Implemented **debounced search** to reduce unnecessary API calls on every keystroke
- Built **reusable VideoCard and VideoList components** that adapt to different data shapes (search results vs. category feeds)
- Applied **React Router** for seamless navigation between search results and video playback pages
- Practiced **async/await with useEffect** for clean side-effect management and loading states

---

## 🔮 Planned Improvements

- [ ] Add related videos sidebar on the player page
- [ ] Implement channel detail page
- [ ] Add dark mode toggle
- [ ] Cache API responses to reduce quota usage
- [ ] Write unit tests with Jest and React Testing Library
- [ ] Deploy on Vercel

---

## 👨‍💻 Author

**Surendra Yalakala**
Senior React & React Native Developer | 8+ years experience

[![LinkedIn](https://img.shields.io/badge/LinkedIn-surendrayalakala-blue?style=flat&logo=linkedin)](https://linkedin.com/in/surendrayalakala)
[![GitHub](https://img.shields.io/badge/GitHub-surendra--yalakala-black?style=flat&logo=github)](https://github.com/surendra-yalakala)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
