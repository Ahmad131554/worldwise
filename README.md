# WorldWise

**WorldWise** is a React-based web application that enables users to track their global travels. With interactive maps, city and country management, and personal notes, it offers a seamless way to document and explore your journeys.

---

## 🧭 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## 📌 About

WorldWise allows users to:

- Mark cities they've visited on an interactive map.
- Add personal notes and details for each city.
- View a list of visited cities and countries, complete with flags and emojis.

---

## 🌟 Features

- **Authentication**: FakeAuthContext for user login and session management.
- **City Management**: Add, view, and delete cities with details like name, country, date of visit, and notes.
- **Country Management**: Auto-group cities by country; display visited countries with flags.
- **Interactive Map**: Click to add cities; view markers with popups showing city names and emojis.
- **Responsive UI**: Modern design using CSS Modules.
- **Lazy Loading**: Pages loaded lazily with React's `lazy` and `Suspense` for improved performance.

---

## ⚙️ Tech Stack

- **Frontend**: React, React Router, React Context
- **Styling**: CSS Modules
- **Map Integration**: Leaflet (via react-leaflet)
- **Backend**: json-server (mock API)
- **Build Tool**: Vite

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/worldwise.git
cd worldwise
npm install

```

### Running the Development Server

```bash
npm run dev
```

This command starts the development server. Open your browser and navigate to http://localhost:3000 to view the application.

### Starting the Mock Backend

```bash
npm run server
```

This command starts the mock backend using json-server. The backend will be available at http://localhost:5000.

## 🔮 Future Enhancements

- Implement real user authentication with a backend.

- Improve error handling and validation in forms.

- Enhance the map with features like clustering or filtering.

## 📄 License

This project is licensed under the MIT [LICENSE](./LICENSE).
