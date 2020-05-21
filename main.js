const frontImg = document.querySelector(".front");
const middleImg = document.querySelector(".middle");
const h1Html = document.querySelector(".member h1");
const h2Html = document.querySelector(".member h2");
const quote = document.querySelector(".quote h3");


const frontImages = ['img/rafal_front.jpg', 'img/aska_front.jpg', 'img/middle_Lis.jpg', 'img/Lu_front.JPG'];
const middleImages = ['img/zay_R.jpg', 'img/zay_A.jpg', 'img/zay_Lis.jpg', 'img/zay_Lu.jpg'];


const names = ['Rafał', 'Aśka', 'Luiza', 'Luna'];
const professions = ['Naprawi wszystko', 'Zepsuje wszystko', 'Spróbuje zepsuć, nie zawsze wyjdzie',
    'Nie ma kciuków, więc nie zepsuje'
];
const quotes = [`"Jeśli chcesz, żeby było dobrze zrobione, zrób to sam"`,
    `"Nie to dobre, co dobre a co się komu podoba..."`,
    `"Zi-zi", "Tej-te"`, `"Wraf!"`
]

let i = 0;
const timeInterval = 4000;

function changeElement() {
    i++;

    if (i >= names.length) {
        i = 0;
    }

    frontImg.src = frontImages[i];
    middleImg.src = middleImages[i];
    h1Html.textContent = names[i];
    h2Html.textContent = professions[i];
    quote.textContent = quotes[i];
}

setInterval(changeElement, timeInterval)