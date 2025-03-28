REAL HOUSE ESTATE AGENT CONNECT

---

Project Name
Real House Estate Agent Connect

---

Description
Real House Estate Agent Connect is a simple web application that allows users to search for real estate agents based on their county. The platform allows agents to register with their details (name, email, phone, and county), and users can search for agents in specific counties. The application also provides About Us and Reach Us pages to provide users with more information and contact details.
The project uses basic HTML, CSS, and JavaScript (with in-memory storage) to allow users to interact with registered agents and to register new agents.

---

Author

- Oscar Maingi(maingioscar2@gmail.com)

---

Setup Instructions

1. Clone the repository
2. Navigate to the project directory through a code editor like VS code after cloning
3. Open in Browser
   Open `index.html` in your preferred browser to run the application. The app doesn't require any server setup or backend, as it's a client-side application with in-memory storage.
4. Agent Registration
   You can register agents by navigating to the Register Agent page in the navigation bar. Once you submit the form with valid agent details, they will be added to the in-memory list, and users can search for them based on their county.

---

Behavior-Driven Development (BDD)

Feature 1: Register Agent
Given: I am an administrator.
When: I fill out the "Register Agent" form with valid agent details.
Then: The agent should be added to the list and stored temporarily.

Feature 2: Search Agent by County
Given: I am a user on the homepage.
When: I select a county from the dropdown and click the "Search" button.
Then: The list of agents for the selected county is displayed.

Feature 3: Display About Us and Reach Us pages
Given: I am a user on the platform.
When: I click on "About Us" or "Reach Us" from the navigation.
Then: I am redirected to the respective pages displaying information about the website or contact details.

---

Technologies Used

- HTML5: For structuring the web pages.
- CSS3: For styling and layout.
- JavaScript: For handling dynamic functionality, including agent registration and search.
- In-memory Storage: Used to store agent data temporarily (no database is used in this MVP version).
- No external libraries: The project uses vanilla JS, HTML, and CSS only.

---

Known Issues

- The data is stored in the browser's memory and not a database
- The platform does not yet support validation for duplicate agents.
- No authentication or user roles are implemented. Any user can register an agent.

---

Contact Information
If you have any questions or suggestions regarding this project, feel free to reach out to the author:
Email: maingioscar2@gmail.com
Phone: +254748279922

---

License and Copyright Information
License: This project is licensed under the MIT License.
Copyright: © 2025 Oscar Maingi. All rights reserved.

---

Link to Live Site (GitHub Pages)
This project is hosted on GitHub Pages. You can access the live site at:
