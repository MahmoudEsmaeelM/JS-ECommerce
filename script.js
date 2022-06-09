var slideLeftArw = document.getElementById("slideLeftArw"),
    slideRightArw = document.getElementById("slideRightArw"),
    currentImg = document.getElementById("currentImg");

var tabletsBtn = document.getElementById("tabletsBtn");
var laptopsBtn = document.getElementById("laptopsBtn");
var allInOnesBtn = document.getElementById("allInOnesBtn");

var homeSection = document.getElementById("homeSection");
var aboutUsSection = document.getElementById("aboutUs");
var contactUsSection = document.getElementById("contactUs");
var homeBtn = document.getElementById("homeBtn");
var aboutUsBtn = document.getElementById("aboutUsBtn");
var contactUsBtn = document.getElementById("contactUsBtn");

var mySliderInterval;
var i = 1;

window.onload = function cycleRight () {
    mySliderInterval = window.setInterval(function() {
        if (i ==  mySliderImgs.length) {
            i = 0;
        }
        currentImg.setAttribute("src", mySliderImgs[i++])
    }, 3000);
}

var products = document.querySelectorAll("#products .product");

var mySliderImgs = [
    "./images/slide1.jpg", "./images/slide2.jpg",
    "images/slide3.jpg", "images/slide4.jpg"];

var laptops = [
    {
        image: "laptop1.jpg",
        title: "Chromebook One",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "1800"
    },{
        image: "laptop2.jpg",
        title: "HP 15-22",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "1100"
    },{
        image: "laptop3.jpg",
        title: "Lenovo Flex",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "1950"
    },{
        image: "laptop4.jpg",
        title: "HP Flex",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "1300"
    },{
        image: "laptop5.jpg",
        title: "DELL Flex",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "1600"
    },{
        image: "laptop6.jpg",
        title: "Chromebook Two",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "1600"
    },{
        image: "laptop7.jpg",
        title: "HP 14-21",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "1700"
    }
    ,{
        image: "laptop8.jpg",
        title: "Microsoft Flex",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "1200"
    }
];

var tablets = [
    {
        image: "tablet1.jpg",
        title: "iPad One",
        specs: "SD Quadcore 8th Gen 1.6 GHz - 4GB DDR4 RAM - 256GB Storage.",
        price: "800"
    },{
        image: "tablet2.jpg",
        title: "iPad One",
        specs: "SD Quadcore 8th Gen 1.6 GHz - 4GB DDR4 RAM - 256GB Storage.",
        price: "400"
    },{
        image: "tablet3.jpg",
        title: "Mi Pad One",
        specs: "SD Quadcore 8th Gen 1.6 GHz - 4GB DDR4 RAM - 256GB Storage.",
        price: "950"
    },{
        image: "tablet4.jpg",
        title: "Microsoft Pad 1",
        specs: "SD Quadcore 8th Gen 1.6 GHz - 4GB DDR4 RAM - 256GB Storage.",
        price: "300"
    },{
        image: "tablet5.jpg",
        title: "Surface One",
        specs: "SD Quadcore 8th Gen 1.6 GHz - 4GB DDR4 RAM - 256GB Storage.",
        price: "900"
    },{
        image: "tablet6.jpg",
        title: "iPad Two",
        specs: "SD Quadcore 8th Gen 1.6 GHz - 4GB DDR4 RAM - 256GB Storage.",
        price: "700"
    },{
        image: "tablet7.jpg",
        title: "Microsoft Pad 2",
        specs: "SD Quadcore 8th Gen 1.6 GHz - 4GB DDR4 RAM - 256GB Storage.",
        price: "950"
    }
    ,{
        image: "tablet8.jpg",
        title: "Mi Pad Two",
        specs: "SD Quadcore 8th Gen 1.6 GHz - 4GB DDR4 RAM - 256GB Storage.",
        price: "850"
    }
];

var allInOnes = [
    {
        image: "allinone1.jpg",
        title: "Apple All-In-One",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "2800"
    },{
        image: "allinone2.jpg",
        title: "Microsoft All-In-One",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "2100"
    },{
        image: "allinone3.jpg",
        title: "Surface All-In-One",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "2950"
    },{
        image: "allinone4.jpg",
        title: "Lenovo All-In-One",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "2300"
    },{
        image: "allinone5.jpg",
        title: "Microsoft All-In-One",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "2600"
    },{
        image: "allinone6.jpg",
        title: "Apple All-In-One",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "2150"
    },{
        image: "allinone7.jpg",
        title: "Lenovo All-In-One",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "2700"
    }
    ,{
        image: "allinone3.jpg",
        title: "Surface All-In-One",
        specs: "Intel Core i5 8th Gen 1.6 GHz - 8GB DDR4 RAM - 1TB Hard Disk - 256GB SSD - 4GB Graphics Card.",
        price: "1200"
    }
];

