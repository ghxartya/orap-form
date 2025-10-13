# Orap form

### This project is a test assignment as well as a front-end application built on Next.js + Tailwind CSS.

## Project Structure Overview

### /public Directory

Contains various static files used throughout the application, such as images, icons, and other media assets.

### /src Directory

- **/app**: Next.js directory for routing and page components.
  - **_layout.tsx_**: Defines the global layout structure for the application.
- **/assets**: Contains resources like fonts and global styles.
  - **_/fonts_**: Font files used throughout the application.
  - **_/styles_**: CSS stylesheets for global styles, components, and utilities.
- **/components**: Reusable UI components, split into subdirectories for organizational purposes.
  - **_/layout_**: Components related to the overall structure.
  - **_/ui_**: Basic UI elements like buttons, inputs, modals, etc.

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
