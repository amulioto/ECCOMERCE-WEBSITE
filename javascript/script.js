document.addEventListener('DOMContentLoaded', function() {
    // Simple "Add to Cart" button feedback
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart (functionality will be implemented later)');
            // You can add more visual feedback here
        });
    });

    // Basic Category Filtering on the Products Page
    const filterButtons = document.querySelectorAll('.product-listing .filter-button');
    const productItems = document.querySelectorAll('.product-listing .product-item');

    if (filterButtons.length > 0 && productItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.dataset.category;
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                productItems.forEach(item => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Optional: Initial filtering based on URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        if (categoryParam) {
            const activeButton = document.querySelector(`.filter-button[data-category="${categoryParam}"]`);
            if (activeButton) {
                activeButton.click();
            } else {
                document.querySelector(`.filter-button[data-category="all"]`).click();
            }
        } else {
            document.querySelector(`.filter-button[data-category="all"]`).classList.add('active');
        }
    }
});