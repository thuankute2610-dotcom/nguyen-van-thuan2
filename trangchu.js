const dsdongvat = [
    {
        ten: "Sư Tử",
        hinhanh: "./images/sutu/sutu1.jpg",
        imgCount: 6,
        folder: "./images/sutu",
        diaiem: "Khu vực: Châu Phi",
        prefix: "sutu",
        mota: "Sư tử là chúa tể sơn lâm với sức mạnh và bộ bờm oai vệ.",
        id: "sutu"
    },
    {
        ten: "Chim Cánh Cụt",
        hinhanh: "./images/canhcut/canhcut1.jpg",
        imgCount: 5,
        folder: "./images/canhcut",
        diaiem: "Khu vực: Nam Cực",
        prefix: "canhcut",
        mota: "Loài chim không bay nhưng bơi lội cực giỏi trong nước lạnh.",
        id: "chimcanhcut"
    },
    {
        ten: "Voi",
        hinhanh: "./images/voi/voi1.jpg",
        imgCount: 7,
        folder: "./images/voi",
        diaiem: "Khu vực: Châu Á & Châu Phi",
        prefix: "voi",
        mota: "Động vật trên cạn lớn nhất thế giới với trí thông minh tuyệt vời.",
        id: "voi"
    },
    {
        ten: "Gấu Trúc",
        hinhanh: "./images/gau/gau1.jpg",
        imgCount: 6,
        folder: "./images/gau",
        diaiem: "Khu vực: Trung Quốc",
        prefix: "gau",
        mota: "Loài gấu hiền lành, thức ăn chủ yếu là lá tre và trúc.",
        id: "gautruc"
    }
];

const hienthids = document.getElementById("dongvatList");

dsdongvat.forEach(pet => {
    const the = document.createElement("div");
    the.classList.add("dongvat-card"); // Giữ class cũ để dùng style.css
    the.innerHTML = `
        <img src="${pet.hinhanh}" alt="${pet.ten}">
        <div class="dongvat-name">${pet.ten}</div>
    `;
    
    the.addEventListener("click", () => {
        localStorage.setItem('dongvatSelected', JSON.stringify(pet));
        window.location.href = 'chitiet.html';
    });
    hienthids.appendChild(the);
});