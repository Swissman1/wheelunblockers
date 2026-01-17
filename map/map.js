document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([35.2271, -80.8431], 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    const icons = {
        red: L.divIcon({ className: 'red-dot' }),
        yellow: L.divIcon({ className: 'yellow-dot' }),
        green: L.divIcon({ 
            className: 'green-dot',
            html: "<div style='background-color:#2a9d8f; width:14px; height:12px; border-radius:50%; border:2px solid white;'></div>" 
        })
    };

    if (typeof properties !== 'undefined' && typeof operators !== 'undefined') {
        properties.forEach(prop => {
            const op = operators.find(o => o.id === prop.operator_id);
            const tier = op ? op.tier : 'yellow';
            
            const marker = L.marker(prop.coords, { icon: icons[tier] }).addTo(map);
            
            marker.on('click', () => {
                const infoDiv = document.getElementById('info');
                const ghostTag = op.is_ghost ? '<span class="ghost-label">GHOST</span>' : '';
                
                infoDiv.innerHTML = `
    <div class="${tier}-tier-header">
       ${prop.business_name}
    </div>
    <p style="font-size: 0.9rem; color: #fff; margin: 5px 0;">${prop.location}</p>
    <div style="background: #222; padding: 10px; border-radius: 4px; margin: 10px 0;">
        <p style="font-size: 0.85rem; color: #eee; margin: 0;"><strong>Enforcement:</strong> ${op.name} ${ghostTag}</p>
        <p style="font-size: 0.8rem; margin: 5px 0 0 0;">
            <a href="tel:${op.phone.replace(/\D/g,'')}" style="color: #3388ff; text-decoration: none;">${op.phone}</a>
        </p>
        <p style="font-size: 0.8rem; color: #888; margin: 2px 0 0 0;"> ${op.address}</p>
    </div>
    <ul class="violation-list">
        ${op.violations.map(v => `<li>${v}</li>`).join('')}
    </ul>
`;
            });
        });
    }

    window.locateUser = () => {
        map.locate({setView: true, maxZoom: 16});
    };

    map.on('locationfound', (e) => {
        // Drop a temporary blue ring to show user location
        L.circle(e.latlng, {
            radius: e.accuracy / 2,
            color: '#3388ff',
            fillOpacity: 0.1
        }).addTo(map);
    });

    map.on('locationerror', () => {
        alert("Location access denied. Please find your lot manually.");
    });
});