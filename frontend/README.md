# Full-Stack Authentication System - Frontend (Angular 21)

This is the frontend client for the Full-Stack Authentication System. Built with Angular 21, it features components for registration, email verification alerts, secure user login, password recovery, and a restricted Admin management panel.

## Features

- **Angular 21 Client SPA** with reactive forms and styling.
- **Role-Based Access Control (RBAC)**: Guards protect routes and restrict access (e.g., restricting the `/admin` view to users with the `Admin` role).
- **Two-Stage Testing Support**:
  - **Stage A (Development)**: Automatic fallback to a mock "Fake Backend" interceptor for zero-dependency execution.
  - **Stage B (Production)**: Connects directly to the real deployed Node.js API when compiled in production mode.
- **Deep Linking Support**: Bundles a `_redirects` configuration rule to prevent 404 errors on deep routes (like email verification URLs) when hosted on platforms like Render.

---

## Live Deployment Link
* **Production Deployed Web App**: [https://camangyan-auth-web.onrender.com](https://camangyan-auth-web.onrender.com)

---

## Prerequisites

- **Node.js**: `v20` or higher
- **NPM**: `v10` or higher
- **Angular CLI**: Installed locally or run via `npx`

---

## Getting Started (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server (Stage A - Fake Backend)
```bash
npm start
```
* Navigate to `http://localhost:4200` in your browser.
* In development mode, the **Fake Backend** is enabled. You can register, receive mock email alerts in the browser, log in, and manage accounts within local memory.

---

## Connecting to Deployed API (Stage B - Remote Backend)

### 1. Configure the Remote API URL
Before building for production, open `src/environments/environment.prod.ts` and set the production backend API URL:

```typescript
export const environment = {
    production: true,
    apiUrl: 'https://camangyan-auth-api.onrender.com' // Replace with your backend URL
};
```

### 2. Compile Production Bundle
Build the app using the production configuration:
```bash
npm run build
```
This compiles the application and outputs optimized static files to the `dist/angular-15-example/` folder, including the `_redirects` routing fix.

---

## Production Deployment (e.g. Render Static Site)

### 1. Create a Static Site on Render
* Connect your GitHub repository: `https://github.com/camangyan29jerry-ops/angular-21-boilerplate.git`
* **Build Command**: `npm run build`
* **Publish Directory**: `dist/angular-15-example`

### 2. Configure Rewrite/Redirect Rules
To prevent 404 errors when reloading the page or clicking email verification links (deep links):
* In Render Dashboard, go to your Static Service settings.
* Click **Redirects/Rewrites** -> **Add Rule**.
  - **Source**: `/*`
  - **Destination**: `/index.html`
  - **Action**: `Rewrite`
* *Note: The repository also contains a `src/_redirects` file that is compiled into the publish directory automatically as a backup rewrite policy for platforms that support it.*
