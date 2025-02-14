document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".imagem-principal").forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            let target = this.getAttribute("data-target");
            let grupo = document.getElementById(target);

            if (grupo) { // Verifica se o elemento existe
                if (grupo.style.display === "none" || grupo.style.display === "") {
                    grupo.style.display = "block";
                } else {
                    grupo.style.display = "none";
                }
            } else {
                console.error("Elemento não encontrado: " + target);
            }
        });
    });
});
