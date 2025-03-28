let agents = [
  {
    name: "Oscar Maingi",
    email: "maingioscar@gmail.com",
    phone: "0734567890",
    county: "Nairobi",
  },
  {
    name: "Praise Victoria",
    email: "praisevictoria@gmail.com",
    phone: "0787654321",
    county: "Nairobi",
  },
  {
    name: "Sharllyrose Wanjala",
    email: "sharllyrosewanjala@gmail.com",
    phone: "0745678901",
    county: "Mombasa",
  },
  {
    name: "Nelson Muriithi",
    email: "nelsonmuriithi@gmail.com",
    phone: "0756789012",
    county: "Mombasa",
  },
  {
    name: "Albert Byrone",
    email: "albertbyrone@gmail.com",
    phone: "0767890123",
    county: "Kiambu",
  },
  {
    name: "Esther Wangari",
    email: "estherwangari@gmail.com",
    phone: "0778901234",
    county: "Kiambu",
  },
  {
    name: "Michael Kibaya",
    email: "michaelkibaya@gmail.com",
    phone: "0789012345",
    county: "Nairobi",
  },
  {
    name: "Morris Mlewa",
    email: "morrismlewa@gmail.com",
    phone: "0790123456",
    county: "Mombasa",
  },
  {
    name: "Cate Somba",
    email: "catesomba@gmail.com",
    phone: "0701234567",
    county: "Kiambu",
  },
  {
    name: "Anne Yula",
    email: "anneyula@gmail.com",
    phone: "0712345678",
    county: "Nairobi",
  },
];

// Load agents from local storage if available
if (localStorage.getItem("agents")) {
  agents = JSON.parse(localStorage.getItem("agents"));
}

function searchAgents() {
  const county = document.getElementById("county").value;
  const results = document.getElementById("results");
  results.innerHTML = "";

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

document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const county = document.getElementById("county").value;

    const newAgent = { name, email, phone, county };
    agents.push(newAgent);
    localStorage.setItem("agents", JSON.stringify(agents));
    alert("Agent registered successfully!");
    document.getElementById("register-form").reset();
  });
