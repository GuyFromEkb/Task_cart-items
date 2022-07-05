document.addEventListener("DOMContentLoaded", function() {

    //счётчик товара
    document.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('items__control')) {

            const atr = target.getAttribute(('data-action'));
            const counter = target.closest('.counter-wrapper').querySelector('[data-counter]');


            if (atr == "plus") {
                counter.innerText = ++counter.innerText;
            } else if (atr == "minus") {

                //удаление из корзины
                if (target.closest('.cart-wrapper')) {

                    if (counter.innerText == 1) {

                        target.closest('.cart-item').remove();
                        emptyCart();
                    }
                }
                if (counter.innerText > 1)

                { counter.innerText = --counter.innerText; }
            }

        }
    });


    //КОРЗИНА
    const wraper = document.querySelector('.roll-wraper');
    const cartWraper = document.querySelector('.cart-wrapper');

    (function() {
        //товар в корзину
        const wraper = document.querySelector('.roll-wraper');
        wraper.addEventListener('click', (e) => {

            const target = e.target;

            if (target.hasAttribute('data-cart')) {

                const card = target.closest('.card');

                const cardInfo = {
                    id: +card.getAttribute('data-id'),
                    imgSrc: card.querySelector('.product-img').getAttribute('src'),
                    name: card.querySelector('.item-title').innerText,
                    quantity: card.querySelector('.text-muted').innerText,
                    weight: card.querySelector('.price__weight').innerText,
                    price: card.querySelector('.price__currency').innerText,
                    counter: +card.querySelector('[data-counter]').innerText
                };

                renderCart(cardInfo);
                card.querySelector('[data-counter]').innerText = 1;
                emptyCart();

            }
        });

    })();
    //удаление из корзины

    // (function() {

    // })();

    (function() {
        const cartWraper = document.querySelector('.cart-wrapper');

        cartWraper.addEventListener('click', (e) => {
            const target = e.target;

            if (target.classList.contains('cart-item__close') || target.closest('.cart-item__close')) {
                target.closest('.cart-item').remove();
                emptyCart();
            }

        });
    })();


    //товар в корзину
    wraper.addEventListener('click', (e) => {

        const target = e.target;

        if (target.hasAttribute('data-cart')) {

            const card = target.closest('.card');

            const cardInfo = {
                id: +card.getAttribute('data-id'),
                imgSrc: card.querySelector('.product-img').getAttribute('src'),
                name: card.querySelector('.item-title').innerText,
                quantity: card.querySelector('.text-muted').innerText,
                weight: card.querySelector('.price__weight').innerText,
                price: card.querySelector('.price__currency').innerText,
                counter: +card.querySelector('[data-counter]').innerText
            };

            renderCart(cardInfo);
            card.querySelector('[data-counter]').innerText = 1;
            emptyCart();

        }



    });


    //удаление из корзины


    cartWraper.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('cart-item__close') || target.closest('.cart-item__close')) {
            target.closest('.cart-item').remove();
            emptyCart();
        }

    });


    //добавление в корзину
    function renderCart({ id, imgSrc, name, quantity, weight, price, counter }) {

        const cartWrap = document.querySelector('.cart-wrapper');
        const cartId = document.querySelector(`[data-id="${id}"]`);


        if (cartId) {
            const counterInCart = cartId.querySelector('[data-counter]');

            // console.log(parseInt(counterInCart.innerText), counter);

            counterInCart.innerText = parseInt(counterInCart.innerText) + counter;

        } else {
            const cartItem =
                `
                <div class="cart-item" data-id="${id}">
                                    <div class="cart-item__close">
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div class="cart-item__top">
                                        <div class="cart-item__img">
                                            <img src="${imgSrc}" alt="img">
                                        </div>
                                        <div class="cart-item__desc">
                                            <div class="cart-item__title">${name}</div>
                                            <div class="cart-item__weight">${quantity} / ${weight}</div>

                                
                                            <div class="cart-item__details">

                                                <div class="items items--small counter-wrapper">
                                                    <div class="items__control" data-action="minus">-</div>
                                                    <div class="items__current" data-counter="">${counter}</div>
                                                    <div class="items__control" data-action="plus">+</div>
                                                </div>

                                                <div class="price">
                                                    <div class="price__currency">${price}</div>
                                                </div>

                                            </div>
                            

                                        </div>
                                    </div>
                                </div>
            `;

            cartWrap.insertAdjacentHTML('beforeend', cartItem);
        }







    }

    //информация о данных в  корзине
    function emptyCart() {
        console.log(cartWraper.children.length);

        if (cartWraper.children.length > 0) {
            document.querySelector('.cart-empty').classList.add('hide');
            document.querySelector('#order-form').classList.remove('hide');
        } else {
            document.querySelector('.cart-empty').classList.remove('hide');
            document.querySelector('#order-form').classList.add('hide');
        }
    }










});