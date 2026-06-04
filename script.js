window.addEventListener("load", () => {
    const preloader    = document.getElementById("loader-viewport");
    const appContent   = document.getElementById("garden-app");
    const manimVideo   = document.getElementById("manim-video");

    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("fade-out");

            if (appContent) appContent.classList.add("fade-in");

            if (manimVideo) {
                manimVideo.currentTime = 0;
                manimVideo.play().catch(err =>
                    console.log("Video autoplay caught by browser policy:", err)
                );
            }

            setTimeout(() => preloader.remove(), 500);

        }, 3000);
    }
});

const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn !== "true") {
    window.location.href = "index.html";
} else {
    console.log("Welcome back! Logged in as:", localStorage.getItem("userEmail"));
}


// ─── DATA ────────────────────────────────────────────────────────────────────

const softwareData = {
    vscode: {
        title: "Visual Studio Code",
        tagline: "The industry-standard, ultra-customizable source-code editor.",
        description: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes.",
        extensions: [
            {
                name: "Prettier - Code Formatter",
                desc: "Enforces a consistent style by parsing your code and re-printing it with its own rules, reducing manual layout formatting effort completely."
            },
            {
                name: "Error Lens",
                desc: "Improves language diagnostics features by making diagnostics stand out more prominently, highlighting the entire line and printing messages inline."
            },
            {
                name: "Todo Tree",
                desc: "Searches your workspace for comment tags like TODO and FIXME, then displays them beautifully organized in a tree view container in the activity bar."
            },
            {
                name: "Best Themes Redefined",
                desc: "Soothing pastel high-contrast, low-brightness theme designed explicitly to diminish eye strain during extended late-night coding intervals. Specifically, 'One Monokai Darker'"
            },
            {
                name: "Custom Fonts",
                desc: "Use custom fonts like Fira Code, JetBrains Mono, and more to enchance readability and aesthetics with features like ligatures and improved character spacing."
            }
        ],
        downloadUrl: "https://code.visualstudio.com/"
    },

    obs: {
        title: "OBS Studio",
        tagline: "Free and open-source software for video recording and live streaming.",
        description: "Open Broadcaster Software Studio is the gold standard for screen capture, broadcasting, and local gameplay recording. It features real-time source and device capture, scene composition, encoding, and audio mixing without adding watermarks or artificial limits to your workflow.",
        extensions: [
            {
                name: "Hardware Encoding (NVENC / AMF)",
                desc: "Using NVIDIA NVENC or AMD HW H.264/H.265 offloads encoding tasks entirely to your GPU's dedicated silicon chip, maximizing game performance and avoiding encoding overloads."
            },
            {
                name: "Software Encoding (x264)",
                desc: "Utilizes your system CPU for video encoding. While it can offer crisp detail at lower bitrates, it incurs a massive processor tax that can cause heavy frame drops in resource-intensive tasks."
            },
            {
                name: "Safe Recording Formats (.mkv)",
                desc: "Always set your output to record in .mkv. Unlike .mp4, an .mkv file preserves your data up to the exact millisecond of a crash or power outage, preventing the entire video from corrupting."
            },
            {
                name: "Automatically Remux to .mp4",
                desc: "Enable 'Automatically remux to mp4' in Advanced settings. OBS will instantly clone your safe .mkv file into a universally compatible .mp4 format the second your recording stops cleanly."
            },
            {
                name: "CQP (Constant Rate Factor)",
                desc: "The ideal rate control for local recordings. Set your CQP level between 18 and 23 to dynamically allocate bitrate based on visual complexity rather than wasting space on a static target."
            }
        ],
        downloadUrl: "https://obsproject.com/"
    },

    powertoys: {
        title: "PowerToys",
        tagline: "System utilities to customize and streamline your Windows experience.",
        description: "A tool made from Microsoft, which includes useful features that will surely help you!",
        extensions: [
            {
                name: "1. Download and Install",
                desc: "Visit the official Microsoft PowerToys page, link below, and download the latest release. Run the installer and follow the prompts to correctly set everything up!"
            },
            {
                name: "2. Explore the Utilities",
                desc: "Manage your windows with FancyZones, manage Input & Outputs, play around with System Tools, File Managment, and Advanced Tools, these include lots of utilities that are easy to use!"
            },
            {
                name: "3. Customize Your Experience",
                desc: "Customize your Windows! Using Command Palette to easily find your files, launch apps, and do so much more with the most extensible launcher and dock."
            }
        ],
        downloadUrl: "https://learn.microsoft.com/en-us/windows/powertoys/"
    },

    virtualbox: {
        title: "VirtualBox",
        tagline: "Powerful x86 and AMD64/Intel64 virtualization engine.",
        description: "A tool that will let you run a machine, inside of your machine! Which you can test with.",
        extensions: [
            {
                name: "Snapshot System",
                desc: "Save the absolute exact state of a virtual desktop layout. If an optimization brick file ruins the engine, roll it back to your secure snapshot in seconds."
            },
            {
                name: "Guest Additions",
                desc: "A suite of drivers installed inside the virtual OS providing seamless mouse integration, shared clipboards, drag-and-drop file support, and native monitor resolutions."
            },
            {
                name: "Virtual Media Manager",
                desc: "Dynamically allocate storage parameters so your secondary host machine only scales on your storage drives as it populates internal content layers."
            }
        ],
        downloadUrl: "https://www.virtualbox.org/"
    }
};

