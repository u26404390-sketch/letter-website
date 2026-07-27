/* =====================================================
   LOADER
===================================================== */

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 1800);

});


/* =====================================================
   START BUTTON
===================================================== */

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.getElementById("intro").scrollIntoView({

        behavior: "smooth"

    });

});


/* =====================================================
   FIRST TYPING EFFECT
===================================================== */

const introMessage = `Before you continue...

I'm not asking for anything.

I'm not expecting an answer.

I simply wanted to share something
that stayed in my heart
for a long time.

Thank you for taking a moment
to read this.`;

const typing = document.getElementById("typing");

let introIndex = 0;

function typeIntro() {

    if (introIndex < introMessage.length) {

        typing.innerHTML += introMessage.charAt(introIndex);

        introIndex++;

        setTimeout(typeIntro, 35);

    }

}

setTimeout(typeIntro, 2500);


/* =====================================================
   LETTER TYPING EFFECT
===================================================== */

const letter = `Dear ______,

There was something I wanted to say
for a long time.

If any of my actions ever made you
uncomfortable or gave you the wrong
impression,

I'm genuinely sorry.

My intention was never to trouble you
or make you feel unsafe.

I admired you quietly,
but I also understand that everyone
has their own feelings and boundaries.

I'm not asking for anything in return.

I simply wanted to be honest about
what was in my heart.

Thank you for reading this.

I sincerely wish you happiness,
success,
and peace.

Take care.`;

const letterTyping = document.getElementById("letterTyping");

let letterIndex = 0;

function typeLetter() {

    if (letterIndex < letter.length) {

        letterTyping.innerHTML += letter.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter, 28);

    }

}

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            typeLetter();

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".letter-page"));


/* =====================================================
   SCROLL REVEAL
===================================================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
/* =====================================================
   TWINKLING STARS
===================================================== */

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay =
        Math.random() * 5 + "s";

    star.style.animationDuration =
        (2 + Math.random() * 4) + "s";

    starsContainer.appendChild(star);

}


/* =====================================================
   FLOATING PARTICLES
===================================================== */

const particleContainer = document.getElementById("particles");

for (let i = 0; i < 40; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.width =
        (3 + Math.random() * 5) + "px";

    particle.style.height =
        particle.style.width;

    particle.style.animationDuration =
        (10 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particleContainer.appendChild(particle);

}


/* =====================================================
   CURSOR GLOW
===================================================== */

const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});


/* =====================================================
   SCROLL TO TOP BUTTON
===================================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   BUTTON RIPPLE EFFECT
===================================================== */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            e.clientX - rect.left - size / 2 + "px";

        ripple.style.top =
            e.clientY - rect.top - size / 2 + "px";

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* =====================================================
   PARALLAX BACKGROUND
===================================================== */

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    document.querySelector(".background").style.transform =
        `translateY(${scroll * 0.15}px)`;

});


/* =====================================================
   END
===================================================== */

console.log("✨ Premium Letter Website Loaded Successfully ✨");