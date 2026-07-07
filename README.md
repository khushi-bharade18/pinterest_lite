# Pinterest Lite

A modern Pinterest-inspired web application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. Users can search high-quality photos and stickers, save their favorite items, manage their profile, and enjoy a responsive user experience across all devices.

---

## Features

### Authentication

- User Signup
- User Login
- Protected Routes
- Logout with confirmation dialog
- User Profile Management
- Edit User Information
- Show/Hide Password functionality

### Saved Collection

- Save favorite photos and stickers
- Remove saved items
- Toast notifications for save/remove actions
- Persistent saved collection using Local Storage

### User Profile

- View complete user information
- Edit profile details
- Update password
- Responsive profile layout
- Logout functionality

### Modern UI

- Pinterest-inspired design
- Responsive layout for Mobile, Tablet & Desktop
- Animated Hero Sections
- Custom 404 Page
- Loading Skeleton
- Empty State
- Error State
- Smooth transitions and hover animations

### Performance

- Redux Toolkit for global state management
- Optimized rendering
- Component-based architecture
- Reusable UI components

---

# 🛠 Tech Stack

### Frontend

- React
- Redux Toolkit
- React Router
- Tailwind CSS

### APIs

- Unsplash API
- Giphy API

### Libraries

- Axios
- React Hot Toast
- Lucide React

---

# Project Structure

```
src
│
├── api
│   └── mediaApi.js
│
├── components
│   ├── Auth
│   ├── Header
│   ├── Hero_section
│   ├── Result
│   ├── Saved
│   ├── UserInfo
│   └── Footer
│
├── features
│   ├── searchSlice.js
│   └── usersSlice.js
│
├── pages
│   ├── LoginPage.jsx
│   ├── SignupPage.jsx
│   ├── HomeLayout.jsx
│   ├── HomePage.jsx
│   ├── SavedPage.jsx
│   ├── UserInfoPage.jsx
│   └── NotFound.jsx
│
├── routes
│   └── ProtectedRoute.jsx
│
├── App.jsx
└── main.jsx
```

---

# Responsive Design

The application is fully responsive and optimized for:

- Mobile
- Tablet
- Laptop
- Desktop

---

# Authentication Flow

```
Signup
      ↓
Login
      ↓
Protected Routes
      ↓
Home
      ↓
Profile / Saved Collection
      ↓
Logout
```

---

# State Management

Redux Toolkit is used to manage:

- Authentication
- Current User
- Search Query
- Search Results
- Active Search Tab
- Loading State
- Error State
- Saved Collection

---

# Key Functionalities

- User Authentication
- Protected Routing
- Dynamic URL Search
- Search History Support
- Save & Remove Collection
- Responsive Navbar
- Editable User Profile
- Toast Notifications
- Animated Components
- Error Handling
- Empty Search State
- Loading Skeleton

---

# Future Improvements

- Infinite Scrolling
- Masonry Layout
- Dark Mode
- Image Download
- Social Login
- User Avatar Upload
- Search Suggestions
- Recent Searches
- Pagination
- Favorites Categories

---

# Author

**Khushi Bharade**

Frontend Developer

### Skills

- HTML5
- CSS3
- JavaScript (ES6+)
- React.js
- Redux Toolkit
- Tailwind CSS
- React Router
- REST APIs
- Git & GitHub

---

If you like this project, don't forget to give it a Star!
