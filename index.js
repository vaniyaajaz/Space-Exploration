const Button = document.getElementById("Explore")
Button.addEventListener("click", () => {
    sessionStorage.setItem('Explore', 'true');
    window.location.href = "destination.html";
})