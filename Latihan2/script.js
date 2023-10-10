// script.js
document.getElementById('submitBtn').addEventListener('click', function() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var konfirmasiPassword = document.getElementById('konfirmasiPassword').value;

    if (nama === '' || email === '' || password === '' || konfirmasiPassword === '') {
        alert('Semua kolom input harus diisi.');
    } else if (password !== konfirmasiPassword) {
        alert('Password dan konfirmasi password tidak cocok.');
    } else {
        // Lakukan tindakan pendaftaran di sini (contoh: mengirim data ke server)
        alert('Pendaftaran berhasil!');
        // Clear form
        document.getElementById('registrationForm').reset();
    }
});
