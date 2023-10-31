
function fetchUserProfile() {
    const dataUrl = "https://ets-pemweb-23-pjqyzk5qxq-et.a.run.app/users";
    
    fetch(dataUrl)
    .then((response) => response.json())
    .then((data) => {
        const userData = data.contact;
        document.getElementById("user-email").textContent = userData.email;
        document.getElementById("user-phone").textContent = userData.phone;
        document.getElementById("user-address").textContent = userData.address;


    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

fetchUserProfile()