const tutorialData = {
    ligatures: {
        title: "VSCode Font Ligatures",
        tagline: "Coding • Visual ergonomics for development workflows.",
        description: "Font ligatures transform multi-character operators like <code>==</code>, <code>=&gt;</code>, <code>===</code>, and <code>!=</code> into single, elegant glyphs. This reduces visual noise and allows your brain to parse code structures faster.",
        steps: [
            {
                name: "1. Download a Compatible Font",
                desc: "Download and install a font that supports ligatures, such as <strong>JetBrains Mono</strong> or <strong>Fira Code</strong> onto your operating system."
            },
            {
                name: "2. Open VSCode Settings JSON",
                desc: "Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> (or <kbd>Cmd</kbd> on Mac), type 'Open User Settings (JSON)', and select it."
            },
            {
                name: "3. Update Your Configuration",
                desc: "Add or update these lines inside your settings object:<br><code>\"editor.fontFamily\": \"'JetBrains Mono', monospace\",</code><br><code>\"editor.fontLigatures\": true,</code>"
            },
            {
                name: "4. Restart Your Editor",
                desc: "Save the file and restart VSCode to see your new character symbols update instantly."
            }
        ]
    },

    layouts: {
        title: "Perfect OBS Canvas Layouts",
        tagline: "Editing • High-fidelity canvas setups for short-form video.",
        description: "Setting up a native vertical template ensures your recording canvas scales cleanly into mobile aspect ratios without losing image clarity or stretching your capture elements.",
        steps: [
            {
                name: "1. Set Video Resolution",
                desc: "Navigate to Settings > Video. Change your Base (Canvas) Resolution to <strong>1080x1920</strong> to lock in a true 9:16 portrait viewport."
            },
            {
                name: "2. Adjust Output Scaling",
                desc: "Set your Output (Scaled) Resolution matching your Base, or downscale smoothly to 720x1280 depending on device constraints."
            },
            {
                name: "3. Align Capture Sources",
                desc: "Stretch game captures using the transform tool to isolate horizontal focal elements into vertical layouts seamlessly."
            }
        ]
    },

    bitrates: {
        title: "CQP vs CBR Bitrates",
        tagline: "Optimization • Efficient data storage engineering for capture streams.",
        description: "Constant Rate Factor / Constant Quantization Parameter protocols allow variable bit allocations to ensure complex scene graphics pull sufficient bandwidth, while static assets drop consumption models completely.",
        steps: [
            {
                name: "1. Locate Bitrate Settings",
                desc: "Go to Settings > Output and select the 'Recording' Tab. Switch Output Mode to 'Advanced'."
            },
            {
                name: "2. Implement CQP Controls",
                desc: "Set Rate Control properties directly to CQP instead of the standard streaming standard CBR parameters."
            },
            {
                name: "3. Establish Quality Scaling Indexes",
                desc: "Map your CQ Level accurately. Standard benchmarks run safely between 18 (near lossless, large files) and 23 (efficient scaling balance)."
            }
        ]
    }
};


// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────

