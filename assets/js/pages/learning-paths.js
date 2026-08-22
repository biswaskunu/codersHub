(function () {
    'use strict';



function displayCards(data = window.roadmaps) {
    const container = document.getElementById('pathContainer');
    container.innerHTML = "";

    data.forEach((path) => {
        const card = document.createElement('div');
        card.className = 'path-card';

        //roadmap to show in the popup later
        card.innerHTML = `
            <h3>${path.title}</h3>
            <p>${path.desc}</p>
            <p>${path.desc}</p>
            <button class="path-btn" onclick="openRoadmap('${path.id}')">View Roadmap</button>
        `;

        container.appendChild(card);
    });
}


function openRoadmap(id) {
    const roadmap = window.roadmaps.find(r => r.id === id);
    if (!roadmap) return;
    const modal = document.getElementById('roadmapModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    title.innerText = roadmap.title;

    // Convert steps array into list items
    body.innerHTML = roadmap.steps.map((step, index) => `
                <li>
                                <span class="step-num">${index + 1}</span>
                                <span class="step-text">${step}</span>
                </li>
                `).join('');

    modal.style.display = 'flex';
}

function closeRoadmap() {
    document.getElementById('roadmapModal').style.display = 'none';
}
window.onclick = function(event) {
    const modal = document.getElementById('roadmapModal');
    if (modal && event.target === modal) {
        modal.style.display = "none";
    }
}

// search bar
const searchBar = document.querySelector('.search-bar');
if (searchBar) {
    searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredRoadmaps = window.roadmaps.filter((path) => {
        return (
            path.title.toLowerCase().includes(searchString) ||
            path.desc.toLowerCase().includes(searchString)
        );
    });
    displayCards(filteredRoadmaps);
    });
}




// if u r reading this , just know that I suck at JS I spent 1hr debugging this garbage js code
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('pathContainer')) {
        displayCards();
    }
});

window.openRoadmap = openRoadmap;
window.closeRoadmap = closeRoadmap;
}());
