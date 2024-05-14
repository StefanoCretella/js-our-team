// Array delle info dei membri del team
const teamMembers = [
    {
      nome: "Wayne Barnett",
      ruolo: "Founder & CEO",
      foto: src="img/wayne-barnett-founder-ceo.jpg"
    },
    {
      nome: "Angela Caroll",
      ruolo: "Chief Editor",
      foto: "img/angela-caroll-chief-editor.jpg"
    },
    {
      nome: "Walter Gordon",
      ruolo: "Office Manager",
      foto: "img/walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "img/angela-lopez-social-media-manager.jpg"
      },
      {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "img/scott-estrada-developer.jpg"
      },
      {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "img/barbara-ramos-graphic-designer.jpg"
      }
  ];
  
  // Funzione per visualizzare i membri del team nella pagina HTML
  function displayTeamMembers() {
    const teamContainer = document.getElementById("team-container");
  
    teamMembers.forEach(function(member) {
      const memberDiv = document.createElement("div");
      memberDiv.classList.add("team-member");
  
      const img = document.createElement("img");
      img.src = member.foto;
      img.alt = member.nome;
  
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("info");
      infoDiv.textContent = member.nome + " - " + member.ruolo;
  
      memberDiv.appendChild(img);
      memberDiv.appendChild(infoDiv);
  
      teamContainer.appendChild(memberDiv);
    });
  }
  
  // Visualizzare i membri del team nella pagina
  window.onload = displayTeamMembers;
  