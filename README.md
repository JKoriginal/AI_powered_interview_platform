# Interview Platform

An AI-powered platform for practicing interviews and receiving feedback.

## Features

- AI-powered interview simulations
- Practice with real interview questions
- Instant feedback on performance
- User authentication (Sign In/Sign Up)
- Track past interview history

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Backend & Database:** Firebase (Authentication, Firestore)
- **AI / Interview Simulation:** Google AI SDK, Vapi AI
- **Styling:** Tailwind CSS
- **Form Handling:** React Hook Form
- **Schema Validation:** Zod

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.
- Node.js (v20.x or later recommended)
- npm (usually comes with Node.js) or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/interview_platform.git
    cd interview_platform
    ```
    *(Replace `https://github.com/your-username/interview_platform.git` with the actual repository URL if different.)*

2.  **Install NPM packages:**
    ```bash
    npm install
    ```
    *(Or if you use yarn: `yarn install`)*

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root of the project. You will need to add your Firebase configuration and any other necessary API keys here.
    Example structure:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

    # Add other environment variables for AI services if needed
    # VAPI_API_KEY=your_vapi_api_key
    # GOOGLE_API_KEY=your_google_ai_key
    ```
    *Note: Obtain these keys from your Firebase project console and respective AI service dashboards.*

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will start the application on `http://localhost:3000` (or another port if 3000 is occupied).

2.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

In the project directory, you can run the following commands:

-   `npm run dev`
    -   Starts the development server using Next.js with Turbopack.
    -   Ideal for local development with fast refresh.

-   `npm run build`
    -   Builds the application for production usage.
    -   Optimizes the application for performance.

-   `npm run start`
    -   Starts a Next.js production server (requires a build to be created first with `npm run build`).

-   `npm run lint`
    -   Runs ESLint to analyze the code for potential errors and style issues.
