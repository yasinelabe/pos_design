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
    document.querySelector('.calculator_modal').classList.add('animate__fadeIn', 'animate__fadeOut');
});


// show modal when history icon is clicked use little animation
document.querySelector('.history').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.modal_shadow').removeAttribute('hidden');
    document.querySelector('.history_modal').removeAttribute('hidden');
    document.querySelector('.history_modal').classList.add('animate__fadeIn', 'animate__fadeOut');
});

let products_part = document.querySelector('.products_part');
// before fetching data from json file we need to show loading animation

// fetch products from the products.json file
fetch('../products.json')
    .then(function (response) {
        return response.json();
    }
    )
    .then(function (data) {
        console.log(data);
        // loop through the products and add them to the DOM
        data.products.forEach(function (product) {
            // create a new div element
            let newDiv = document.createElement('div');
            // add class to the new div
            newDiv.classList.add('product_card');
            // add id to the new div
            newDiv.id = product.id;
            // add the product name to the new div
            newDiv.innerHTML = `
                                <div class="product_image">
                                    <img src="${product.image}" alt="">
                                </div>
                                <div class="product_info">
                                    <div class="product_name">
                                        ${product.name}
                                    </div>
                                    <div class="product_price">
                                        $${product.price}
                                    </div>
                                    <div class="button">
                                        <button class="btn">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
            `
            // add the new div to the DOM
            products_part.appendChild(newDiv);
        });
    }
    )
    .catch(function (error) {
        console.log(error);
    });

