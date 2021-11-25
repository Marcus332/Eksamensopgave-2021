document.addEventListener("DOMcontentloaded", (event) => {
    const user = locationStroage.getItem("user");
    if (user) {
        location.href = "/login.html";
    }

document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

        // Laver et kald til internettet
        fetch("http://localhost:5500/users/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            // Laver daten om til en string så serveren kan forstå det
            body: JSON.stringify(user),
        })
        // Jeg benytter "then" da man ved at det sker
        .then((response) => response.json())
        .then((response) => {
            // Hvis det sker bliver man sendt tilbage til forsiden
            if(response) {
                localStorage.removeItem("user");
                location.href = "/login.html";
            }
        })
        // Hvis der er noget der går galt
        .catch(() => {
            window.alert("Fejl")
        });
    });
});