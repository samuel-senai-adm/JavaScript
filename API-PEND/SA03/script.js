/* =========================================
   WORLD EXPLORER - SCRIPT PRINCIPAL (v5)
========================================= */

// ==============================
// CONFIGURAÇÃO DA API
// ==============================

const API_KEY = "rc_live_930522feb01546d08f9af130f9672dec";
const API_BASE = "https://api.restcountries.com/countries/v5";


// ==============================
// ELEMENTOS DO DOM
// ==============================

const countryInput = document.getElementById("countryInput");
const searchButton = document.getElementById("searchButton");
const message = document.getElementById("message");

const countrySection = document.getElementById("countrySection");
const countryFlag = document.getElementById("countryFlag");
const countryCode = document.getElementById("countryCode");
const countryName = document.getElementById("countryName");
const countryOfficialName = document.getElementById("countryOfficialName");

const capitalEl = document.getElementById("capital");
const populationEl = document.getElementById("population");
const regionEl = document.getElementById("region");
const currencyEl = document.getElementById("currency");
const languagesEl = document.getElementById("languages");
const timezoneEl = document.getElementById("timezone");

const locationText = document.getElementById("locationText");
const coordinatesEl = document.getElementById("coordinates");


// ==============================
// MAPA (LEAFLET)
// ==============================

let map = null;
let marker = null;

function initMap() {
    map = L.map("map").setView([20, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap"
    }).addTo(map);
}

window.addEventListener("load", initMap);


// ==============================
// FUNÇÕES AUXILIARES
// ==============================

function showMessage(text, type = "error") {
    message.textContent = text;
    message.style.color = type === "error" ? "#dc2626" : "#15803d";
}

function clearMessage() {
    message.textContent = "";
}

function formatNumber(num) {
    if (num === undefined || num === null) return "---";
    return num.toLocaleString("pt-BR");
}

// v5: currencies é um array de objetos { code, name, symbol }
function formatCurrencies(currencies) {
    if (!currencies || !Array.isArray(currencies) || currencies.length === 0) {
        return "---";
    }
    return currencies
        .map(c => `${c.name} (${c.symbol || c.code || "-"})`)
        .join(", ");
}

// v5: languages é um array de objetos { name, native_name }
function formatLanguages(languages) {
    if (!languages || !Array.isArray(languages) || languages.length === 0) {
        return "---";
    }
    return languages.map(l => l.name).join(", ");
}

// v5: timezones pode vir como array de strings ou dentro de um objeto
function formatTimezones(country) {
    // Tenta diferentes formatos possíveis
    const tz = country.timezones || country.time_zones;
    if (!tz) return "---";
    if (Array.isArray(tz)) return tz.join(", ");
    if (typeof tz === "string") return tz;
    return "---";
}

// v5: capitals é um array de objetos { name, coordinates: { lat, lng } }
function formatCapitals(capitals) {
    if (!capitals || !Array.isArray(capitals) || capitals.length === 0) {
        return "---";
    }
    return capitals.map(c => c.name).filter(Boolean).join(", ");
}

// Extrai coordenadas da capital
function getCoordinates(country) {
    const capital = country.capitals?.[0];
    const lat = capital?.coordinates?.lat;
    const lng = capital?.coordinates?.lng;

    if (typeof lat === "number" && typeof lng === "number") {
        return { lat, lng };
    }
    return null;
}


// ==============================
// BUSCAR PAÍS - REST COUNTRIES v5
// ==============================

async function searchCountry() {
    const query = countryInput.value.trim();

    if (!query) {
        showMessage("Por favor, digite o nome de um país.");
        return;
    }

    clearMessage();
    searchButton.disabled = true;
    searchButton.textContent = "⏳ Buscando...";

    try {
        const url = `${API_BASE}?q=${encodeURIComponent(query)}`;

        const response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${API_KEY}`
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Chave de API inválida ou expirada.");
            }
            if (response.status === 404) {
                throw new Error("País não encontrado. Verifique o nome e tente novamente.");
            }
            if (response.status === 429) {
                throw new Error("Limite de requisições atingido. Aguarde um momento.");
            }
            throw new Error(`Erro ao consultar a API (${response.status}).`);
        }

        const data = await response.json();

        // v5: os resultados ficam em data.objects
        const countries = data?.data?.objects;

        if (!countries || countries.length === 0) {
            throw new Error("País não encontrado.");
        }

        // Pega o primeiro resultado
        const country = countries[0];

        // Log para debug (remova depois)
        console.log("País recebido:", country);

        renderCountry(country);
        updateMap(country);

    } catch (error) {
        showMessage(error.message || "Erro inesperado.");
        countrySection.classList.add("hidden");
        console.error(error);
    } finally {
        searchButton.disabled = false;
        searchButton.textContent = "🔎 Pesquisar";
    }
}


// ==============================
// RENDERIZAR DADOS DO PAÍS
// ==============================

function renderCountry(country) {
    // Bandeira — v5: flag.url_svg / flag.url_png
    countryFlag.src =
        country.flag?.url_svg ||
        country.flag?.url_png ||
        "";
    countryFlag.alt = `Bandeira de ${country.names?.common || "país"}`;

    // Código (alpha_3) e nomes — v5: codes.alpha_3 / names.common / names.official
    countryCode.textContent = country.codes?.alpha_3 || "---";
    countryName.textContent = country.names?.common || "---";
    countryOfficialName.textContent = country.names?.official || "---";

    // Capital — v5: capitals (array de objetos)
    capitalEl.textContent = formatCapitals(country.capitals);

    // População
    populationEl.textContent = formatNumber(country.population);

    // Região (+ sub-região)
    let regionText = country.region || "---";
    if (country.subregion) {
        regionText += ` — ${country.subregion}`;
    }
    regionEl.textContent = regionText;

    // Moeda
    currencyEl.textContent = formatCurrencies(country.currencies);

    // Idiomas
    languagesEl.textContent = formatLanguages(country.languages);

    // Fuso horário
    timezoneEl.textContent = formatTimezones(country);

    // Mostra a seção
    countrySection.classList.remove("hidden");
}


// ==============================
// ATUALIZAR MAPA
// ==============================

function updateMap(country) {
    const coords = getCoordinates(country);

    if (!coords) {
        locationText.textContent = "📍 Localização não disponível.";
        coordinatesEl.textContent = "Latitude: -- | Longitude: --";
        return;
    }

    const { lat, lng } = coords;

    locationText.textContent =
        `📍 ${country.names?.common || ""} — ${country.region || ""}`;

    coordinatesEl.textContent =
        `Latitude: ${lat.toFixed(4)} | Longitude: ${lng.toFixed(4)}`;

    if (!map) return;

    // 🔧 Garante que o Leaflet conheça o tamanho real do container
    map.invalidateSize();

    if (marker) {
        map.removeLayer(marker);
    }

    map.setView([lat, lng], 10);

    marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(
        `<strong>${country.names?.common || ""}</strong><br>` +
        `Capital: ${formatCapitals(country.capitals)}`
    ).openPopup();
}

// ==============================
// EVENTOS
// ==============================

searchButton.addEventListener("click", searchCountry);

countryInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchCountry();
    }
});