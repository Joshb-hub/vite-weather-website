# 🌤️ Weather Website

A simple and elegant weather website built using **HTML**, **Tailwind CSS**, and **JavaScript**, powered by **Vite** for environment variable support. It fetches live weather data from a public API using a securely stored API key.

## 🧩 Features

- 🌆 Search for weather info by city name
- 🔐 API key hidden using `.env` and Vite's `import.meta.env`
- 💨 Instant weather data fetching via JavaScript
- 🎨 Styled beautifully with Tailwind CSS
- ⚡ Fast development experience using Vite

## 🛠️ Tech Stack

- HTML5
- Tailwind CSS
- JavaScript (ES6)
- [Vite](https://vitejs.dev/)
- Weather API (e.g., OpenWeatherMap)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-website.git
cd weather-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

In the root directory, add your API key like this:

```env
VITE_API_KEY=your_actual_api_key_here
```

> Make sure it starts with `VITE_` so Vite can expose it to the browser.

### 4. Start the Development Server

```bash
npm run dev
```

Then open your browser and go to: [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
weather-website/
├── index.html
├── main.js
├── .env
├── .gitignore
├── package.json
├── vite.config.js
├── README.md
```

## 🔒 Notes on API Key

- The `.env` file is included in `.gitignore` to keep the API key secret.
- In production, consider using a backend to fully protect the API key.

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).
