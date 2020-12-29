$(document).ready(function () {
  document.querySelector(".nav__btn").addEventListener("click", showNav);
  function showNav() {
    document.querySelector(".nav__links").classList.toggle("show__links");
  }

  $(".nav__single-link").click(function (link) {
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



