document.addEventListener('DOMContentLoaded', () => {
    console.log("Website Loaded Successfully!");

    const thankyouMsg = document.getElementById('welcome-btn');
    if (thankyouMsg) {
        thankyouMsg.addEventListener('click', () => {
            alert("Hello! Thank You for Knowing Me More Hope you have a great day!");
        });
    }
});
