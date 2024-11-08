## Overview
This **Playwright framework** automates an **e-commerce flow** from **login** to **checkout**. It’s structured with the **Page Object Model (POM)** for better **reusability** and **maintainability**.

## Project Components

- **Test Specification** (`page.spec.js`): Orchestrates the complete test flow, which includes **login**, **product search**, **add to cart**, and **checkout** processes.
- **Login Page**: Encapsulates **username**, **password**, and **sign-in** steps for handling **login interactions**.
- **Home Page**: Manages **product search** functionality and **add-to-cart** actions for the e-commerce platform.
- **Cart Page**: Manages **address entry** and **checkout** processes, ensuring that all details are correctly filled and confirmed.

## Highlights

- **Modular Design**: Each page’s actions are isolated in individual classes, improving code **maintenance** and making updates easier.
- **Configuration**: The **base URL** is managed centrally in `config.js` for easy maintenance and flexibility in configuration updates.
- **Reusable Components**: Encapsulated page-specific methods allow for cleaner, more **reusable code**.
- **Data Management**: Test data is stored in easily modifiable files, supporting **data-driven testing** and offering flexibility in handling various test scenarios.

