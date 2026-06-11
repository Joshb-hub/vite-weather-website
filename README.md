# 🌤️ Weatherly – Real-Time Weather Dashboard

<div align="center">

### Real-Time Weather Updates at Your Fingertips

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)

### 🚀 Fast • Responsive • Modern

### 🌍 Search Any City and Instantly Get Live Weather Information

</div>

---

# 📌 Overview

Weatherly is a modern weather application built using **HTML**, **Tailwind CSS**, **JavaScript**, and **Vite** that provides real-time weather information for cities around the world.

The application connects with a live weather API and displays up-to-date weather conditions through a clean and responsive user interface.

---

# 🌐 Live Demo

### 🔗 Live Website

**https://joshb-hub.github.io/vite-weather-website/**

> Note: The weather API has usage limits. If the API quota is exceeded, weather data may temporarily stop loading until the quota resets.

---

# ✨ Features

### 🔍 Smart City Search

Search weather conditions instantly by entering a city name.

---

### 🌦️ Live Weather Information

View:

* Temperature
* Weather Conditions
* Humidity
* Wind Information
* Real-Time Updates

---

### 🎨 Modern User Interface

* Responsive Design
* Mobile Friendly
* Clean Layout
* Fast Navigation

---

### 🔐 Secure API Integration

API keys are managed using:

```env
VITE_API_KEY=YOUR_API_KEY
```

This keeps configuration separate from the application code.

---

# 🛠️ Tech Stack

| Technology       | Purpose                  |
| ---------------- | ------------------------ |
| HTML5            | Structure                |
| Tailwind CSS     | Styling                  |
| JavaScript (ES6) | Logic & API Calls        |
| Vite             | Development & Build Tool |
| OpenWeather API  | Weather Data             |

---

# 📸 Application Preview

## 🏠 Home Page

![Main Page](./screenshots/main-image.png)

---

## 🌆 Delhi Weather Example

![Delhi Weather](./screenshots/delhi.png)

---

## 🌇 Hyderabad Weather Example

![Hyderabad Weather](./screenshots/hyderabad.png)

---

## 🌃 Kolkata Weather Example

![Kolkata Weather](./screenshots/kolkata.png)

---

# ⚙️ How It Works

```text
User Searches City
         ↓
JavaScript Sends API Request
         ↓
OpenWeather API Returns Data
         ↓
Weather Information Processed
         ↓
Results Displayed on Dashboard
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/your-username/weather-website.git

cd weather-website
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file:

```env
VITE_API_KEY=your_api_key_here
```

---

## Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

# 🔑 Creating an API Key

### Step 1

Create an account:

https://home.openweathermap.org/users/sign_up

### Step 2

Navigate to:

https://home.openweathermap.org/api_keys

### Step 3

Generate a new API key.

### Step 4

Wait for activation.

Activation can take a few minutes and occasionally up to two hours.

### Step 5

Add the key to your `.env` file.

---

# 📂 Project Structure

```text
Weather-Website/
│
├── screenshots/
│   ├── main-image.png
│   ├── delhi.png
│   ├── hyderabad.png
│   └── kolkata.png
│
├── src/
│   └── main.js
│
├── public/
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

# 🔒 Security Notes

### Environment Variables

Sensitive configuration is stored inside:

```text
.env
```

and excluded through:

```text
.gitignore
```

---

### Production Recommendation

For enterprise-grade applications, weather API requests should be routed through a backend service to prevent client-side exposure of API credentials.

---

# 🎯 Learning Outcomes

This project demonstrates:

✅ API Integration

✅ Environment Variable Management

✅ JavaScript Fetch API

✅ Responsive UI Development

✅ Tailwind CSS Styling

✅ Modern Frontend Tooling with Vite

✅ GitHub Pages Deployment

---

# 📜 License

This project is available under the MIT License.

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star!

Built with ❤️ using HTML, Tailwind CSS, JavaScript, and Vite

</div>
