function renderTable(data) {
    const tbody = document.getElementById('table-body');
    
    if (!tbody) {
        console.error("Error: Could not find element with ID 'table-body'");
        return;
    }

    console.log("Rendering data:", data); // Check your console for this!

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">No operators found.</td></tr>';
        return;
    }

    tbody.innerHTML = data.map(site => {
        const ghostTag = site.is_ghost ? `<span class="ghost-label">GHOST</span>` : '';
        return `
            <tr class="${site.tier}-row">
                <td>
                    <div class="biz-name">${site.business_name} ${ghostTag}</div>
                    <div class="op-name">Reg. Operator: ${site.operator_name}</div>
                </td>
                <td><span class="badge ${site.tier}">${site.tier.toUpperCase()}</span></td>
                <td>
                    <div class="violation-cell">
                        ${site.violations.length > 0 ? site.violations.join('<br>') : 'None'}
                    </div>
                </td>
                <td>${site.location}</td>
            </tr>
        `;
    }).join('');
}

function filterOperators() {
    const query = document.getElementById('operator-search').value.toLowerCase();
    const filtered = bootingData.filter(site => 
        site.business_name.toLowerCase().includes(query) || 
        site.operator_name.toLowerCase().includes(query) ||
        site.location.toLowerCase().includes(query)
    );
    renderTable(filtered);
}

// Use this specific listener to ensure the HTML is fully parsed
window.addEventListener('load', () => {
    console.log("Page loaded. Global bootingData is:", typeof bootingData !== 'undefined' ? bootingData : "NOT DEFINED");
    if (typeof bootingData !== 'undefined') {
        renderTable(bootingData);
    }
});