# CS601_HW4_Johnson
# Author: Cole Johnson
Project Overview

This project implements the Module 4 Country Management System for MET CS601 using TypeScript. The goal was to demonstrate the use of interfaces, classes, inheritance, type predicates, type assertions, and DOM manipulation while working with structured country data. Three country types were created—RainyCountry, SnowyCountry, and IslandCountry—each implementing a shared ICountry interface. A list of mixed country objects is processed, filtering out only SnowyCountry objects using a custom type predicate and helper function, then rendering the results to the browser. The application displays all countries, all snowy countries, and the calculated total annual snowfall.
---
Development and Compilation

The TypeScript source code resides in src/app.ts and compiles into public/app.js using the provided tsconfig.json configuration. The project uses TypeScript as a development dependency and follows the setup instructions outlined in the assignment, including installing dependencies with npm install and compiling with npx tsc. The resulting webpage, public/index.html, reads and displays the compiled JavaScript output. Optional styling is provided through public/styles.css to improve readability without using any external libraries, in accordance with assignment restrictions. All DOM rendering occurs after page load to ensure elements are available before script execution.
---
Execution and Requirements

To run the project, the user simply opens public/index.html in any browser after compilation. The assignment requirements are fully met: TypeScript compiles without errors, all classes and interfaces are implemented correctly, the snowy country list is generated using proper type checking, and the results are displayed neatly on the webpage. The submission excludes the node_modules folder as required and includes appropriate project files and structure. This project demonstrates complete adherence to the assignment’s technical and organizational guidelines.