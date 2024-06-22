// Define the grid items
const gridItems = [
    { title: 'Raider Sheet', description: 'What we obey.', link: 'https://docs.google.com/spreadsheets/d/14VXw3ePBSllsv72Rjbpyj31CDJozkSL_y0rEzijmp7s/edit?gid=63249405#gid=63249405' },
    { title: 'Required WeakAuras', description: 'What we install.', link: '#' },
    { title: 'Guild Logs', description: 'Where we parse.', link: 'https://classic.warcraftlogs.com/guild/reports-list/640768' },
    { title: 'GDKP Logs', description: 'Where some of us parse.', link: 'https://classic.warcraftlogs.com/guild/reports-list/648915' },
    { title: 'Discord', description: 'Where we talk.', link: 'https://discord.gg/spreadsheets' },
    { title: 'My Wago', description: 'Where I share.', link: 'https://wago.io/p/Xpariah'}
    // Add more items as needed
];

// Get the container
const container = document.getElementById('grid-container');

// Function to create and append grid items
function createGridItems(items) {
    items.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerHTML = `
            <a href="${item.link}" target="_blank">${item.title}</a>
            <div class="separator"></div>
            <div class="description">${item.description}</div>
        `;
        container.appendChild(gridItem);
    });
}


// Create and append the grid items on page load
createGridItems(gridItems);
