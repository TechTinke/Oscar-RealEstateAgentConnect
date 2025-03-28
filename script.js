// Fetch all agents from the JSON Server
async function fetchAgents() {
  try {
    const response = await fetch(
      "https://json-server-wlx8.onrender.com/agents"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching agents:", error);
    return [];
  }
}

// Search agents by county
async function searchAgents() {
  const county = document.getElementById("county").value;
  const results = document.getElementById("results");
  results.innerHTML = "";

  const agents = await fetchAgents();
  const filteredAgents = agents.filter((agent) => agent.county === county);

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
}

// Register a new agent
document
  .getElementById("register-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const county = document.getElementById("county").value;

    const newAgent = { name, email, phone, county };

    try {
      await fetch("https://json-server-wlx8.onrender.com/agents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAgent),
      });
      alert("Agent registered successfully!");
      document.getElementById("register-form").reset();
    } catch (error) {
      console.error("Error registering agent:", error);
    }
  });
