if (sessionStorage.getItem("verificado") === "si") {
    console.log("Ya verificado en esta pestaña.");
} else {
    // 2. Si es la primera vez en esta pestaña, lanzamos el reto
    const num = Math.floor(Math.random() * 10);
    const respuestaUsuario = prompt("Por favor escriba el número " + num + " para verificar que no es un robot:");
    
    // 3. IMPORTANTE: Llamamos a la función para validar
    validarRespuesta(num, respuestaUsuario);
}

function validarRespuesta(num, bot) {
    if (bot !== num.toString()) {
        // Si falla o cancela el prompt, al bot.html
        window.location.href = "../bot.html";
    } else {
        // SI ACERTA: Guardamos solo para esta pestaña
        sessionStorage.setItem("verificado", "si");
        alert("¡Verificación exitosa!");
    }

}
