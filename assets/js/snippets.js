const snippets = window.CodersHubData?.snippets || [];

// ---- Rendering ----
function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function displaySnippets(data) {
    const container = document.getElementById('snippetContainer');
    const noResults = document.getElementById('noResults');
    if (!container) return;

    container.innerHTML = "";

    if (data.length === 0) {
        noResults.style.display = "block";
        return;
    }
    noResults.style.display = "none";

    data.forEach((snip) => {
        const card = document.createElement('div');
        card.className = 'snippet-card';
        card.innerHTML = `
            <div class="card-header">
                <h3>${escapeHTML(snip.title)}</h3>
                <span>${escapeHTML(snip.language)}</span>
            </div>
            <p class="card-description">${escapeHTML(snip.description)}</p>
            <pre><code>${escapeHTML(snip.code)}</code></pre>
        `;
        container.appendChild(card);
    });
}

let activeLang = "All";

function filterSnippets() {
    const searchInput = document.getElementById('snippetSearch');
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase();

    const filtered = snippets.filter((snip) => {
        const matchesQuery =
            snip.title.toLowerCase().includes(query) ||
            snip.description.toLowerCase().includes(query) ||
            snip.language.toLowerCase().includes(query);
        const matchesLang = activeLang === "All" || snip.language === activeLang;
        return matchesQuery && matchesLang;
    });

    displaySnippets(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('snippetContainer');
    if (!container) return; // not on the snippets page

    displaySnippets(snippets);

    const searchInput = document.getElementById('snippetSearch');
    if (searchInput) {
        searchInput.addEventListener('input', filterSnippets);
    }

    const chips = document.querySelectorAll('#filterChips .chip');
    chips.forEach((chip) => {
        chip.addEventListener('click', () => {
            chips.forEach((c) => c.classList.remove('active'));
            chip.classList.add('active');
            activeLang = chip.dataset.lang;
            filterSnippets();
        });
    });
});
