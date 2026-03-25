(function () {
  const A = window.WAYPOINT_ASSETS || {};

  const STORAGE_KEY = "waypoint_postcards_v1";

  const CITIES = {
    amsterdam: {
      label: "Amsterdam",
      preview: "Canals, bikes, and gallery-lined streets—perfect for wandering with a notebook.",
      sections: [
        { title: "Overview", body: "Compact and walkable, with world-class museums and café culture along the water." },
        { title: "Food", body: "Stroopwafels, herring stands, Indonesian rijsttafel, and cozy bruin cafés." },
        { title: "Main attractions", body: "Rijksmuseum, Van Gogh Museum, Anne Frank House, and the canal ring." },
        { title: "Things to do", body: "Rent a bike, cruise the canals, browse the Nine Streets, day trip to windmills." },
      ],
    },
    athens: {
      label: "Athens",
      preview: "Ancient stones above a lively city—history and modern energy in one skyline.",
      sections: [
        { title: "Overview", body: "The cradle of Western philosophy, layered with neighborhoods climbing the hills." },
        { title: "Food", body: "Souvlaki, fresh Greek salads, honeyed pastries, and rooftop dinners with a view." },
        { title: "Main attractions", body: "Acropolis and Parthenon, Ancient Agora, Temple of Olympian Zeus." },
        { title: "Things to do", body: "Sunset from Filopappou Hill, explore Plaka, ferry hop when you have time." },
      ],
    },
    venice: {
      label: "Venice",
      preview: "No roads—just water, bridges, and quiet corners away from the crowds.",
      sections: [
        { title: "Overview", body: "A lagoon city of palazzi and campi, best discovered on foot and by vaporetto." },
        { title: "Food", body: "Cicchetti bars, risotto al nero di seppia, fresh seafood, and spritz breaks." },
        { title: "Main attractions", body: "Piazza San Marco, Doge’s Palace, Rialto Bridge, islands of Murano and Burano." },
        { title: "Things to do", body: "Get lost in Castello, ride a traghetto, catch golden hour along the Zattere." },
      ],
    },
    sydney: {
      label: "Sydney",
      preview: "Harbor light, coastal walks, and a city that lives outdoors year-round.",
      sections: [
        { title: "Overview", body: "Australia’s sparkling harbor city, where beaches sit minutes from downtown." },
        { title: "Food", body: "Harborfront dining, fresh seafood, modern Australian cafés, and global neighborhoods." },
        { title: "Main attractions", body: "Sydney Opera House, Harbour Bridge, Bondi to Coogee walk, Royal Botanic Garden." },
        { title: "Things to do", body: "Ferry to Manly, surf lessons, weekend markets, and sunset from Mrs Macquarie’s Chair." },
      ],
    },
    berlin: {
      label: "Berlin",
      preview: "Grit, green space, and round-the-clock creativity in every district.",
      sections: [
        { title: "Overview", body: "A sprawling capital of reinvention—history memorialized beside experimental art." },
        { title: "Food", body: "Currywurst, döner, Neue Küche tasting menus, and legendary weekend brunch." },
        { title: "Main attractions", body: "Brandenburg Gate, East Side Gallery, Museum Island, Reichstag dome." },
        { title: "Things to do", body: "Browse Kreuzberg, lounge in Tiergarten, club culture if that’s your speed." },
      ],
    },
    tokyo: {
      label: "Tokyo",
      preview: "Neon canyons, serene shrines, and the best convenience-store snacks on Earth.",
      sections: [
        { title: "Overview", body: "Neighborhoods stack like mini cities—each with its own rhythm and specialty." },
        { title: "Food", body: "Ramen counters, sushi at dawn, depachika food halls, and seasonal wagashi." },
        { title: "Main attractions", body: "Shibuya crossing, Senso-ji, Meiji Shrine, teamLab, day trips to Kamakura or Nikko." },
        { title: "Things to do", body: "Yamanote line hopping, vintage shopping in Shimokitazawa, park picnics under sakura." },
      ],
    },
    ny: {
      label: "New York",
      preview: "Five boroughs, infinite grids, and energy that doesn’t clock out.",
      sections: [
        { title: "Overview", body: "Skyline drama, waterfront parks, and cultures colliding on every corner." },
        { title: "Food", body: "Pizza by the slice, bagels, dim sum in Flushing, tasting menus downtown." },
        { title: "Main attractions", body: "Central Park, MET, MoMA, Brooklyn Bridge, Statue of Liberty, Broadway." },
        { title: "Things to do", body: "Walk the High Line, museum-hop, catch live music in small rooms, ferry views." },
      ],
    },
    boston: {
      label: "Boston",
      preview: "Brick sidewalks, harbor breeze, and American history you can walk through.",
      sections: [
        { title: "Overview", body: "A human-scale city where campuses, commons, and the sea feel close together." },
        { title: "Food", body: "New England clam chowder, lobster rolls, North End Italian, craft beer pubs." },
        { title: "Main attractions", body: "Freedom Trail, Boston Common, MFA, Fenway, Charles River Esplanade." },
        { title: "Things to do", body: "Sail the harbor, explore Cambridge bookstores, autumn colors along the river." },
      ],
    },
    sanfran: {
      label: "San Francisco",
      preview: "Fog, hills, cable cars, and bridges that photograph themselves.",
      sections: [
        { title: "Overview", body: "A small city with steep streets, bay views, and fiercely local neighborhoods." },
        { title: "Food", body: "Sourdough, Mission burritos, farm-to-table dining, wine country day trips." },
        { title: "Main attractions", body: "Golden Gate Bridge, Alcatraz, Fisherman’s Wharf, Painted Ladies, de Young." },
        { title: "Things to do", body: "Ride a cable car, walk Lands End, browse Ferry Building, sunset at Twin Peaks." },
      ],
    },
    barcelona: {
      label: "Barcelona",
      preview: "Gaudí curves, Mediterranean light, and late dinners that stretch into the night.",
      sections: [
        { title: "Overview", body: "Catalan capital where Gothic alleys open onto modernist masterpieces." },
        { title: "Food", body: "Tapas crawls, paella by the sea, vermut hour, crema catalana for dessert." },
        { title: "Main attractions", body: "Sagrada Família, Park Güell, Gothic Quarter, Picasso Museum, Barceloneta beach." },
        { title: "Things to do", body: "Montjuïc at sunset, browse El Born, day trip to Montserrat or Sitges." },
      ],
    },
  };

  let currentCity = null;

  function setImgSrc(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    if (url) {
      el.src = url;
      el.removeAttribute("hidden");
    }
  }

  setImgSrc("splash-plane-img", A.planeLarge);
  setImgSrc("map-bg-img", A.mapBg);
  setImgSrc("postcard-front-img", A.postcardFront);
  setImgSrc("postcard-back-img", A.postcardBack);
  setImgSrc("plane-lg", A.planeLarge);
  setImgSrc("plane-sm", A.planeSmall);

  const tags = A.tags || {};
  document.querySelectorAll(".map-pin img[data-tag]").forEach((img) => {
    const key = img.getAttribute("data-tag");
    if (tags[key]) img.src = tags[key];
  });

  const views = ["splash", "map", "preview", "detail", "postcard", "collection"];

  let splashRevealTimer = null;

  function beginSplashAnimation() {
    const splash = document.getElementById("view-splash");
    const startBtn = document.getElementById("btn-start");
    if (!splash || !startBtn) return;
    clearTimeout(splashRevealTimer);
    splashRevealTimer = null;
    splash.classList.remove("splash--ready");
    splash.classList.remove("splash--animate");
    startBtn.setAttribute("aria-disabled", "true");
    startBtn.disabled = true;
    void splash.offsetWidth;
    splash.classList.add("splash--animate");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      splash.classList.add("splash--ready");
      startBtn.setAttribute("aria-disabled", "false");
      startBtn.disabled = false;
      return;
    }
    splashRevealTimer = setTimeout(() => {
      splash.classList.add("splash--ready");
      startBtn.setAttribute("aria-disabled", "false");
      startBtn.disabled = false;
      splashRevealTimer = null;
    }, 2450);
  }

  function showView(id) {
    if (id !== "splash") {
      clearTimeout(splashRevealTimer);
      splashRevealTimer = null;
    }
    views.forEach((v) => {
      const el = document.getElementById("view-" + v);
      if (el) el.hidden = v !== id;
    });
    if (id === "splash") beginSplashAnimation();
  }

  function openCity(cityId) {
    const city = CITIES[cityId];
    if (!city) return;
    currentCity = cityId;
    document.getElementById("preview-kicker").textContent = "Destination";
    document.getElementById("preview-title").textContent = city.label;
    document.getElementById("preview-copy").textContent = city.preview;
    document.getElementById("detail-title").textContent = city.label;
    const wrap = document.getElementById("detail-sections");
    wrap.innerHTML = "";
    city.sections.forEach((s) => {
      const block = document.createElement("div");
      block.className = "detail-block";
      block.innerHTML = "<h2>" + s.title + "</h2><p>" + s.body + "</p>";
      wrap.appendChild(block);
    });
    showView("preview");
  }

  function loadCollection() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveCollection(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  function renderCollection() {
    const items = loadCollection();
    const list = document.getElementById("collection-list");
    const empty = document.getElementById("collection-empty");
    list.innerHTML = "";
    if (items.length === 0) {
      empty.hidden = false;
      return;
    }
    empty.hidden = true;
    items
      .slice()
      .reverse()
      .forEach((entry) => {
        const city = CITIES[entry.cityId];
        const card = document.createElement("article");
        card.className = "collection-card";
        const title = city ? city.label : entry.cityId;
        const h3 = document.createElement("h3");
        h3.textContent = title;
        const meta = document.createElement("p");
        meta.className = "meta";
        meta.textContent = entry.savedAt || "";
        const body = document.createElement("p");
        body.textContent = entry.note || "";
        card.appendChild(h3);
        card.appendChild(meta);
        card.appendChild(body);
        list.appendChild(card);
      });
  }

  const postcardEl = document.getElementById("postcard");

  function setFlipped(on) {
    postcardEl.classList.toggle("postcard--flipped", on);
  }

  document.querySelectorAll("[data-flip]").forEach((btn) => {
    btn.addEventListener("click", () => {
      postcardEl.classList.toggle("postcard--flipped");
    });
  });

  document.getElementById("btn-start")?.addEventListener("click", () => {
    const splash = document.getElementById("view-splash");
    if (splash && !splash.classList.contains("splash--ready")) return;
    showView("map");
  });

  document.getElementById("btn-map-back")?.addEventListener("click", () => showView("splash"));

  document.getElementById("btn-map-collection")?.addEventListener("click", () => {
    renderCollection();
    showView("collection");
  });

  document.querySelectorAll(".map-pin").forEach((btn) => {
    btn.addEventListener("click", () => openCity(btn.getAttribute("data-city")));
  });

  document.getElementById("btn-preview-back")?.addEventListener("click", () => showView("map"));

  document.getElementById("btn-explore")?.addEventListener("click", () => showView("detail"));

  document.getElementById("btn-detail-back")?.addEventListener("click", () => showView("preview"));

  document.getElementById("btn-write-postcard")?.addEventListener("click", () => {
    document.getElementById("postcard-note").value = "";
    setFlipped(false);
    showView("postcard");
  });

  document.getElementById("btn-postcard-back")?.addEventListener("click", () => showView("detail"));

  document.getElementById("btn-save-postcard")?.addEventListener("click", () => {
    const note = document.getElementById("postcard-note").value.trim();
    const items = loadCollection();
    items.push({
      cityId: currentCity,
      note: note || "(No message)",
      savedAt: new Date().toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }),
    });
    saveCollection(items);
    renderCollection();
    showView("collection");
  });

  document.getElementById("btn-collection-back")?.addEventListener("click", () => showView("map"));

  showView("splash");
})();
