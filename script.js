document.addEventListener("DOMContentLoaded", function() {
    // Logoları seç
    var logos = document.querySelectorAll(".logo");

    // Her bir logonun üzerine gelme ve ayrılma olaylarını dinle
    logos.forEach(function(logo) {
        logo.addEventListener("mouseenter", function(event) {
            // Logoya üzerine gelindiğinde, logonun altında bulunan linki göster
            var link = logo.parentNode;
            link.classList.add("show-link");
        });

        logo.addEventListener("mouseleave", function(event) {
            // Logodan çekildiğinde, gösterilen linki gizle
            var link = logo.parentNode;
            link.classList.remove("show-link");
        });

        logo.addEventListener("click", function(event) {
            // Logoya tiklandiginda, linkin URL'ini al ve yeni bir sekmede ac
            var linkURL = logo.parentNode.getAttribute("href");
            window.open(linkURL, "_blank");
        });
    });
});
