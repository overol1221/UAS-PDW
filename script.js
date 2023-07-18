function saveUser() {
    var username = document.getElementById('regUsername').value;
    var password = document.getElementById('regPassword').value;

    // Menyimpan data pengguna ke local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registrasi berhasil! Silakan login.');
}

function loginUser() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Mengambil data pengguna dari local storage
    var savedUsername = localStorage.getItem('username');
    var savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
        alert('Login berhasil!');
        window.location.href = 'index.html'; // Mengarahkan pengguna ke halaman homepage setelah berhasil login
    } else {
        alert('Login gagal. Periksa kembali username dan password Anda.');
    }
}

function logout() {
    // Menghapus data pengguna dari local storage
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // Mengarahkan pengguna ke halaman login
    window.location.href = 'login.html';
}