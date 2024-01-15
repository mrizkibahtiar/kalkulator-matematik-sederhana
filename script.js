const buttonPersegi = document.querySelector('.persegi');
const sectionPersegi = document.querySelector('.section-persegi');
const buttonPersegiPanjang = document.querySelector('.persegi-panjang');
const sectionPersegiPanjang = document.querySelector('.section-persegi-panjang');

// ketika button persegi ditekan
buttonPersegi.addEventListener('click', function () {
    sectionPersegi.style.display = 'block';
    sectionPersegiPanjang.style.display = 'none';
})

// ketika button persegi panjang ditekan
buttonPersegiPanjang.addEventListener('click', function () {
    sectionPersegiPanjang.style.display = 'block';
    sectionPersegi.style.display = 'none';
})

// ketika hitung persegi ditekan
const tampilRumus = document.querySelector('.section-persegi .bawah .user');
const tampilRumus2 = document.querySelector('.section-persegi-panjang .bawah .user');
const hitungPersegi = document.querySelector('.section-persegi .bawah .hitung')
hitungPersegi.addEventListener('click', function (e) {
    const sisi = document.querySelector('.bawah #sisi')
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
})

const hitungPersegiPanjang = document.querySelector('.section-persegi-panjang .bawah .hitung')
hitungPersegiPanjang.addEventListener('click', function (e) {
    const panjang = document.querySelector('input[name="panjang"]');
    const lebar = document.querySelector('input[name="lebar"]');
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
})


// ketika reset ditekan
const reset = document.querySelectorAll('button[type="reset"]');
for (let i = 0; i <= reset.length; i++) {
    reset[i].addEventListener('click', function () {
        tampilRumus.style.display = 'none';
        tampilRumus2.style.display = 'none';
    })
}

