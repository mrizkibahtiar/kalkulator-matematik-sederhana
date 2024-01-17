const buttonPersegi = document.querySelector('.persegi');
const sectionPersegi = document.querySelector('.section-persegi');
const sectionKelilingPersegi = document.querySelector('.section-keliling-persegi');

const buttonPersegiPanjang = document.querySelector('.persegi-panjang');
const sectionPersegiPanjang = document.querySelector('.section-persegi-panjang');
const sectionKelilingPersegiPanjang = document.querySelector('.section-keliling-persegi-panjang');

// ketika button persegi ditekan
buttonPersegi.addEventListener('click', function () {
    sectionPersegi.style.display = 'block';
    sectionKelilingPersegi.style.display = 'block';
    sectionPersegiPanjang.style.display = 'none';
    sectionKelilingPersegiPanjang.style.display = 'none';
})

// ketika button persegi panjang ditekan
buttonPersegiPanjang.addEventListener('click', function () {
    sectionPersegiPanjang.style.display = 'block';
    sectionKelilingPersegiPanjang.style.display = 'block';
    sectionPersegi.style.display = 'none';
    sectionKelilingPersegi.style.display = 'none';
})

// ketika hitung persegi ditekan
const tampilRumus = document.querySelector('.section-persegi .bawah .user');
const tampilRumusKeliling = document.querySelector('.section-keliling-persegi .bawah .user');
const tampilRumus2 = document.querySelector('.section-persegi-panjang .bawah .user');
const tampilRumusKeliling2 = document.querySelector('.section-keliling-persegi-panjang .bawah .user');
const hitungPersegi = document.querySelector('.section-persegi .bawah .hitung')
hitungPersegi.addEventListener('click', function (e) {
    const sisi = document.querySelector('.bawah #sisi');
    if (sisi.value == "") {
        alert('masukkan sisi dengan benar!')
    } else {
        const tampilSisi = document.querySelectorAll('.section-persegi .bawah .user .nomor-user');
        tampilRumus.style.display = 'block';
        for (let i = 0; i < tampilSisi.length; i++) {
            tampilSisi[i].innerText = sisi.value;
        }

        const tampilHasil = document.querySelector('.section-persegi .bawah .user .hasil');
        let hitung = parseInt(sisi.value) * parseInt(sisi.value);
        tampilHasil.innerText = hitung;
    }
    e.preventDefault();
});

const hitungKelilingPersegi = document.querySelector('.section-keliling-persegi .bawah .hitung');
hitungKelilingPersegi.addEventListener('click', function (e) {
    const sisi = document.querySelector('.section-keliling-persegi .bawah #sisi');
    if (sisi.value == "") {
        alert('masukkan sisi dengan benar!')
    } else {
        const tampilSisi = document.querySelector('.section-keliling-persegi .bawah .user .nomor-user');
        tampilRumusKeliling.style.display = 'block';
        tampilSisi.innerText = sisi.value;

        const tampilHasil = document.querySelector('.section-keliling-persegi .bawah .user .hasil');
        let hitung = 4 * parseInt(sisi.value);
        tampilHasil.innerText = hitung;
    }
    e.preventDefault();
});

const hitungPersegiPanjang = document.querySelector('.section-persegi-panjang .bawah .hitung');
hitungPersegiPanjang.addEventListener('click', function (e) {
    const panjang = document.querySelector('.section-persegi-panjang input[name="panjang"]');
    const lebar = document.querySelector('.section-persegi-panjang input[name="lebar"]');
    if (panjang.value == "" || lebar.value == "") {
        alert('masukkan panjang dan lebar dengan benar!')
    } else {
        const tampilPanjang = document.querySelector('.section-persegi-panjang .bawah .user .panjang-user');
        const tampilLebar = document.querySelector('.section-persegi-panjang .bawah .user .lebar-user');
        tampilRumus2.style.display = 'block';
        tampilPanjang.innerText = panjang.value;
        tampilLebar.innerText = lebar.value;

        const tampilHasil = document.querySelector('.section-persegi-panjang .bawah .user .hasil');
        let hitung = parseInt(panjang.value) * parseInt(lebar.value);
        tampilHasil.innerText = hitung;
    }
    e.preventDefault();
});

const hitungKelilingPersegiPanjang = document.querySelector('.section-keliling-persegi-panjang .bawah .hitung');
hitungKelilingPersegiPanjang.addEventListener('click', function (e) {
    const panjang = document.querySelector('.section-keliling-persegi-panjang input[name="panjang"]');
    const lebar = document.querySelector('.section-keliling-persegi-panjang input[name="lebar"]');
    if (panjang.value == "" || lebar.value == "") {
        alert('masukkan panjang dan lebar dengan benar!')
    } else {
        const tampilPanjang = document.querySelector('.section-keliling-persegi-panjang .bawah .user .panjang-user');
        const tampilLebar = document.querySelector('.section-keliling-persegi-panjang .bawah .user .lebar-user');
        tampilRumusKeliling2.style.display = 'block';
        tampilPanjang.innerText = panjang.value;
        tampilLebar.innerText = lebar.value;

        const tampilHasil = document.querySelector('.section-keliling-persegi-panjang .bawah .user .hasil');
        let hitung = 2 * (parseInt(panjang.value) + parseInt(lebar.value));
        tampilHasil.innerText = hitung;
    }
    e.preventDefault();
});


// ketika reset ditekan
const resetPersegi = document.querySelector('.section-persegi button[type="reset"]');
resetPersegi.addEventListener('click', function () {
    tampilRumus.style.display = 'none';
});

const resetKelilingPersegi = document.querySelector('.section-keliling-persegi button[type="reset"]');
resetKelilingPersegi.addEventListener('click', function () {
    tampilRumusKeliling.style.display = 'none';
});

const resetPersegiPanjang = document.querySelector('.section-persegi-panjang button[type="reset"]');
resetPersegiPanjang.addEventListener('click', function () {
    tampilRumus2.style.display = 'none';
});

const resetKelilingPersegiPanjang = document.querySelector('.section-keliling-persegi-panjang button[type="reset"]');
resetKelilingPersegiPanjang.addEventListener('click', function () {
    tampilRumusKeliling2.style.display = 'none';
});

