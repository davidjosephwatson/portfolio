function mobileDropMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


function scrollToDiv(divClass) {
    let offset = $('.topnav').height()
    $('html, body').animate({
        scrollTop: $(divClass).offset().top-offset
     }, 1000);
}

function addEventListeners() {
    $(`.down-arrow, .portfolio`).click(e => {
        e.preventDefault();
        scrollToDiv('.homepage-portfolio');
    })
    $(`.about`).click(e => {
        e.preventDefault();
        scrollToDiv('.homepage-about');
    })
    $(`.contact`).click(e => {
        e.preventDefault();
        scrollToDiv('.homepage-contact');
    })

}
$(addEventListeners);