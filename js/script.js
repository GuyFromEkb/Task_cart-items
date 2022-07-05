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


                if (target.closest('.cart-wrapper')) {

                    if (counter.innerText == 1) {

                        target.closest('.cart-item').remove();
                    }



                }
                if (counter.innerText > 1)

                { counter.innerText = --counter.innerText; }
            }

        }
    });

    //товар в корзину

    const wraper = document.querySelector('.roll-wraper');
    const cartWraper = document.querySelector('.cart-wrapper');




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


        }



    });
    cartWraper.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('cart-item__close') || target.closest('.cart-item__close')) {
            target.closest('.cart-item').remove();
        }



    });

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


    //удаление из корзины











});