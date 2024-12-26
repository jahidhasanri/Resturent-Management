# Restaurant Management Website 🍽️

## Project Purpose
This project is a full-stack Restaurant Management website aimed at enhancing the restaurant's online presence, improving customer interaction, and streamlining internal management processes. It is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to ensure a modern, robust, and user-friendly experience.

## Live URL
[https://assignment-11-soution.web.app/](#)

## Key Features
### Frontend Features
1. **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop devices.
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
   - **Private Pages**:
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

## Technologies and Libraries Used
### Frontend
- **React.js**: UI development.
- **React Router**: Route management.
- **React Toastify**: Notifications.
- **Tailwind CSS**: Styling.
- **Framer Motion**: Animations.
- **Yet Another React Lightbox**: Gallery lightbox functionality.
- **Lottie-React:** Rendering Lottie animations,etc.
- **Moment.js**: Formatting dates and times.

### Backend
- **Node.js**: Backend runtime.
- **Express.js**: Backend framework.
- **MongoDB**: Database.
- **JWT**: Authentication.
- **Moment.js**: Formatting dates and times.






