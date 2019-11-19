function scrollToDiv(divClass) {
    let offset = $('.header-nav-list').height()
    $('html, body').animate({
        scrollTop: $(divClass).offset().top-offset
     }, 1000);
}






function addEventListeners() {
    $(`.down-arrow, a[href='#portfolio']`).click(e => {
        e.preventDefault();
        scrollToDiv('.homepage-portfolio');
    })
}
$(addEventListeners);




