console.log("Arquivo JavaScript carregado corretamente.");
function mostrarPesquisa(){
    var informacao = document.getElementById("pesquisa").value.toUpperCase();
    var currentPath = window.location.pathname;


    if (informacao === "ZEUS") {
        // Verifica se o usuário já está na pasta 'pesquisados'
        if (currentPath.includes("/pesquisados/")) {
            // Se já estiver na pasta 'pesquisados', redireciona diretamente para o arquivo
            window.location.href = "pesquisa_zeus.html";
        } else {
            // Se não estiver, redireciona para a pasta 'pesquisados'
            window.location.href = "pesquisados/pesquisa_zeus.html";
        }

    } else if (informacao === "HERA") {
         if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_hera.html";
        } else {
            window.location.href = "pesquisados/pesquisa_hera.html";
        }

    }else if (informacao === "HESTIA") {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_hestia.html";
        } else {
            window.location.href = "pesquisados/pesquisa_hestia.html";
        }

    }else if (informacao === "DEMETER") {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_demeter.html";
        } else {
            window.location.href = "pesquisados/demeter_hera.html";
        }

    }else if (informacao === "POSEIDON") {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_poseidon.html";
        } else {
            window.location.href = "pesquisados/pesquisa_poseidon.html";
        }

    }else if (informacao === "APOLO") {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_apolo.html";
        } else {
            window.location.href = "pesquisados/pesquisa_apolo.html";
        }
        
    }else if (informacao === "ARTEMIS") {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_artemis.html";
        } else {
            window.location.href = "pesquisados/pesquisa_artemis.html";
        }

    }else if (informacao === "DIONISIO") {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_dionisio.html";
        } else {
            window.location.href = "pesquisados/pesquisa_dionisio.html";
        }

    }else if (informacao === "AFRODITE") {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_afrodite.html";
        } else {
            window.location.href = "pesquisados/pesquisa_afrodite.html";
        }

    }else if (informacao === "ARES") {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_ares.html";
        } else {
            window.location.href = "pesquisados/pesquisa_ares.html";
        }

    }else if (informacao === "HEFESTO") {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_hefesto.html";
        } else {
            window.location.href = "pesquisados/pesquisa_hefesto.html";
        }

    }else if (informacao === "HERMES") {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_hermes.html";
        } else {
            window.location.href = "pesquisados/pesquisa_hermes.html";
        }

    }else if (informacao === "ATENA") {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_atena.html";
        } else {
            window.location.href = "pesquisados/pesquisa_atena.html";
        }

    } else if (informacao === "HADES") {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_hades.html";
        } else {
            window.location.href = "pesquisados/pesquisa_hades.html";
        }

    } else {
        alert("Nenhum resultado encontrado para sua pesquisa.");
    }
    
}

document.getElementById("pesquisa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita que o formulário seja enviado, se for o caso
        mostrarPesquisa(); // Chama a função de pesquisa
    }
});
