function sumTable() {
    const getTableElements = document.querySelectorAll('table tbody tr td:nth-child(2):not(#sum)');
    
    const result = Array.from(getTableElements).reduce((sum, td) => sum + Number(td.textContent), 0);
    const sum = document.getElementById('sum');

    sum.textContent = result;
}