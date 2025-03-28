const API_URL = "YOUR_JSON_SERVER_URL/agents";

// Function to fetch and display agents based on selected county
async function searchAgents() {
  const county = document.getElementById("county").value;
  const results = document.getElementById("results");
  results.innerHTML = "<p>Loading agents...</p>";

  try {
    const response = await fetch(`${API_URL}?county=${county}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const filteredAgents = await response.json();

    results.innerHTML = "";
    if (filteredAgents.length > 0) {
      filteredAgents.forEach((agent) => {
        const agentDiv = document.createElement("div");
        agentDiv.className = "agent";
        agentDiv.innerHTML = `
          <h3>${agent.name}</h3>
          <p>Email: ${agent.email}</p>
          <p>Phone: ${agent.phone}</p>
          <p>County: ${agent.county}</p>
        `;
        results.appendChild(agentDiv);
      });
    } else {
      results.innerHTML = "<p>No agents found in this county.</p>";
    }
  } catch (error) {
    results.innerHTML = `<p>Error fetching agents: ${error.message}</p>`;
  }
}

// Function to register a new agent
async function registerAgent(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  // Use a unique id for form select element to avoid conflict with search select
  const county = document.getElementById("county-register").value;

  const newAgent = { name, email, phone, county };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAgent),
    });
    if (!response.ok) {
      throw new Error("Failed to register agent");
    }
    alert("Agent registered successfully!");
    document.getElementById("register-form").reset();
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

// Attach event listeners
document
  .getElementById("register-form")
  .addEventListener("submit", registerAgent);
