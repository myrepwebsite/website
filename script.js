//listen for submit
document.querySelector(".form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    //Get all input values
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let message = document.querySelector('.message').value;
    let tel = '';

    if (document.querySelector('.tel')) {
        tel = document.querySelector('.tel').value;
    }
    document.querySelector(".form").reset();
    sendEmail(name, email, tel, message);
}

function sendEmail(name, email, tel, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'fjangda7@gmail.com',
        Password: 'lpbhowueakspqtfo',
        To: 'fjangda7@gmail.com',
        From: 'fjangda7@gmail.com',
        Subject: `${name} sent you a message from myrep.ca`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Tel: ${tel} <br/> Message: ${message}`,
    }).then((message) => alert("mail sent successfully part3"));
}
