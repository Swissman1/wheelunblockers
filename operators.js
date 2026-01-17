function renderTable(data) {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;

    tbody.innerHTML = data.map(prop => {
        // Look up the operator linked to this specific property
        const op = operators.find(o => o.id === prop.operator_id);
        if (!op) return ''; // Safety check

        const ghostTag = op.is_ghost ? `<span class="ghost-label">GHOST</span>` : '';
        const cleanPhone = op.phone.replace(/\D/g,'');
        
        return `
            <tr class="${op.tier}-row">
                <td>
                    <div class="biz-name">${prop.business_name}</div>
                    <div class="op-name">Operator: ${op.name} ${ghostTag}</div>
                </td>
                <td><span class="badge ${op.tier}">${op.tier.toUpperCase()}</span></td>
                <td><div class="violation-cell">${op.violations.length > 0 ? op.violations.join('<br>') : 'None'}</div></td>
                <td>${prop.location}</td>
                <td><a href="tel:${cleanPhone}" class="tel-link">${op.phone}</a></td>
                <td><div class="address-cell">${op.address}</div></td>
            </tr>
        `;
    }).join('');
}

function filterOperators() {
    const query = document.getElementById('operator-search').value.toLowerCase();
    
    // Filter the 'properties' array instead of the non-existent 'bootingData'
    const filtered = properties.filter(prop => {
        const op = operators.find(o => o.id === prop.operator_id);
        
        return prop.business_name.toLowerCase().includes(query) || 
               prop.location.toLowerCase().includes(query) ||
               op.name.toLowerCase().includes(query) ||
               op.address.toLowerCase().includes(query) ||
               op.phone.includes(query);
    });
    
    renderTable(filtered);
}

window.addEventListener('load', () => {
    // Check for properties and operators from data.js
    if (typeof properties !== 'undefined' && typeof operators !== 'undefined') {
        renderTable(properties);
    } else {
        console.error("Data arrays not found. Check data.js load order.");
    }
});