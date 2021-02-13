$(document).ready(function () {


    
document.getElementById("cart-info").addEventListener("click", function () {
  const cart = document.getElementById("cart");
  cart.classList.toggle("show-cart");
  console.log(cart);
});



  $(".nav-item a").click(function (link) {
    link.preventDefault();

    let target = $(this).attr("href");

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 25,
        },
        1000
      );
  });
});