const translations = {
    en: {
        "nav-home":               "Home",
        "nav-about":              "About",
        "nav-guides":             "Guides",
        "settings-title":         "Settings",
        "settings-desc":          "Manage your DigitalGarden experience from one place. Customize your preferences, adjust account settings, and control how the website works for you. Changes made here are saved automatically.",
        "section-account":        "Account",
        "section-appearance":     "Appearance",
        "section-language":       "Language & Region",
        "section-accessibility":  "Accessibility",
        "label-text-size":        "Text Size",
        "label-language":         "Language",
        "label-date-format":      "Date Format",
        "opt-small":              "Small",
        "opt-normal":             "Normal",
        "opt-big":                "Big",
        "checkbox-compact":       "Squish boxes together",
        "checkbox-ghost":         "Enable Ghost Mode",
        "checkbox-audio":         "UI Sound Effects",
        "checkbox-reduce-motion": "Reduce Motion",
        "checkbox-high-contrast": "High Contrast",
        "label-cursor":           "Cursor Size",
        "opt-cursor-normal":      "Normal",
        "opt-cursor-large":       "Large",
        "btn-logout":             "Log Out",
        "subtitle-home":          "This website features completely free software, games, editing, and coding tools, and much more with download links for each item!",
        "section-software":       "Software",
        "section-software-desc":  "Explore my collection of trustworthy software, that might just make your life easier!",
        "section-tools":          "Tools & Optimizations",
        "section-tools-desc":     "Explore my collection of Tools made for Optimization, and debloating!",
    },
    es: {
        "nav-home":               "Inicio",
        "nav-about":              "Acerca de",
        "nav-guides":             "Guías",
        "settings-title":         "Configuración",
        "settings-desc":          "Gestiona tu experiencia en DigitalGarden desde un solo lugar. Personaliza tus preferencias y controla cómo funciona el sitio. Los cambios se guardan automáticamente.",
        "section-account":        "Cuenta",
        "section-appearance":     "Apariencia",
        "section-language":       "Idioma y Región",
        "section-accessibility":  "Accesibilidad",
        "label-text-size":        "Tamaño de Texto",
        "label-language":         "Idioma",
        "label-date-format":      "Formato de Fecha",
        "opt-small":              "Pequeño",
        "opt-normal":             "Normal",
        "opt-big":                "Grande",
        "checkbox-compact":       "Comprimir cajas",
        "checkbox-ghost":         "Modo Fantasma",
        "checkbox-audio":         "Efectos de Sonido",
        "checkbox-reduce-motion": "Reducir Movimiento",
        "checkbox-high-contrast": "Alto Contraste",
        "label-cursor":           "Tamaño del Cursor",
        "opt-cursor-normal":      "Normal",
        "opt-cursor-large":       "Grande",
        "btn-logout":             "Cerrar Sesión",
        "subtitle-home":          "Este sitio ofrece software, juegos, herramientas de edición y programación completamente gratuitos, con enlaces de descarga para cada elemento.",
        "section-software":       "Software",
        "section-software-desc":  "Explora mi colección de software confiable que podría facilitarte la vida.",
        "section-tools":          "Herramientas y Optimizaciones",
        "section-tools-desc":     "Explora mi colección de herramientas para optimización y limpieza del sistema.",
    },
    de: {
        "nav-home":               "Startseite",
        "nav-about":              "Über uns",
        "nav-guides":             "Anleitungen",
        "settings-title":         "Einstellungen",
        "settings-desc":          "Verwalte deine DigitalGarden-Erfahrung an einem Ort. Passe deine Einstellungen an und steuere, wie die Website für dich funktioniert. Änderungen werden automatisch gespeichert.",
        "section-account":        "Konto",
        "section-appearance":     "Erscheinungsbild",
        "section-language":       "Sprache & Region",
        "section-accessibility":  "Barrierefreiheit",
        "label-text-size":        "Textgröße",
        "label-language":         "Sprache",
        "label-date-format":      "Datumsformat",
        "opt-small":              "Klein",
        "opt-normal":             "Normal",
        "opt-big":                "Groß",
        "checkbox-compact":       "Boxen zusammendrücken",
        "checkbox-ghost":         "Geistermodus aktivieren",
        "checkbox-audio":         "UI-Soundeffekte",
        "checkbox-reduce-motion": "Bewegung reduzieren",
        "checkbox-high-contrast": "Hoher Kontrast",
        "label-cursor":           "Cursorgröße",
        "opt-cursor-normal":      "Normal",
        "opt-cursor-large":       "Groß",
        "btn-logout":             "Abmelden",
        "subtitle-home":          "Diese Website bietet völlig kostenlose Software, Spiele, Bearbeitungs- und Coding-Tools mit Download-Links für jeden Artikel.",
        "section-software":       "Software",
        "section-software-desc":  "Entdecke meine Sammlung vertrauenswürdiger Software, die dein Leben einfacher machen könnte.",
        "section-tools":          "Tools & Optimierungen",
        "section-tools-desc":     "Entdecke meine Sammlung von Tools zur Optimierung und Systembereinigung.",
    },
    uk: {
        "nav-home":               "Головна",
        "nav-about":              "Про нас",
        "nav-guides":             "Посібники",
        "settings-title":         "Налаштування",
        "settings-desc":          "Керуй своїм досвідом у DigitalGarden в одному місці. Налаштуй свої вподобання та контролюй роботу сайту. Зміни зберігаються автоматично.",
        "section-account":        "Обліковий запис",
        "section-appearance":     "Зовнішній вигляд",
        "section-language":       "Мова та регіон",
        "section-accessibility":  "Доступність",
        "label-text-size":        "Розмір тексту",
        "label-language":         "Мова",
        "label-date-format":      "Формат дати",
        "opt-small":              "Малий",
        "opt-normal":             "Нормальний",
        "opt-big":                "Великий",
        "checkbox-compact":       "Стиснути блоки",
        "checkbox-ghost":         "Режим привида",
        "checkbox-audio":         "Звукові ефекти інтерфейсу",
        "checkbox-reduce-motion": "Зменшити рух",
        "checkbox-high-contrast": "Висока контрастність",
        "label-cursor":           "Розмір курсора",
        "opt-cursor-normal":      "Нормальний",
        "opt-cursor-large":       "Великий",
        "btn-logout":             "Вийти",
        "subtitle-home":          "Цей сайт пропонує безкоштовне програмне забезпечення, ігри, інструменти для редагування та програмування з посиланнями для завантаження.",
        "section-software":       "Програмне забезпечення",
        "section-software-desc":  "Ознайомся з моєю колекцією надійного програмного забезпечення, яке може полегшити твоє життя.",
        "section-tools":          "Інструменти та оптимізація",
        "section-tools-desc":     "Ознайомся з моєю колекцією інструментів для оптимізації та очищення системи.",
    }
};

