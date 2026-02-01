#  Weather App

> A modern, responsive weather application providing real-time weather data for locations worldwide

[Live Demo](https://katelynyew.github.io/weather-app) | [View Code](https://github.com/katelynyew/weather-app)

![Weather App Preview](./screenshots/hero.png)

---

##  Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [What I Learned](#what-i-learned)

---

##  Overview

Weather App is a sleek, user-friendly application that fetches real-time weather data from the Visual Crossing API. Users can search any location worldwide and toggle between Celsius and Fahrenheit units.

**Built with modular ES6 architecture** featuring separate concerns for API calls, state management, and UI rendering.

---

##  Features

✅ **Real-time Weather Data** - Fetches current conditions from Visual Crossing API  
✅ **Location Search** - Search weather for any city worldwide  
✅ **Unit Conversion** - Toggle between Celsius/Fahrenheit instantly  
✅ **Comprehensive Data** - Temperature, conditions, humidity, wind speed, feels-like temp  
✅ **Responsive Design** - Perfect display on mobile, tablet, and desktop  
✅ **Dynamic Backgrounds** - Background changes based on weather conditions  

---

##  Screenshots

### Desktop View
![Desktop View](./screenshots/desktop.png)

### Mobile View
<img src="./screenshots/mobile.png" width="300">

### Unit Toggle Feature
![Unit Toggle](./screenshots/toggle.gif)

---

##  Tech Stack

**Frontend:**
- JavaScript (ES6 Modules)
- HTML5
- CSS3

**Tools & APIs:**
- Visual Crossing Weather API
- Webpack (Module bundling)
- GitHub Pages (Deployment)

**Architecture:**
```
├── api.js          # API integration
├── state.js        # State management
├── ui.js           # DOM rendering
└── index.js        # App orchestration
```

---

##  Getting Started

### Prerequisites
- Node.js & npm
- Visual Crossing API key ([Get one free](https://www.visualcrossing.com/))

### Installation
```bash
# Clone repository
git clone https://github.com/katelynyew/weather-app.git

# Navigate to directory
cd weather-app

# Install dependencies
npm install

# Add your API key in api.js
const API_KEY = 'your_api_key_here';

# Run development server
npm start

# Build for production
npm run build
```

---

##  What I Learned

**Technical Skills:**
- Working with third-party RESTful APIs
- Async/await patterns for API calls
- ES6 module system and code organization
- Webpack configuration and deployment
- State management in vanilla JavaScript

**Challenges Overcome:**
- Handling API rate limits and error states
- Implementing clean separation of concerns
- Managing asynchronous data flow
- Creating responsive layouts with CSS Grid/Flexbox

---

##  Future Enhancements

- [ ] 7-day weather forecast
- [ ] Geolocation auto-detection
- [ ] Favorite locations with local storage
- [ ] Weather alerts and warnings
- [ ] Animated weather icons

---

##  License

MIT License - feel free to use this project for learning

---

<p align="center">Made with ❤️ by Katelyn Yew</p>
<p align="center">
  <a href="https://github.com/katelynyew">GitHub</a> •
  <a href="https://linkedin.com/in/katelynyew">LinkedIn</a>
</p>
