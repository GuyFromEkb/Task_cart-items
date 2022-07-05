document.addEventListener("DOMContentLoaded", function() {

    document.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('items__control')) {

            const atr = target.getAttribute(('data-action'));
            const counter = target.closest('.counter-wrapper').querySelector('[data-counter]');


            if (atr == "plus") { counter.innerText = ++counter.innerText; }

            if (atr == "minus") {
                if (counter.innerText > 1) { counter.innerText = --counter.innerText; }
            }



            // console.log(atr, counter);
        }







    });

});