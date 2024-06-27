
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Função para download condicional
    function downloadDocument() {
        // Verificar se o modo claro está ativado
        var isLightMode = document.body.classList.contains('light-mode');

        // Decidir qual documento baixar com base no modo claro
        var downloadLink = document.createElement('a');
        downloadLink.href = isLightMode ? 'Docclaro.pdf' : 'Docescuro.pdf';
        downloadLink.download = 'Fillipy-Currículo.pdf';
        downloadLink.click();
    }

    // Adicionar um ouvinte de evento ao botão de download
    document.querySelector(".main-btn").addEventListener("click", downloadDocument);
    document.querySelector(".main2-btn").addEventListener("click", downloadDocument);

})();
