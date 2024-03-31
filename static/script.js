document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = this.parentElement;
            const minusButton = productItem.querySelector('.quantity-minus');
            const plusButton = productItem.querySelector('.quantity-plus');
            const quantityCount = productItem.querySelector('.quantity-count');
            
            // Показать элементы управления количеством и скрыть кнопку "Добавить в корзину"
            this.style.display = 'none';
            minusButton.style.display = 'inline';
            plusButton.style.display = 'inline';
            quantityCount.style.display = 'inline';
        });
    });

    document.querySelectorAll('.quantity-plus').forEach(button => {
        button.addEventListener('click', function() {
            const productItem = this.parentElement;
            const quantityCount = productItem.querySelector('.quantity-count');
            let quantity = parseInt(quantityCount.textContent);
            quantity += 1;
            quantityCount.textContent = quantity;
        });
    });

    document.querySelectorAll('.quantity-minus').forEach(button => {
        button.addEventListener('click', function() {
            const productItem = this.closest('.product-item'); // Используем closest, чтобы наверняка найти .product-item
            const quantityCount = productItem.querySelector('.quantity-count');
            let quantity = parseInt(quantityCount.textContent);
            
            if (quantity > 1) {
                quantity -= 1;
                quantityCount.textContent = quantity;
            } else {
                // Убедитесь, что мы действительно скрываем элементы управления
                productItem.querySelector('.quantity-minus').style.display = 'none';
                productItem.querySelector('.quantity-plus').style.display = 'none';
                quantityCount.style.display = 'none';
                
                const addToCartButton = productItem.querySelector('.add-to-cart');
                addToCartButton.style.display = 'inline'; // Показываем кнопку "Добавить в корзину"
            }
        });
    });
});
