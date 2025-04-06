# Weather-app-Nubisoft-
# 🌤️ WeatherApp - Realtime & Forecast Weather for Gliwice and Hamburg
This project is a full-stack weather application that displays both real-time and forecast weather for two cities: Gliwice and Hamburg, and any other city as per user needs powered by WeatherAPI. The project includes both backend and frontend components and adheres closely to the expectations outlined in the challenge.

# ✅ How This Project Meets the Expectations
📌 Backend
Clean and Readable Code: The Django backend uses modular design, serializers, and views following RESTful best practices.

Modern Tech Stack: Built with Django + Django REST Framework.

Structured Codebase: Includes clear separation of concerns: models, views, serializers, and routing.

WeatherAPI Integration: Fully integrated with WeatherAPI for fetching both current and forecast data.

Two Main Endpoints:

/ – returns current weather for Gliwice and Hamburg and any other city.

/Forecast – returns 3-day or more forecast for any of the cities cities.

Data Handling: Forecast data is retrieved on-demand from the API, but could easily be extended to store in a DB.
                The user searches are stored in the SQlite database and then displayed to the user via the /History end point

Version Control: The project is versioned with Git and commits reflect feature-based updates.



# 📌 Frontend
Modern Technologies: React (with Bootstrap) is used to build the responsive UI.

Responsive Design: Works on desktop and mobile screens.

Current & Forecast Data: User can view current and forecast weather for Gliwice and Hamburg, and also search custom cities.

Interactive Features: Includes date picker, error handling, and weather cards.

Hosted: Bonus — [App is hosted on GitHub Pages / Vercel] (optional, add your link here).

Version Control: Frontend code is also tracked and structured via Git.

# 🚀 Step-by-Step Installation Guide
🧰 Prerequisites
Python 3.8+
Node.js 14+
npm / yarn
Git

Clone the Repository
bash
Copy
Edit
git clone https://github.com/NaftalyMurimi/Weather-app-Nubisoft-.git
cd weatherapp
2. ⚙️ Backend Setup (Django)

pip install -r requirements.txt
Create a .env file with your API key:

env

WEATHER_API_KEY=your_api_key_here
Run the server:
python manage.py migrate
python manage.py runserver
The backend will run at: http://localhost:8000

3. 🌐 Frontend Setup (React)

npm install
npm run build
Start the React development server:

npm start
The frontend will run at: http://localhost:3000