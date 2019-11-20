function scrollToDiv(divClass) {
    let offset = $('.navbar').height()
    $('html, body').animate({
        scrollTop: $(divClass).offset().top-offset
     }, 1000);
}






function addEventListeners() {
    $(`.down-arrow, a[href='#portfolio']`).click(e => {
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




