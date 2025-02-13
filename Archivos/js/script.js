document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    
    const cards = [
        { title: "YAMAHA", content: "MT 09", img: "C:/Users/Miguel Jara/OneDrive/Escritorio/HTML/Archivos/img/Mt09.png" },
        { title: "YAMAHA", content: "MT 07", img: "C:/Users/Miguel Jara/OneDrive/Escritorio/HTML/Archivos/img/MT07.jpg" },
        { title: "YAMAHA", content: "R1", img: "C:/Users/Miguel Jara/OneDrive/Escritorio/HTML/Archivos/img/r1.jpg" },
        { title: "YAMAHA", content: "YZ", img: "C:/Users/Miguel Jara/OneDrive/Escritorio/HTML/Archivos/img/YZ.jpg" },
        { title: "YAMAHA", content: "R6", img: "C:/Users/Miguel Jara/OneDrive/Escritorio/HTML/Archivos/img/R6.jpg" },
        { title: "YAMAHA", content: "TENERE", img: "C:/Users/Miguel Jara/OneDrive/Escritorio/HTML/Archivos/img/TENERIFE.jpg" },
        { title: "YAMAHA", content: "FZ 6", img: "C:/Users/Miguel Jara/OneDrive/Escritorio/HTML/Archivos/img/FZ6.webp" },
        { title: "YAMAHA", content: "TRACER GT 900", img: "C:/Users/Miguel Jara/OneDrive/Escritorio/HTML/Archivos/img/TRACERGT.jpg" },
        { title: "YAMAHA", content: "X MAX", img: "C:/Users/Miguel Jara/OneDrive/Escritorio/HTML/Archivos/img/xmax.webp" } 
    ];

    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <img src="${card.img}" alt="${card.title}" style="width:100%; border-radius: 10px;">
            <h2>${card.title}</h2>
            <p>${card.content}</p>
        `;
        gridContainer.appendChild(cardElement);
    });
});