
document.getElementById('download-excel').addEventListener('click', function() {
    const table = document.querySelector('table');
    const workbook = XLSX.utils.table_to_book(table);
    XLSX.writeFile(workbook, 'цены.xlsx');
});
