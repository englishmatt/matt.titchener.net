/*
  Progressively enhances page header by providing scroll-linked page header animation. Additionally, sets page header
  opacity to 100% when page is layout ready. This avoids a flicker effect in Chrome when reloading a page if .scrollTop
  is > 0.
*/
(function () {

  let header: HTMLElement = document.querySelector(".page-header"),
      initialHeaderHeight = header.getBoundingClientRect().height;  // Using .getBoundingClientRect provides sub-pixel
                                                                    // measurements; compare with .offsetHeight.


  window.addEventListener("DOMContentLoaded", () => { header.style.opacity = "1"; });

  window.addEventListener("scroll", () => {

    let headerHeight = window.pageYOffset > initialHeaderHeight ? 0 : initialHeaderHeight - window.pageYOffset,
        headerFractionalSize = headerHeight / initialHeaderHeight,
        headerFractionalSizeLimit = 0.5;  // Arbitrary value, chosen for good aesthetic

    headerFractionalSize =
      headerFractionalSize < headerFractionalSizeLimit ? headerFractionalSizeLimit : headerFractionalSize;

    // Update header layout
    header.style.height = headerHeight + "px";
    header.style.fontSize = headerFractionalSize + "rem";

    // Add class to indicate page is in scrolled state
    document.documentElement.classList.toggle("page-scrolled", window.pageYOffset > 0 ? true : false);
  });

}());
