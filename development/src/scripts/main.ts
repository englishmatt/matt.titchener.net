(function () {

  // Toggle class when documentElement has been scrolled (or not)
  window.addEventListener("scroll", () => {
    document.documentElement.classList.toggle("page-scrolled", window.pageYOffset > 0 ? true : false);
  });

}());
