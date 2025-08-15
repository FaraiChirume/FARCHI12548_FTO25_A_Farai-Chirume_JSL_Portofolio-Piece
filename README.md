# JSL Portfolio Piece: Kanban App Deployment & Features Implementation
# Farai Arthur Chirume 

## Overview

This project involves **deploying a Kanban app to Netlify**, ensuring the app's functionality and persistence through local storage, and implementing dynamic features such as task editing, deletion, sidebar interaction, and a theme toggle. My goal was to deliver a fully functional, deployable application that is responsive across devices and maintains data consistency. I also focused on **clean, modular code** which is well-documented for future development.

- **Recorded Presentation:** link ********
- **App link :** link*******
- **Figma Design Reffrence :** (https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=6033-11092)

### Initial Data Fetching & Loading State

- My Project **Fetches tasks dynamically** from an API: https://jsl-kanban-api.vercel.app/

- I also **Replaced any hard-coded task data**, to ensure the application receives the most up-to-date tasks.

- My Project also **Displays a loading message** while the tasks are being fetched so that users are informed the data is loading.
- If fetching fails, **it show an error message** to alert users to the issue.

### Data Persistence

- The App **Stores fetched tasks in local storage** to ensure data persists across page reloads.
- On startup, the app **loads tasks from local storage** and display them in their respective columns (To Do, Doing, Done) to maintain an organized task board.

### Task Editing & Deletion

- The App also allows users to **edit task details** (title, description, status) in a modal. Upon saving, the task it reflects the updated data on the board and in local storage.
- It also Implements a **delete button** within the modal to allow users to remove tasks. A confirmation message will appear before deleting a task, and if confirmed, the task will be removed from both the task board and local storage.

### Sidebar Interaction

- I implemented a **sidebar** that contains all required elements as shown in the Figma design.
- I also allowed the sidebar to be **toggleable**, so users can hide or show it based on their preferences.
- I have provided a mobile version of the sidebar that can be **accessed from the app logo**, and ensured it matches the design and functionality of the desktop sidebar.

### Mobile Sidebar (Menu) Functionality

- On mobile, the sidebar functions as a **menu** accessible from the top of the screen.
- I also includes the **theme toggle** switch in the mobile menu and I ensured all features match the desktop sidebar, as shown in the Figma design.
- The mobile menu is **closable**, allowing users to dismiss it for an unobstructed view of the tasks.

### Theme Toggle (Dark/Light Mode)

- There is also a **theme toggle switch** to allow users to switch between dark mode and light mode.
- It is functional in both the **desktop sidebar** and the **mobile menu** for consistent theme switching across devices.

## Code Quality & Maintainability

- I used **descriptive, meaningful variable and function names** to make the code easy to understand.
- **I Documented every major function and module** using **JSDoc comments** to explain the purpose, parameters, and return values of each part of the code.

