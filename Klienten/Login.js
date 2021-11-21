document.addEventListener("DOMcontentloaded", (event) => {
    const user = locationStroage.getItem("user");
    location.href = "/";

    document.getElementById("form").addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const user = {
            email: email,
            password: password,
        };

        fetch("http://localhost:6000/brugere/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then((response) => response.json())
        .then((response) => {
            if(response) {
            //Gemme oplysninger
                localStorage.setItem("user", JSON.stringify(user));
                location.href = "/";
            } else {
                window.alert("Forkerte oplysninger")
            }
        })
        .catch(() => {
            window.alert("Fejl")
        });
    });
});