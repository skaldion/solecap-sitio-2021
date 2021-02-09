const app = Vue.createApp({
	data() {
		return {
			cart: [],
			services: [
				{
					id: 1,
					name: 'Seguridad',
					description: 'por elemento',
					price: 1200
				},{
					id: 2,
					name: 'Electricista',
					description: 'por elemento',
					price: 800
				},{
					id: 3,
					name: 'Sanitizacion',
					description: 'por elemento',
					price: 500
				},
			]
		}
	},
	methods: {
		addToCart(id) {
			if(!id) {
				return;
			}
			let selectedItem = this.services.find(item => item.id === id)

			if (selectedItem) {
				let existingItem = this.cart.find(item => item.id === id)

				if (existingItem) {
					existingItem.quantity++;
				} else {
					selectedItem.quantity = 1;
					this.cart.push(selectedItem)
				}
			}
		},
		removeFromCart(selectedIndex) {
			this.cart = this.cart.filter((item,index) => index !== selectedIndex)
		}
	}
})