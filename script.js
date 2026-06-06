window.addEventListener("load", () => {
    const preloader  = document.getElementById("loader-viewport");
    const appContent = document.getElementById("garden-app");
    const manimVideo = document.getElementById("manim-video");

    if (preloader) {
        // 2000ms so the animation plays for 2 seconds before fading out
        setTimeout(() => {
            preloader.classList.add("fade-out");

            if (appContent) appContent.classList.add("fade-in");

            if (manimVideo) {
                manimVideo.currentTime = 0;
                manimVideo.play().catch(err =>
                    console.log("Video autoplay caught by browser policy:", err)
                );
            }

            // Remove from DOM after the 0.5s CSS fade finishes
            setTimeout(() => preloader.remove(), 500);

        }, 2000);
    }
});


// ── Software Modal Data ───────────────────────────────────────────────────────

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
    },

    // ── Editing Tools ─────────────────────────────────────────────────────────

    capcut: {
        title: "CapCut",
        tagline: "Free, all-in-one video editor built for short-form and long-form content.",
        description: "CapCut is a powerful yet accessible video editing tool packed with auto-captions, keyframe animations, chroma key, speed ramping, and a massive library of templates and effects — all completely free with no watermark on export.",
        extensions: [
            {
                name: "Auto Captions",
                desc: "Automatically transcribes your spoken audio and renders accurate, styled subtitles directly onto your timeline — no manual syncing required."
            },
            {
                name: "Speed Ramping",
                desc: "Smooth velocity curves let you ease in and out of slow-motion and hyper-speed sections with a single drag, a staple of modern short-form edits."
            },
            {
                name: "Keyframe Animations",
                desc: "Animate any property (scale, position, opacity, rotation) over time using intuitive keyframe controls without needing a plugin."
            },
            {
                name: "Chroma Key (Green Screen)",
                desc: "Remove any solid-color background from your footage and replace it with images, video, or transparent overlays using the built-in chroma key tool."
            },
            {
                name: "Template Library",
                desc: "Access thousands of trending effect templates that auto-sync cuts and transitions to your audio track for effortless viral-style edits."
            }
        ],
        downloadUrl: "https://www.capcut.com/"
    },

    "davinci-editing": {
        title: "DaVinci Resolve",
        tagline: "Professional video editing and color grading software.",
        description: "DaVinci Resolve is a powerful video editing and color grading suite that offers professional-grade tools for both editing and post-production workflows.",
        extensions: [
            {
                name: "Advanced Color Grading",
                desc: "Utilize Hollywood-caliber node-based color correction, HDR grading tools, and Magic Mask to achieve precise cinematic looks and perfect skin tones."
            },
            {
                name: "Fairlight Audio Post",
                desc: "Access a fully integrated digital audio workstation with professional tools for sound editing, mixing, EQ, and ADR directly inside your video project."
            },
            {
                name: "Fusion VFX and Motion Graphics",
                desc: "Create cinematic visual effects, compositing, and dynamic 2D/3D titles using a powerful node-based procedural workflow."
            },
            {
                name: "Multi-User Collaboration",
                desc: "Work simultaneously with other editors, colorists, and sound designers on the same project at the same time using a shared network database."
            }
        ],
        downloadUrl: "https://www.blackmagicdesign.com/products/davinciresolve"
    },

    // ── Backup & Recovery ─────────────────────────────────────────────────────

    "veeam-agent": {
        title: "Veeam Agent for Windows",
        tagline: "Free, reliable backup and recovery for Windows desktops and servers.",
        description: "Veeam Agent for Microsoft Windows (Free edition) delivers enterprise-grade local backup for personal and non-enterprise use. It creates full, volume-level, or file-level backups to an external drive, NAS, or network share — and lets you do a full bare-metal restore from bootable recovery media if your system ever fails completely.",
        extensions: [
            {
                name: "Bare-Metal Recovery",
                desc: "Restore your entire operating system, installed apps, and personal files to a fresh drive using Veeam's bootable WinPE recovery ISO — no Windows reinstall required."
            },
            {
                name: "Volume-Level Backups",
                desc: "Back up entire disk volumes (including the OS partition) as compressed, deduplicated image files, capturing everything a file-level backup would miss."
            },
            {
                name: "Scheduled Backup Jobs",
                desc: "Set daily, weekly, or event-triggered schedules (e.g., on lock or USB connect) so backups run automatically without manual intervention."
            },
            {
                name: "Retention Policies",
                desc: "Keep a configurable number of restore points so you can roll back to multiple historical states, not just the most recent backup."
            },
            {
                name: "Recovery Media Builder",
                desc: "Generate a bootable USB or ISO that contains a minimal recovery environment — essential for restoring a machine that can no longer boot into Windows."
            }
        ],
        downloadUrl: "https://www.veeam.com/windows-endpoint-server-backup-free.html"
    },

    "minitool-part": {
        title: "MiniTool Partition Wizard",
        tagline: "User-friendly Windows partition manager for disk and partition tasks.",
        description: "MiniTool Partition Wizard Free is a full-featured disk management utility that goes far beyond what Windows' built-in Disk Management offers. It lets you resize, move, merge, split, format, and convert partitions without data loss, and includes a disk benchmark and space analyzer in the same package.",
        extensions: [
            {
                name: "Resize & Move Partitions",
                desc: "Drag partition boundaries to extend or shrink volumes — including the system C: drive — without needing to reformat or reinstall Windows."
            },
            {
                name: "Merge Partitions",
                desc: "Combine two adjacent partitions into a single, larger volume in a few clicks, consolidating wasted unallocated space cleanly."
            },
            {
                name: "MBR ↔ GPT Conversion",
                desc: "Convert a disk's partition table between MBR and GPT formats non-destructively, which is often required before enabling UEFI boot or installing Windows 11."
            },
            {
                name: "Disk Benchmark",
                desc: "Measure sequential and random read/write speeds of any drive to verify real-world SSD or HDD performance before and after changes."
            },
            {
                name: "Space Analyzer",
                desc: "Scan any volume and visualize exactly which folders and files are consuming the most disk space, helping you identify and clean up bloat fast."
            }
        ],
        downloadUrl: "https://www.minitool.com/partition-manager/"
    },

        "warzone": {
        title: "Call of Duty: Warzone",
        tagline: "A fast-paced, free-to-play Battle Royale where strategy meets high-stakes survival.",
        description: "Drop into a massive arena where survival is everything. It’s an absolute blast to play with friends, but fair warning: the learning curve is steep, the pacing is intense, and the gunfights are sweaty. If you are looking for a casual, stress-free cozy game... this definitely isn't it.",
        extensions: [
            {
                name: "Loadout Customization",
                desc: " some major gunsmithing. Build your dream weapon loadout with hundreds of attachments, optical sights, and perks tailored exactly to your playstyle."
            },
            {
                name: "Massive, Evolving Maps",
                desc: "Explore sprawling battlegrounds packed with diverse terrain, urban areas, and high-tier loot hot spots. Just keep your eyes peeled—danger hides around every corner."
            },
            {
                name: "Squad Tactics & Crossplay",
                desc: "Drop in solo or squad up in Duos, Trios, or Quads. Full cross-platform support means you can easily team up—or compete against—friends on PC and console."
            },
            {
                name: "The Gulag Rematch",
                desc: "Death isn't the end. Elimination sends you to the Gulag for a tense 1v1 showdown with random weapons. Win the duel, and you earn a free drop back into the match."
            },
            {
                name: "Seasonal Events & Content",
                desc: "The battlefield never stays the same. Regular updates introduce new weapons, limited-time game modes, and massive seasonal community events."
            }
        ],
        downloadUrl: "https://store.steampowered.com/app/1962663/Call_of_Duty_Warzone/"
    },

