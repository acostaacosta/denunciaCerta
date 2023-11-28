var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    } else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar() {
    if (showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if (window.innerWidth > 768 && showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
});
       // JavaScript para abrir e fechar popups de denúncia
       function openDenuncia(id) {
        var popup = document.getElementById("popup" + id);
        popup.style.display = "block";
    }

    function closeDenuncia(id) {
        var popup = document.getElementById("popup" + id);
        popup.style.display = "none";
    }

    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: { lat: -34.397, lng: 150.644 }
        });




        var cepInput = document.getElementById('cepInput');
        var locationInput = document.getElementById('locationInput');
        var dateTimeInput = document.getElementById('dateTimeInput');
        var autoCompleteButton = document.getElementById('autoCompleteButton'); // Botão de auto-completar

        var cepAutocomplete = new google.maps.places.Autocomplete(cepInput);
        var locationAutocomplete = new google.maps.places.Autocomplete(locationInput);

        cepAutocomplete.addListener('place_changed', function () {
            var place = cepAutocomplete.getPlace();

            if (!place.geometry) {
                window.alert("Nenhum local foi selecionado.");
                return;
            }

            map.setCenter(place.geometry.location);
        });

        locationAutocomplete.addListener('place_changed', function () {
            var place = locationAutocomplete.getPlace();

            if (!place.geometry) {
                window.alert("Nenhum local foi selecionado.");
                return;
            }

            map.setCenter(place.geometry.location);
        });

        dateTimeInput.addEventListener('change', function () {
            console.log('Data e hora selecionadas:', dateTimeInput.value);
        });

        // Adicione um evento de clique ao botão para acionar o auto-completar
        autoCompleteButton.addEventListener('click', function () {
            cepAutocomplete.set('placeFields', ['address_components', 'geometry']);
            locationAutocomplete.set('placeFields', ['address_components', 'geometry']);

            cepAutocomplete.addListener('place_changed', function () {
                var place = cepAutocomplete.getPlace();

                if (!place.geometry) {
                    window.alert("Nenhum local foi selecionado.");
                    return;
                }

                map.setCenter(place.geometry.location);
            });

            locationAutocomplete.addListener('place_changed', function () {
                var place = locationAutocomplete.getPlace();

                if (!place.geometry) {
                    window.alert("Nenhum local foi selecionado.");
                    return;
                }

                map.setCenter(place.geometry.location);
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        const messageInput = document.getElementById("message");
        const cepInput = document.getElementById("cepInput");
        const locationInput = document.getElementById("locationInput");
        const dateTimeInput = document.getElementById("dateTimeInput");
        const autoCompleteButton = document.getElementById("autoCompleteButton");
    
        autoCompleteButton.addEventListener("click", function () {
            const data = {
                message: messageInput.value,
                cep: cepInput.value,
                location: locationInput.value,
                dateTime: dateTimeInput.value,
            };
    
            // Converter o objeto de dados em uma string JSON
            const jsonData = JSON.stringify(data);
    
            // Enviar os dados para o servidor (neste exemplo, armazenaremos localmente)
            // Você pode usar uma tecnologia de backend para armazenar os dados em um arquivo txt
            // ou usar o localStorage ou sessionStorage para armazená-los no navegador.
    
            // Exemplo de armazenamento local
            localStorage.setItem("formData", jsonData);
        });
    });

    // Recuperar os dados do localStorage na outra página
const formData = localStorage.getItem("formData");
if (formData) {
    const data = JSON.parse(formData);
    // Use os dados para preencher os campos ou realizar outras operações
}