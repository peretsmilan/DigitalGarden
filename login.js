console.log("SCRIPT LOADED");

if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "dashboard.html";
}

const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const loader = document.getElementById("loader");


function showLoader() {
    if (!loader) return;
    loader.classList.remove("hidden");
}

function hideLoader() {
    if (!loader) return;
    loader.classList.add("hidden");
}


function fakeRedirect(url) {
    showLoader();

    setTimeout(() => {
        hideLoader();
        window.location.href = url;
    }, 1200);
}


window.addEventListener("load", hideLoader);
window.addEventListener("pageshow", hideLoader);



if (container && registerBtn && loginBtn) {
    registerBtn.addEventListener("click", () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
    });
}


document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => e.preventDefault());
});



const firebaseConfig = {
    apiKey: "AIzaSyBh5-synOltElhLq0oAMqm-LDf8GQGUpyc",
    authDomain: "editlab-aafbd.firebaseapp.com",
    projectId: "editlab-aafbd",
    storageBucket: "editlab-aafbd.firebasestorage.app",
    messagingSenderId: "929376141829",
    appId: "1:929376141829:web:c6ba23efe25aaf78e4526c",
    measurementId: "G-3DDJNPV5C3"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

console.log("Firebase loaded");



const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();



const signupBtn = document.getElementById("signup-btn");

if (signupBtn) {
    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const email = document.getElementById("signup-email")?.value;
        const password = document.getElementById("signup-password")?.value;

        if (!email || !password) return;

        showLoader();

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("User created:", userCredential.user);
                
                // Save storage flags
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userEmail", userCredential.user.email);
                
                fakeRedirect("dashboard.html");
            })
            .catch((error) => {
                console.error(error.message);
                alert(error.message);
                hideLoader();
            });
    });
}


const loginBtnAuth = document.getElementById("login-btn");

if (loginBtnAuth) {
    loginBtnAuth.addEventListener("click", (e) => {
        e.preventDefault();

        const email = document.getElementById("login-email")?.value;
        const password = document.getElementById("login-password")?.value;

        if (!email || !password) return;

        showLoader();

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("Logged in:", userCredential.user);
                
               
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userEmail", userCredential.user.email);
                
                fakeRedirect("dashboard.html");
            })
            .catch((error) => {
                console.error(error.message);
                alert(error.message);
                hideLoader();
            });
    });
}



document.addEventListener("click", (e) => {
    const googleBtn = e.target.closest(".google-btn");
    const githubBtn = e.target.closest(".github-btn");

    // GOOGLE
    if (googleBtn) {
        e.preventDefault();

        showLoader();

        auth.signInWithPopup(googleProvider)
            .then((result) => {
                console.log("Google login:", result.user);
                
                // Save storage flags
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userEmail", result.user.email);
                
                fakeRedirect("dashboard.html");
            })
            .catch((err) => {
                console.error(err.message);
                alert(err.message);
                hideLoader();
            });
    }

    // GITHUB
    if (githubBtn) {
        e.preventDefault();

        showLoader();

        auth.signInWithPopup(githubProvider)
            .then((result) => {
                console.log("GitHub login:", result.user);
                
             
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userEmail", result.user.email);
                
                fakeRedirect("dashboard.html");
            })
            .catch((err) => {
                console.error(err.message);
                alert(err.message);
                hideLoader();
            });
    }
});