function applyTranslations(lang) {
    const t = translations[lang] || translations["en"];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) el.textContent = t[key];
    });
}


// ─── NAVIGATION ──────────────────────────────────────────────────────────────

const routes = document.querySelectorAll(".nav-route, .nav-logo");
const pages  = document.querySelectorAll(".page-section");

routes.forEach(route => {
    route.addEventListener("click", (e) => {
        e.preventDefault();
        const targetPageId = route.getAttribute("data-target");

        document.querySelectorAll(".nav-route").forEach(link =>
            link.classList.remove("active")
        );

        if (route.classList.contains("nav-route")) {
            route.classList.add("active");
        } else {
            document.querySelector('.nav-route[data-target="home-page"]')
                    .classList.add("active");
        }

        pages.forEach(page => {
            if (page.id === targetPageId) {
                page.classList.remove("hidden");
            } else {
                page.classList.add("hidden");
            }
        });
    });
});


// ─── MODAL ───────────────────────────────────────────────────────────────────

const modal    = document.getElementById("software-modal");
const modalBody = document.getElementById("modal-body");
const closeBtn  = document.querySelector(".close-button");

document.querySelectorAll(".software-card").forEach(card => {
    card.addEventListener("click", () => {
        const key  = card.getAttribute("data-software");
        const data = softwareData[key];

        if (data) {
            let featuresHtml = "";
            data.extensions.forEach(item => {
                featuresHtml += `
                    <li class="extension-item">
                        <span class="ext-name">${item.name}</span>
                        <span class="ext-desc">${item.desc}</span>
                    </li>
                `;
            });

            modalBody.innerHTML = `
                <h2 class="modal-title">${data.title}</h2>
                <p class="modal-tagline">${data.tagline}</p>
                <div class="modal-description">
                    <p>${data.description}</p>
                </div>
                <h3 class="modal-section-title">Key Tool Utilities / Highlights</h3>
                <ul class="extension-list">
                    ${featuresHtml}
                </ul>
                <div class="modal-actions">
                    <a href="${data.downloadUrl}" target="_blank" class="primary-btn">
                        Download Tool &rarr;
                    </a>
                </div>
            `;
            openModal();
        }
    });
});

