document.addEventListener("DOMContentLoaded", function() {
    // Logoları seç
    var logos = document.querySelectorAll(".logo");

    // Her bir logonun tıklanma olayını dinle
    logos.forEach(function(logo) {
        logo.addEventListener("click", function(event) {
            // Logoya tiklandiginda animasyonu baslat
            logo.classList.add("logo-clicked");

            // Logoya tiklandiginda, linkin acilmasini geciktirerek animasyonun tamamlanmasini bekleyin
            setTimeout(function() {
                // Logoya ait olan linkin URL'ini al ve yeni bir sekmede ac
                var link = logo.parentNode.getAttribute("href");
                window.open(link, "_blank");
                
                // Animasyonu sıfırla
                logo.classList.remove("logo-clicked");
            }, 500); // Animasyon süresine göre ayarlayabilirsiniz
        });
    });
});
