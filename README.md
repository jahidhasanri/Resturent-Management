# Restaurant Management Website 🍽️

## Project Purpose
This project is a full-stack Restaurant Management website aimed at enhancing the restaurant's online presence, improving customer interaction, and streamlining internal management processes. It is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to ensure a modern, robust, and user-friendly experience.

## Live URL
[Restaurant Management Live Demo](https://assignment-11-soution.web.app/)

![Screenshot 2025-01-08 161524](https://github.com/user-attachments/assets/108be53e-04fb-43e8-b095-38c133e713db)

## Key Features

### Frontend Features
1. **Responsive Design**:  
   Fully responsive layout for mobile, tablet, and desktop devices.

2. **Authentication System**:  
   - Login/Logout with email-password and Google/GitHub integration.  
   - Password validation: Requires an uppercase letter, a lowercase letter, and a minimum of 6 characters.  
   - Toast notifications for errors and successful actions.

3. **Dynamic Pages**:  
   - **Home Page**: Includes a banner, top food section, and extra sections.  
   - **All Foods Page**: Searchable and paginated list of all food items.  
   - **Single Food Page**: Detailed view of each food item.  
   - **Food Purchase Page**: Form-based food ordering with validation and database integration.  
   - **Gallery Page**: Lightbox-style image gallery with animations and infinite scrolling.  

   **Private Pages**:  
   - **My Foods**: User-specific list of added foods with update functionality.  
   - **Add Food**: Form to add new food items.  
   - **My Orders**: List of user-specific food orders with delete functionality.

4. **Additional Features**:  
   - Theme toggling (light/dark mode).  
   - Profile dropdown with navigation to private routes.  
   - Spinner/loading animations during data fetch.

### Backend Features
1. **Secure API**:  
   - Firebase configuration keys and MongoDB credentials are stored in environment variables.  
   - JWT authentication for secure access to private routes.

2. **Database Operations**:  
   - Server-side filtering and pagination for food items.  
   - CRUD operations for food items and orders.  
   - Validations to prevent purchasing unavailable or self-added items.

3. **Error Handling**:  
   - Proper CORS setup and error codes (401, 403) for unauthorized access.

---

## Technologies and Libraries Used

### Frontend
- **React.js**: UI development.
- **React Router**: Route management.
- **React Toastify**: Notifications.
- **Tailwind CSS**: Styling.
- **Framer Motion**: Animations.
- **Yet Another React Lightbox**: Gallery lightbox functionality.
- **Lottie-React**: Rendering Lottie animations.
- **Moment.js**: Formatting dates and times.

### Backend
- **Node.js**: Backend runtime.
- **Express.js**: Backend framework.
- **MongoDB**: Database.
- **JWT**: Authentication.
- **Moment.js**: Formatting dates and times.

---

## Project Dependencies

```json
{
  "name": "assignment-11-solution-client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "localforage": "^1.10.0",
    "lodash.debounce": "^4.0.8",
    "lottie-react": "^2.4.0",
    "match-sorter": "^8.0.0",
    "moment": "^2.30.1",
    "motion": "^11.15.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.0",
    "react-toastify": "^11.0.2",
    "sort-by": "^1.2.0",
    "swiper": "^11.1.15",
    "yet-another-react-lightbox": "^3.21.7"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.17",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.22",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.13.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.3"
  }
}
## 🚀 How to Run Locally
- **git clone https://github.com/your-username/restaurant-management.git**
- **cd restaurant-management**
- **npm install**
- **npm run dev**
