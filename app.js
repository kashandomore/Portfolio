const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const navbar = document.getElementById("navbar");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// window.addEventListener("scroll", () => {
//   if (document.documentElement.scrollTop > 60) {
//     navbar.classList.add("nav-small");
//     navbar.classList.remove("nav");
//   } else {
//     navbar.classList.add("nav");
//     navbar.classList.remove("nav-small");
//   }
// });

// $(function () {
//   $("#WAButton").floatingWhatsApp({
//     phone: "+923074032148", //WhatsApp Business phone number International format-
//     //Get it with Toky at https://toky.co/en/features/whatsapp.
//     headerTitle: "Chat with us on WhatsApp!", //Popup Title
//     popupMessage: "Hello, how can we help you?", //Popup Message
//     showPopup: true, //Enables popup display
//     buttonImage:
//       '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
//     //headerColor: 'crimson', //Custom header color
//     //backgroundColor: 'crimson', //Custom background button color
//     position: "right",
//   });
// });
