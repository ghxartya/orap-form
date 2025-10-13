# Delivery Address: Edit current address - Active button

### This project is a test assignment as well as a front-end application built on Next.js + Tailwind CSS.

## Project Structure Overview

### /public Directory

Contains various static files used throughout the application, such as images, icons, and other media assets.

### /src Directory

- **/api**: Contains basic logic for interacting with API requests.
  - **_api.config.ts_**: Central configuration for API requests, including base URLs and headers.
  - **_api.helper.ts_**: Utility functions to assist with API operations.
- **/app**: Next.js directory for routing and page components.
  - **_layout.tsx_**: Defines the global layout structure for the application.
- **/assets**: Contains resources like fonts and global styles.
  - **_/fonts_**: Font files used throughout the application.
  - **_/styles_**: CSS stylesheets for global styles, components, and utilities.
- **/components**: Reusable UI components, split into subdirectories for organizational purposes.
  - **_/layout_**: Components related to the overall structure.
  - **_/ui_**: Basic UI elements like buttons, inputs, modals, etc.
- **/config**: Configuration files for different aspects of the application.
  - **_metadata.config.ts_**: Metadata object with fields for SEO optimization.
- **/hooks**: Custom React hooks that encapsulate reusable logic.
  - **_useIntlMessages.ts_**: Fetches and manages localized messages.
- **/localization**: Folder for files related to localization logic.
  - **_request.ts_**: Requests JSON file with localized texts.
- **/messages**: Contains localized strings.
  - **_en-US.json_**: JSON file with English (United States) localized messages.
- **/providers**: Contains components that provide context or state to the application.
  - **_ReactQueryProvider.tsx_**: Sets up React Query for managing server state.
- **/services**: Serves to encapsulate and organize code related to interaction with external sources.
  - **_country.service.ts_**: Service for receiving countries.
- **/store**: Provides state management logic.
  - **_index.ts_**: Centralized Zustand store configuration.
- **/types**: TypeScript interfaces and types for strict type-checking across the application.
  - **_store.interface.ts_**: Types and interfaces for state management.
- **/utils**: Utility functions for various operations.
  - **_normalizeWhitespace.ts_**: Function that normalizes the supplied string by removing multiple spaces.

### Root Level

- **localization.d.ts**: Contains custom types for localized messages.

## Project Dependencies Overview

The **package.json** file lists the project dependencies that include the core libraries and tools needed to develop, build, and run the application. Below is a brief overview of selected packages used in this project:

- **_clsx_**: A library for conditionally building className strings.
- **_next-intl_**: A library for managing localization in Next.js applications. It provides tools for loading, formatting, and rendering localized messages based on the user’s locale.
- **_react-hook-form_** A React library for building and validating forms with minimal re-renders.

### Development Dependencies

- **_@trivago/prettier-plugin-sort-imports_**: A Prettier plugin that automatically sorts imports, ensuring a consistent and organized import structure in the codebase.
- **_prettier-plugin-tailwindcss_**: An official plugin for Prettier that automatically sorts Tailwind CSS classes for consistency and readability.

## Project Exploitation Instructions

The project uses **Yarn** as the package manager. Use standard Next.js commands for development, production, and building the application.

### Environment Configuration

Environment variables stored in a **.env** file. Folowing variables are required for the application to work properly:

- **_API_URL_**: Specifies the base URL of the API used by the application. This is essential for sending API requests within the application.

Ensure that these variables are correctly set in the .env file for the application to function as expected.
