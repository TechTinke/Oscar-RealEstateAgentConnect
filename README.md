OSCAR-REAL ESTATE AGENT CONNECT

---

Project Name

- Real House Estate Agent Connect

---

Description

- OSCAR-REALESTATECONNECT is a modern web application designed to connect users with real estate agents based on county. Unlike traditional platforms that list properties, this solution prioritizes direct agent-client connections by providing a structured agent directory.

Key Features:

1. Real Estate Agent Registration
   • A registration form where new agents can enter their details (Name, Email, Phone, County).
   • Submitted data is sent to a JSON Server instead of local storage.
2. Search Agents by County
   • Users can filter agents by county to find Real estate agents in their county.
   • Search results are retrieved from the JSON Server dynamically.
3. JSON Server Integration
   • Agent data is stored in a JSON file hosted on a JSON Server.
   • Fetch API is used to retrieve agent data dynamically instead of using in-memory storage.

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
   A new agent can register through the Register New Agent Form. Once you submit the form with valid agent details, they will be added to the json-server memory and users can search for them based on their county.

---

Behavior-Driven Development (BDD)

- Feature 1: Register Real Estate Agent
  Scenario: Agent Registration
  Given: I am an unregistered and new real estate agent filling out the registration form,
  When: I enter my name, email, phone number, and county and submit the form,
  Then: My details should be sent and stored in the JSON Server instead of local storage.

- Feature 2: Search for Agents by County
  Scenario: Searching for Real Estate Agents
  Given: I am a user looking for an agent in my county,
  When I select a county and click the "Search" button,
  Then: I should see a list of agents from that county, retrieved from the JSON Server.

---

Technologies Used

- Frontend: HTML5, CSS3, JavaScript (Vanilla JS)
- Backend: JSON Server (Simulated database)
- Fetch API: Retrieves and displays agent data dynamically
- GitHub Pages: Hosting for the frontend

---

Known Issues

- The platform does not yet support validation for duplicate agents.
- No authentication or user roles are implemented. Any user can register an agent.

---

Contact Information

- If you have any questions or suggestions regarding this project, feel free to reach out to the author:
  Email: maingioscar2@gmail.com
  Phone: +254748279922

---

License and Copyright Information

- License: This project is licensed under the MIT License.
- Copyright: © 2025 Oscar Maingi. All rights reserved.

---

Link to Live Site (GitHub Pages)

- This project is hosted on GitHub Pages. You can access the live site at: https://techtinke.github.io/Oscar-RealEstateAgentConnect/
