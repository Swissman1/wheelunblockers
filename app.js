document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Map centered on Charlotte
    const map = L.map('map').setView([35.2271, -80.8431], 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    // 2. Define Icons for the three tiers
    const redIcon = L.divIcon({ className: 'red-dot' });
    
    const yellowIcon = L.divIcon({ className: 'yellow-dot' });

    const greenIcon = L.divIcon({ 
        className: 'green-dot',
        html: "<div style='background-color:#2a9d8f; width:12px; height:12px; border-radius:50%; border:2px solid white;'></div>" 
    });

    // 3. Process Data from data.js
    if (typeof bootingData !== 'undefined') {
        bootingData.forEach(site => {
            // Determine which icon to use
            let icon;
            if (site.tier === 'red') {
                icon = redIcon;
            } else if (site.tier === 'yellow') {
                icon = yellowIcon;
            } else {
                icon = greenIcon;
            }

            const marker = L.marker(site.coords, { icon: icon }).addTo(map);
            
            // Marker Click Interaction
            marker.on('click', () => {
                const infoDiv = document.getElementById('info');
                const ghostTag = site.is_ghost ? '<span class="ghost-label">GHOST</span>' : '';
                
                infoDiv.innerHTML = `
                    <div class="${site.tier}-tier-header">
                        ${site.tier.toUpperCase()}: ${site.business_name} ${ghostTag}
                    </div>
                    <p style="font-size: 0.8rem; color: #888;