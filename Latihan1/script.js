// script.js

document.getElementById('tambahButton').addEventListener('click', function() {
    var bilangan1 = parseFloat(document.getElementById('bilangan1').value);
    var bilangan2 = parseFloat(document.getElementById('bilangan2').value);
    var hasil = bilangan1 + bilangan2;
    alert('Hasil penjumlahan: ' + hasil);
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('bilangan1').value = '';
    document.getElementById('bilangan2').value = '';
    document.getElementById('hasil').textContent = '0';
});
