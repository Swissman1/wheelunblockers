
let currentSort = {
    column: null,
    direction: 'asc'
};

function renderTable(data) {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;

    tbody.innerHTML = data.map(prop => {
        const op = operators.find(o => o.id === prop.operator_id);
        if (!op) return '';

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
function sortTable(column) {
    if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort.column = column;
        currentSort.direction = 'asc';
    }

    const tierOrder = { 'red': 1, 'yellow': 2, 'green': 3 };

    const sortedData = [...properties].sort((a, b) => {
        const opA = operators.find(o => o.id === a.operator_id);
        const opB = operators.find(o => o.id === b.operator_id);
        
        let valA, valB;

        if (column === 'tier') {
            valA = tierOrder[opA.tier] || 99;
            valB = tierOrder[opB.tier] || 99;
        } 
        else if (column === 'violations') {
            valA = opA.violations ? opA.violations.length : 0;
            valB = opB.violations ? opB.violations.length : 0;
        }
        else {
            valA = a[column] ? a[column].toLowerCase() : '';
            valB = b[column] ? b[column].toLowerCase() : '';
        }

        if (valA < valB) return currentSort.direction === 'asc' ? -1 : 1;
        if (valA > valB) return currentSort.direction === 'asc' ? 1 : -1;
        return 0;
    });

    renderTable(sortedData);
    updateSortUI(column);
}
function filterOperators() {
    const query = document.getElementById('operator-search').value.toLowerCase();
    
    const filtered = properties.filter(prop => {
        const op = operators.find(o => o.id === prop.operator_id);
        
        return prop.business_name.toLowerCase().includes(query) || 
               prop.location.toLowerCase().includes(query) ||
               op.name.toLowerCase().includes(query) ||
               op.address.toLowerCase().includes(query) ||
               op.phone.includes(query);
    }).sort(x=> x.business_name);
    
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
// Visual feedback for which column is active
function updateSortUI(column) {
    document.querySelectorAll('th.sortable').forEach(th => {
        th.classList.remove('sort-asc', 'sort-desc');
    });
    const activeTh = document.querySelector(`th[onclick*="'${column}'"]`);
    if (activeTh) {
        activeTh.classList.add(currentSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
    }
}