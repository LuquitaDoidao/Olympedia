console.log("Arquivo JavaScript carregado corretamente.");
function mostrarPesquisa(){
    var informacao = document.getElementById("pesquisa").value.toUpperCase();
    var currentPath = window.location.pathname;


    if ((informacao === "ZEUS") || (informacao === "JUPITER")) {
        // Verifica se o usuário já está na pasta 'pesquisados'
        if (currentPath.includes("/pesquisados/")) {
            // Se já estiver na pasta 'pesquisados', redireciona diretamente para o arquivo
            window.location.href = "pesquisa_zeus.html";
        } else {
            // Se não estiver, redireciona para a pasta 'pesquisados'
            window.location.href = "pesquisados/pesquisa_zeus.html";
        }

    } else if ((informacao === "HERA") || (informacao === "JUNO")) {
         if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_hera.html";
        } else {
            window.location.href = "pesquisados/pesquisa_hera.html";
        }

    }else if ((informacao === "HESTIA") || (informacao === "VESTA")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_hestia.html";
        } else {
            window.location.href = "pesquisados/pesquisa_hestia.html";
        }

    }else if ((informacao === "DEMETER") || (informacao === "CEREA")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_demeter.html";
        } else {
            window.location.href = "pesquisados/demeter_hera.html";
        }

    }else if ((informacao === "POSEIDON") || (informacao === "NETUNO")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_poseidon.html";
        } else {
            window.location.href = "pesquisados/pesquisa_poseidon.html";
        }

    }else if ((informacao === "APOLO") || (informacao === "FEBO")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_apolo.html";
        } else {
            window.location.href = "pesquisados/pesquisa_apolo.html";
        }
        
    }else if ((informacao === "ARTEMIS") || (informacao === "DIANA")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_artemis.html";
        } else {
            window.location.href = "pesquisados/pesquisa_artemis.html";
        }

    }else if ((informacao === "DIONISIO") || (informacao === "BACO")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_dionisio.html";
        } else {
            window.location.href = "pesquisados/pesquisa_dionisio.html";
        }

    }else if ((informacao === "AFRODITE") || (informacao === "VENUS")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_afrodite.html";
        } else {
            window.location.href = "pesquisados/pesquisa_afrodite.html";
        }

    }else if ((informacao === "ARES") || (informacao === "MARTE")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_ares.html";
        } else {
            window.location.href = "pesquisados/pesquisa_ares.html";
        }

    }else if ((informacao === "HEFESTO") || (informacao === "VULCANO")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_hefesto.html";
        } else {
            window.location.href = "pesquisados/pesquisa_hefesto.html";
        }

    }else if ((informacao === "HERMES") || (informacao === "MERCURIO")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_hermes.html";
        } else {
            window.location.href = "pesquisados/pesquisa_hermes.html";
        }

    }else if ((informacao === "ATENA") || (informacao === "MINERVA")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_atena.html";
        } else {
            window.location.href = "pesquisados/pesquisa_atena.html";
        }

    } else if ((informacao === "HADES") || (informacao === "PLUTÃO")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_hades.html";
        } else {
            window.location.href = "pesquisados/pesquisa_hades.html";
        }

    }else if ((informacao === "EOLO") || (informacao === "AEOLUS")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_eolo.html";
        } else {
            window.location.href = "pesquisados/pesquisa_eolo.html";
        }

    }else if ((informacao === "EROS") || (informacao === "CUPIDO")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_eros.html";
        } else {
            window.location.href = "pesquisados/pesquisa_eros.html";
        }

    }else if ((informacao === "HEBE") || (informacao === "JUVENTAS")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_hebe.html";
        } else {
            window.location.href = "pesquisados/pesquisa_hebe.html";
        }

    }else if ((informacao === "HECATE") || (informacao === "TRIVIA")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_hecate.html";
        } else {
            window.location.href = "pesquisados/pesquisa_hecate.html";
        }

    }else if ((informacao === "HIPINOS") || (informacao === "SOMNUS")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_hipinos.html";
        } else {
            window.location.href = "pesquisados/pesquisa_hipinoshtml";
        }

    }else if (informacao === "IRIS") {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_iris.html";
        } else {
            window.location.href = "pesquisados/pesquisa_iris.html";
        }

    }else if ((informacao === "NEMESIS") || (informacao === "INVIDIA")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_nemesis.html";
        } else {
            window.location.href = "pesquisados/pesquisa_nemesis.html";
        }

    }else if ((informacao === "PERSEFONE") || (informacao === "PROSERPINA")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_persefone.html";
        } else {
            window.location.href = "pesquisados/pesquisa_persefone.html";
        }

    }else if ((informacao === "TIQUE") || (informacao === "FORTUNA")) {
        if (currentPath.includes("/pesquisados/")) {
            window.location.href = "pesquisa_tique.html";
        } else {
            window.location.href = "pesquisados/pesquisa_tique.html";
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