"rocket-league": {
        title: "Rocket League",
        tagline: "Fun game mechanics, hard to get used to, but hilarious with friends! This is a relaxing game to play.",
        description: "A high-powered hybrid of arcade-style soccer and vehicular mayhem! It's easy to understand but has a massive skill ceiling. Perfect for chilling with friends, pulling off accidental aerial goals, or missing the ball entirely while driving at supersonic speeds.",
        extensions: [
            {
                name: "Physics-Based Gameplay",
                desc: "Everything relies on momentum and angles. Mastering how your car hits the giant soccer ball is the key to going from zero to hero."
            },
            {
                name: "Deep Customization",
                desc: "Unlock thousands of cosmetic items, including cars, decals, wheels, rocket boosts, and goal explosions to style on your opponents."
            },
            {
                name: "Cross-Platform Play",
                desc: "Party up with your crew no matter where they play. Team up across PC, PlayStation, Xbox, and Nintendo Switch seamlessly."
            },
            {
                name: "Extra Game Modes",
                desc: "Want a break from standard soccer? Dive into Hoops (basketball), Snow Day (hockey), or Rumble (soccer with chaotic power-ups)."
            },
            {
                name: "Competitive Seasons",
                desc: "Climb the ranks from Bronze all the way to Grand Champion and Supersonic Legend, earning exclusive rewards at the end of every season."
            }
        ],
        downloadUrl: "https://store.epicgames.com/en-US/p/rocket-league"
    }
};


// Guides Data

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


// Language Translations

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


// Navigation

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


// Modal System

const modal    = document.getElementById("software-modal");
const modalBody = document.getElementById("modal-body");
const closeBtn  = document.querySelector(".close-button");

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

if (closeBtn) closeBtn.addEventListener("click", closeModal);

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


// ── DOMContentLoaded: Settings & UI ──────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {

    // Sound System (no sound yet)

    const audioToggle = document.getElementById("audio-toggle-checkbox");
    const clickSound  = new Audio("assets/sounds/click.mp3");
    const swooshSound = new Audio("assets/sounds/swoosh.mp3");

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


    // Settings Panel Toggle

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


    // Logout Button

    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userEmail");
            window.location.href = "index.html";
        });
    }


    // Display Name

    const displayNameInput = document.getElementById("display-name-input");
    const applyPrompt      = document.getElementById("apply-changes-prompt");
    const saveNameBtn      = document.getElementById("save-display-name-btn");
    const emailDisplay     = document.getElementById("settings-email-display");

    let typingTimer;
    const doneTypingInterval = 1000;
    let confirmedName = "";

    if (displayNameInput && applyPrompt && saveNameBtn) {
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


    // Font Size

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


    // Compact Layout

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


    // Ghost Mode

    const ghostToggle = document.getElementById("ghost-toggle-checkbox");
    if (ghostToggle) {
        ghostToggle.addEventListener("change", (e) => {
            playClickSound();
            document.body.classList.toggle("ghost-mode", e.target.checked);
        });
    }


    // Language

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


    // Date Format

    const dateFormatSelect = document.getElementById("date-format-select");
    if (dateFormatSelect) {
        dateFormatSelect.value = localStorage.getItem("garden-date-format") || "mdy";

        dateFormatSelect.addEventListener("change", function () {
            localStorage.setItem("garden-date-format", this.value);
        });
    }


    // Reduce Motion

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


    // High Contrast

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


    // Cursor Size

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