homeBtn.addEventListener("click", function () {
        aboutUsSection.style.display = "none";
        contactUsSection.style.display = "none";
        homeSection.style.display = "block";
})

aboutUsBtn.addEventListener("click", function () {
        contactUsSection.style.display = "none";
        homeSection.style.display = "none";
        aboutUsSection.style.display = "block";
})

contactUsBtn.addEventListener("click", function () {
    homeSection.style.display = "none";
    aboutUsSection.style.display = "none";
    contactUsSection.style.display = "block";
})

slideRightArw.addEventListener("click", function () {
    if (i == mySliderImgs.length) {
        i = 0;
    }
    currentImg.setAttribute("src", mySliderImgs[i++]);
})

slideLeftArw.addEventListener("click", function () {
    if (i == 0) {
        i = mySliderImgs.length - 1;
    }
    currentImg.setAttribute("src", mySliderImgs[i--]);
})

tabletsBtn.addEventListener("click", function showTablets() {
    for (let i = 0; i < products.length; i++) {
        var cardImg = document.querySelector(`#products #prodNom${i+1} img`);
        var cardTitle = document.querySelector(`#products #prodNom${i+1} .card-title`);
        var cardSpecs = document.querySelector(`#products #prodNom${i+1} .card-text`);
        var cardPrice = document.querySelector(`#products #prodNom${i+1} .itemPrice`);
        cardImg.setAttribute("src", `./images/${tablets[i].image}`);
        cardTitle.innerHTML = tablets[i].title;
        cardSpecs.innerHTML = tablets[i].specs;
        cardPrice.innerHTML = `${tablets[i].price}$`;
    }
});

laptopsBtn.addEventListener("click", function showLaptops() {
    for (let i = 0; i < products.length; i++) {
        var cardImg = document.querySelector(`#products #prodNom${i+1} img`);
        var cardTitle = document.querySelector(`#products #prodNom${i+1} .card-title`);
        var cardSpecs = document.querySelector(`#products #prodNom${i+1} .card-text`);
        var cardPrice = document.querySelector(`#products #prodNom${i+1} .itemPrice`);
        cardImg.setAttribute("src", `./images/${laptops[i].image}`);
        cardTitle.innerHTML = laptops[i].title;
        cardSpecs.innerHTML = laptops[i].specs;
        cardPrice.innerHTML = `${laptops[i].price}$`;
    }
});

allInOnesBtn.addEventListener("click", function showTablets() {
    for (let i = 0; i < products.length; i++) {
        var cardImg = document.querySelector(`#products #prodNom${i+1} img`);
        var cardTitle = document.querySelector(`#products #prodNom${i+1} .card-title`);
        var cardSpecs = document.querySelector(`#products #prodNom${i+1} .card-text`);
        var cardPrice = document.querySelector(`#products #prodNom${i+1} .itemPrice`);
        cardImg.setAttribute("src", `./images/${allInOnes[i].image}`);
        cardTitle.innerHTML = allInOnes[i].title;
        cardSpecs.innerHTML = allInOnes[i].specs;
        cardPrice.innerHTML = `${allInOnes[i].price}$`;
    }
});



var toTopBtn = document.getElementById("backToTop");

function goToTop() {
  document.documentElement.scrollTop = 0;
}

var myForm = document.getElementById("myForm");
myForm.onsubmit = function () {
    validateName();
    validateEmail();
}

function validateName() {
    var contactName = document.getElementById("contact-name").value;
    if (contactName.length == 0) {
        alert('Name is required');
    }
    else if (!contactName.match(/^[A-Za-z]\s{1}[A-Za-z]$/)) {
        alert('First and last name, please.');
    }
    return true;
}

function validateEmail() {
    var contactEmail = document.getElementById("contact-email").value;
    if (contactEmail.length == 0) {
        alert('Email is required');
    }
    else if (!contactEmail.match(/^[A-Za-z\._\-[0-9][@][A-Za-z][\.][a-z]{2,5}$/)) {
        alert('Email Invalid');
    }
    return true;
}