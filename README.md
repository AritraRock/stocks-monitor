
# Stock Monitoring Platform

This stock monitoring platform allows users to create and manage watchlists of stock symbols and displays the latest stock values on the dashboard. The platform is built using React for the frontend and Django for the backend.


## Features

- User authentication: Secure and simple authentication mechanism for users.
- Watchlist management: Users can create and manage their own watchlists of stock symbols.
- Dashboard: Displays the latest stock values of symbols on the user's watchlist.
- Multi-user support: Handles multiple users concurrently, each having different watchlists.
- External API integration: Utilizes the Alpha Vantage API to pull stock information.


## Tech Stack

**Frontend:** React, TypeScript, Material-UI

**Backend:** Django, Django REST Framework


## Installation
Clone the repository:

```bash
  git clone https://github.com/AritraRock/stocks-monitor.git
  cd stocks-monitor
```
### Backend

Create a terminal at parent folder(Stock-Monitor) and navigate to the backend directory:

```bash
  cd backend
```

Install dependencies:

```bash
  pip install -r requirements.txt
```

Apply migrations:

```bash
  python manage.py migrate
```

Start the Django development server:

```bash
  python manage.py runserver
```
### Frontend

Create a terminal at parent folder(Stock-Monitor) and Navigate to the frontend directory:

```bash
  cd frontend
```

Install dependencies:

```bash
  npm install
```

Start the development server:

```bash
  npm start
```
Access the frontend application at http://localhost:3000 in your browser. (without starting backend you won't be able to register or login)

# Password Constraints for Registration

This repository contains AUTH_PASSWORD_VALIDATORS that enforces certain constraints on passwords to enhance security. Below are the constraints defined in the application's settings:

## How to Ensure Compliance

When registering or updating passwords in the application, users should pay attention to the following guidelines:

1. **Minimum Length**: Make sure your password is at least 8 characters long.
2. **Avoid Common Passwords**: Choose a unique and non-obvious password to avoid common password attacks.
3. **Include Numeric Characters**: Incorporate at least one numeric character in your password.
4. **Avoid User Attributes**: Ensure that your password is not too similar to your username, email, or other user attributes.

### Example

Suppose you're registering or updating your password in the application. Here's an example of a strong password that meets the defined constraints: test@1234

## Creating a Superuser

To access the Django admin interface and manage the application's database, you need to create a superuser. Follow the steps below to create a superuser:

1. Open a terminal or command prompt.
2. Navigate to the project directory where the Django application is located.
3. Run the following command:

   ```bash
   python manage.py createsuperuser

## Usage

- You can search your desired stocks in the http://localhost:3000/dashboard and add to your watchlist

- You can also check and manage your favorite stocks in the http://localhost:3000/watchlist
  
- With the superuser email and password you can login at the django admin interface http://127.0.0.1:8000/admin/ to check how datas are stored.
