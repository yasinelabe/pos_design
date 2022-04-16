// hide all modals when modal_shadow is clicked dont' use jquery
document.querySelector('.modal_shadow').addEventListener('click', function (e) {
    e.preventDefault();
    // add hidden attribute to all modals
    document.querySelector('.modal_shadow').setAttribute('hidden', '');
    document.querySelector('.calculator_modal').setAttribute('hidden', '');
    document.querySelector('.history_modal').setAttribute('hidden', '');
});

// show modal when calculator icon is clicked use little animation
document.querySelector('.calculator').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.modal_shadow').removeAttribute('hidden');
    document.querySelector('.calculator_modal').removeAttribute('hidden');
    document.querySelector('.calculator_modal').classList.add('animate__fadeIn','animate__fadeOut');
});


// show modal when history icon is clicked use little animation
document.querySelector('.history').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.modal_shadow').removeAttribute('hidden');
    document.querySelector('.history_modal').removeAttribute('hidden');
    document.querySelector('.history_modal').classList.add('animate__fadeIn','animate__fadeOut');
});

