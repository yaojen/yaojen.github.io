new Vue({
    el: '#app',
    data: {
        products: [
            {
                id: 112233445,
                title: '啞鈴-10kg',
                category: '健身器材',
                content: '啞鈴-10kg',
                description: '衡桿*1 2.5kg槓片* 4',
                imageUrl: 'https://images.unsplash.com/photo-1543975200-8e313fb04fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                enabled: true,
                origin_price: 2000,
                price: 1499,
                unit: 'pcs'

            },
            {
                id: 123456789,
                title: '啞鈴-20kg',
                category: '健身器材',
                content: '啞鈴-20kg',
                description: '衡桿*1 2.5kg槓片* 4 5kg*4',
                imageUrl: 'https://images.unsplash.com/photo-1583454122781-8cf8f5af9d2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60片',
                enabled: false,
                origin_price: 4000,
                price: 29999,
                unit: 'pcs'

            },
            {
                id: 234567890,
                title: '健身椅',
                category: '健身器材',
                content: '健身椅',
                description: '健身椅*1',
                imageUrl: 'https://images.unsplash.com/photo-1590238868893-85f766f145fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
                enabled: true,
                origin_price: 5000,
                price: 3500,
                unit: 'pcs'
            }],
        tempProduct: {},
    },
    methods: {
        updateProduct() {
            if (this.tempProduct.id) {
                const id = this.tempProduct.id;
                this.products.forEach((item, i) => {
                    if (item.id === id) {
                        this.products[i] = this.tempProduct;
                    }
                });
            }
            else {
                // Unix Timestamp
                const id = new Date().getTime();
                this.tempProduct.id = id;
                this.products.push(this.tempProduct);
            }
            this.tempProduct = {};
            $('#exampleModal').modal('hide');

        },
        openModal(type, item) {
            switch (type) {
                case 'new':
                    this.tempProduct = {};
                    $('#exampleModal').modal('show');
                    break;
                case 'edit':
                    this.tempProduct = Object.assign({}, item);
                    $('#exampleModal').modal('show');
                    break;
                case 'delete':
                    $('#DeleteModal').modal('show');
                    this.tempProduct = Object.assign({}, item);
                    break;
                default:
                    break;
            }
        },
        DeleteConfirm(e) {
            const id = this.tempProduct.id;
            this.products.forEach((item, i) => {
                if (item.id === id) {
                    this.products.splice(i, 1);
                    this.tempProduct = {};
                }
            });
            $('#DeleteModal').modal('hide');
        },

    }
});

