document.addEventListener("DOMContentLoaded", () => {

    // Get inputs
    const uploadFile = document.getElementById("avatar");
    const fullNameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");
    const userNameInput = document.getElementById("username");
    
    const ticketContainer_1 = document.querySelector(".container");

    const generateTicketBtn = document.getElementById("generate-ticket");

    const ticketContainer = document.querySelector(".container-2");
    const ticketName = document.querySelector(".ticket-name");
    const ticketEmail = document.querySelector(".span-email");
    const ticketUserName = document.querySelector(".ticket-username");
    const ticketImgContainer = document.querySelector(".ticket-img");

    let uploadedImg = "" ;

    // Handle img upload

    uploadFile.addEventListener("change", (event) => {
        const file = event.target.files[0];

        if(file && (file.type === "image/png"  || file.type === "image/jpeg")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImg = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
                alert("Please upload a valid JPG or PNG image ( max size: 500K)")
        }
    });

    // Geenerate ticket and validate details
    generateTicketBtn.addEventListener("click", () => {
        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const userName = userNameInput.value.trim();

        if( !fullName || !email || !userName) {
            alert("Please fill in all details before generating the ticket.");
            return;
        }

        // set image
        if(uploadedImg) {
            ticketImgContainer.innerHTML = `<img src="${uploadedImg}" alt="User-avatar">`;
        };

        // set values in ticket
        ticketName.textContent = fullName;
        ticketEmail.textContent = email;
        ticketUserName.textContent = email;

        ticketContainer.style.display = "block";
        ticketContainer_1.style.display = "none";
    });


})