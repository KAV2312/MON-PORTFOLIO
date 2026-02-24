const projectsData = {
    oheema: {
        title: "OHEEMA",
        image: "oheema-large.jpg",
        desc: "Oheema est une boutique en ligne complète. Fonctionnalités incluses : catalogue de pagnes, panier d'achat et interface de paiement sécurisée pour vos événements.",
        link: "https://votre-lien-site.com",
        isMobile: false
    },
    tetris: {
        title: "TETRIS MOBILE",
        image: "tetris-large.jpg",
        desc: "Un jeu de Tetris addictif développé avec React Native. Défiez les lois de la gravité et gérez vos lignes directement sur votre smartphone.",
        isMobile: true
    }
};

function openModal(id) {
    const project = projectsData[id];
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');

    let content = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius:10px; margin: 10px 0;">
        <p>${project.desc}</p>
    `;

    if(project.isMobile) {
        content += `<a href="app.apk" class="btn-apk">📲 Télécharger l'APK</a>`;
    } else {
        content += `<a href="${project.link}" target="_blank" class="btn-apk" style="background: #3b82f6;">🌐 Visiter le site</a>`;
    }

    body.innerHTML = content;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Fermer la modale si on clique en dehors
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) modal.style.display = "none";
}