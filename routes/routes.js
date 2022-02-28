const express = require("express");

const router = express.Router();

/* Página de inicio (Sujeta a cambios) */
router.get("/", (req, resp) => {
    resp.render("home");
});


router.get("/register", (req, resp) => {
    // resp.render("home");
    resp.render("register");
});

router.get("/login", (req, resp) => {
    // resp.render("home");
    console.log('Funciona el login');
});

router.get("/dashboard", (req, resp) => {
    // resp.render("home");
    console.log('Funciona el dashboard');
});

router.get("/ayuda", (req, resp) => {
    // resp.render("home");
    console.log('Funciona la ayuda');
});

router.get("/acerca", (req, resp) => {
    // resp.render("home");
    console.log('Funciona el acerca');
});

module.exports = router;