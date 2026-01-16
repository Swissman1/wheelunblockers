document.addEventListener('DOMContentLoaded', () => {
    // Initialize Map centered on Charlotte
    const map = L.map('map').setView([35.2271, -80.8431], 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    // Create a custom icon for Red Tier sites
    const redIcon = L.divIcon({ className: 'red-dot' });
    
    // Create a custom icon for Green Tier sites
    const greenIcon = L.divIcon({ 
        className: 'green-dot',
        html: "<div style='background-color:#2a9d8f; width:12px; height:12px; border-radius:50%; border:2px solid white;'></div>" 
    });

    // Pull directly from data.js
    if (typeof bootingData !== 'undefined') {
        bootingData.forEach(site => {
            const icon = site.tier === 'red' ? redIcon : greenIcon;
            const marker = L.marker(site.coords, { icon: icon }).addTo(map);
            
            marker.on('click', () => {
                const infoDiv = document.getElementById('info');
                const ghostTag = site.is_ghost ? '<span class="ghost-label">GHOST</span>' : '';
                
                infoDiv.innerHTML = `
                    <div class="${site.tier}-tier-header">
                        ${site.tier.toUpperCase()}: ${site.business_name} ${ghostTag}
                    </div>
                    <p style="font-size: 0.8rem; color: #888; margin-bottom: 10px;">
                        Reg. Op: ${site.operator_name}
                    </p>
                    <ul class="violation-list">
                        ${site.violations.length > 0 ? 
                            site.violations.map(v => `<li>${v}</li>`).join('') : 
                            '<li>No reported violations.</li>'}
                    </ul>
                `;
            });
        });
    } else {
        console.error("Data source 'bootingData' not found.");
    }
});