document.querySelectorAll(".tutorial-card").forEach(card => {
    card.addEventListener("click", () => {
        const key  = card.getAttribute("data-tutorial");
        const data = tutorialData[key];

        if (data) {
            let stepsHtml = "";
            data.steps.forEach(step => {
                stepsHtml += `
                    <li class="extension-item">
                        <span class="ext-name">${step.name}</span>
                        <span class="ext-desc">${step.desc}</span>
                    </li>
                `;
            });

            modalBody.innerHTML = `
                <h2 class="modal-title">${data.title}</h2>
                <p class="modal-tagline">${data.tagline}</p>
                <div class="modal-description">
                    <p>${data.description}</p>
                </div>
                <h3 class="modal-section-title">Implementation Steps</h3>
                <ul class="extension-list">
                    ${stepsHtml}
                </ul>
            `;
            openModal();
        }
    });
});

function openModal() {
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("is-open"), 10);
}

function closeModal() {
    modal.classList.remove("is-open");
    modal.classList.add("is-closing");
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("is-closing");
    }, 250);
}

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
        if (modal.style.display === "flex" || modal.classList.contains("is-open")) {
            closeModal();
        }
    }
});


// ─── DOM READY ───────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {

    // ── SOUND ──────────────────────────────────────────────────────────────

    const audioToggle = document.getElementById("audio-toggle-checkbox");
    const clickSound  = new Audio("assets/sounds/click.wav");
    const swooshSound = new Audio("#");

    clickSound.volume  = 0.20;
    swooshSound.volume = 0.05;

    function playClickSound() {
        if (audioToggle && audioToggle.checked) {
            clickSound.currentTime = 0;
            clickSound.play().catch(() => {});
        }
    }

    function playSwooshSound() {
        if (audioToggle && audioToggle.checked) {
            swooshSound.currentTime = 0;
            swooshSound.play().catch(() => {});
        }
    }

    const clickElements = document.querySelectorAll(
        ".software-card, .social-card, .tutorial-card, button, select, #settings-trigger-btn, .close-sidebar-btn, .real-checkbox"
    );
    clickElements.forEach(el => {
        el.addEventListener("click", () => {
            if (el.id !== "ghost-toggle-checkbox") playClickSound();
        });
    });

    document.querySelectorAll(".nav-route, .nav-logo").forEach(route => {
        route.addEventListener("click", playSwooshSound);
    });


    // ── SETTINGS PANEL ─────────────────────────────────────────────────────

    const settingsTrigger = document.getElementById("settings-trigger-btn");
    const settingsPanel   = document.getElementById("settings-panel-sidebar");
    const closeSettings   = document.getElementById("close-settings-sidebar");

    if (settingsTrigger && settingsPanel && closeSettings) {
        settingsTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            settingsPanel.classList.add("is-open");
        });

        closeSettings.addEventListener("click", () => {
            settingsPanel.classList.remove("is-open");
        });

        document.addEventListener("click", (event) => {
            if (
                !settingsPanel.contains(event.target) &&
                !settingsTrigger.contains(event.target) &&
                settingsPanel.classList.contains("is-open")
            ) {
                settingsPanel.classList.remove("is-open");
            }
        });
    }


    // ── LOGOUT ─────────────────────────────────────────────────────────────

    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userEmail");
            window.location.href = "index.html";
        });
    }


    // ── DISPLAY NAME ───────────────────────────────────────────────────────

    const displayNameInput = document.getElementById("display-name-input");
    const applyPrompt      = document.getElementById("apply-changes-prompt");
    const saveNameBtn      = document.getElementById("save-display-name-btn");
    const emailDisplay     = document.getElementById("settings-email-display");

    let typingTimer;
    const doneTypingInterval = 1000;
    let confirmedName = "";

    if (displayNameInput && applyPrompt && saveNameBtn) {
        // Wait for Firebase to inject the email before reading it
        setTimeout(() => {
            const savedName = localStorage.getItem("garden-display-name");

            if (savedName) {
                confirmedName = savedName;
                if (emailDisplay) emailDisplay.textContent = savedName;
            } else {
                const userEmail = localStorage.getItem("userEmail") ||
                                  (emailDisplay ? emailDisplay.textContent : "");

                if (userEmail && userEmail !== "—") {
                    confirmedName = userEmail.split("@")[0];
                    localStorage.setItem("garden-display-name", confirmedName);
                    if (emailDisplay) emailDisplay.textContent = confirmedName;
                } else {
                    confirmedName = "";
                }
            }

            displayNameInput.value = confirmedName;
        }, 500);

        displayNameInput.addEventListener("input", function () {
            clearTimeout(typingTimer);
            applyPrompt.classList.remove("show");

            if (this.value.trim() !== confirmedName) {
                typingTimer = setTimeout(() => {
                    applyPrompt.classList.add("show");
                }, doneTypingInterval);
            }
        });

        saveNameBtn.addEventListener("click", () => {
            const newName = displayNameInput.value.trim();

            if (newName !== "") {
                localStorage.setItem("garden-display-name", newName);
                confirmedName = newName;

                if (emailDisplay) emailDisplay.textContent = newName;
                applyPrompt.classList.remove("show");
                playClickSound();
            }
        });
    }


    // ── FONT SIZE ──────────────────────────────────────────────────────────

    const sizeSelector = document.getElementById("font-size-select");
    if (sizeSelector) {
        const savedSize = localStorage.getItem("garden-font-size") || "medium";
        sizeSelector.value = savedSize;
        document.documentElement.setAttribute("data-font-size", savedSize);

        sizeSelector.addEventListener("change", function () {
            document.documentElement.setAttribute("data-font-size", this.value);
            localStorage.setItem("garden-font-size", this.value);
        });
    }


    // ── COMPACT MODE ───────────────────────────────────────────────────────

    const spaceBox = document.getElementById("compact-toggle-checkbox");
    if (spaceBox) {
        const savedSpace = localStorage.getItem("garden-space-mode") || "normal";
        spaceBox.checked = savedSpace === "tight";
        document.documentElement.setAttribute("data-space", savedSpace);

        spaceBox.addEventListener("change", function () {
            playClickSound();
            const mode = this.checked ? "tight" : "normal";
            document.documentElement.setAttribute("data-space", mode);
            localStorage.setItem("garden-space-mode", mode);
        });
    }


    // ── GHOST MODE ─────────────────────────────────────────────────────────

    const ghostToggle = document.getElementById("ghost-toggle-checkbox");
    if (ghostToggle) {
        ghostToggle.addEventListener("change", (e) => {
            playClickSound();
            document.body.classList.toggle("ghost-mode", e.target.checked);
        });
    }


    // ── LANGUAGE ───────────────────────────────────────────────────────────

    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
        const savedLang = localStorage.getItem("garden-language") || "en";
        languageSelect.value = savedLang;
        document.documentElement.setAttribute("lang", savedLang);
        applyTranslations(savedLang);

        languageSelect.addEventListener("change", function () {
            localStorage.setItem("garden-language", this.value);
            document.documentElement.setAttribute("lang", this.value);
            applyTranslations(this.value);
        });
    }


    // ── DATE FORMAT ────────────────────────────────────────────────────────

    const dateFormatSelect = document.getElementById("date-format-select");
    if (dateFormatSelect) {
        dateFormatSelect.value = localStorage.getItem("garden-date-format") || "mdy";

        dateFormatSelect.addEventListener("change", function () {
            localStorage.setItem("garden-date-format", this.value);
        });
    }


    // ── REDUCE MOTION ──────────────────────────────────────────────────────

    const reduceMotionCheckbox = document.getElementById("reduce-motion-checkbox");
    if (reduceMotionCheckbox) {
        reduceMotionCheckbox.checked = localStorage.getItem("garden-reduce-motion") === "true";
        if (reduceMotionCheckbox.checked) document.body.classList.add("reduce-motion");

        reduceMotionCheckbox.addEventListener("change", function () {
            playClickSound();
            document.body.classList.toggle("reduce-motion", this.checked);
            localStorage.setItem("garden-reduce-motion", this.checked);
        });
    }


    // ── HIGH CONTRAST ──────────────────────────────────────────────────────

    const highContrastCheckbox = document.getElementById("high-contrast-checkbox");
    if (highContrastCheckbox) {
        highContrastCheckbox.checked = localStorage.getItem("garden-high-contrast") === "true";
        if (highContrastCheckbox.checked) document.body.classList.add("high-contrast");

        highContrastCheckbox.addEventListener("change", function () {
            playClickSound();
            document.body.classList.toggle("high-contrast", this.checked);
            localStorage.setItem("garden-high-contrast", this.checked);
        });
    }


    // ── CURSOR SIZE ────────────────────────────────────────────────────────

    const cursorSizeSelect = document.getElementById("cursor-size-select");
    if (cursorSizeSelect) {
        cursorSizeSelect.value = localStorage.getItem("garden-cursor-size") || "normal";
        if (cursorSizeSelect.value === "large") document.body.classList.add("cursor-large");

        cursorSizeSelect.addEventListener("change", function () {
            document.body.classList.toggle("cursor-large", this.value === "large");
            localStorage.setItem("garden-cursor-size", this.value);
        });
    }

}); // end DOMContentLoaded