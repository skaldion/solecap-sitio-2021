app.component('service-display', {
    props: {
        cart: {
            type: Array,
            required: true
        }
    },
  template: 
  /*html*/
  `<div class="container">
  <div class="py-5 text-center">
    <h2>Cotizaciones</h2>
    <p class="lead">Calcula el precio de los servicios que buscas, en tiempo real.</p>
  </div>

  <div class="row">
    <div class="col-md-6 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">Servicios</span>
        <span class="badge badge-secondary badge-pill">3</span>
      </h4>
        <div class="input-group mb-4">
            <select class="custom-select">
              <option selected>Elige tu servicio</option>
              <option value="1">Seguridad</option>
              <option value="2">Electricista</option>
              <option value="3">Sanitizacion</option>
            </select>   
          <div class="input-group-append">
            <button type="submit" class="btn btn-secondary">Agregar</button>
          </div>
        </div>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Seguridad</h6>
            <small class="text-muted">Descripcion</small>
          </div>
          <span class="text-muted">$1200</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Electricista</h6>
            <small class="text-muted">Descripcion</small>
          </div>
          <span class="text-muted">$800</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Sanitizacion</h6>
            <small class="text-muted">Descripcion</small>
          </div>
          <span class="text-muted">$500</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Total (MXN)</span>
          <strong>$2500</strong>
        </li>
      </ul>
    </div>
    <div class="col-md-6 order-md-1">
      <h4 class="mb-3">Billing address</h4>
      <form class="needs-validation" novalidate="">
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">Nombre</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
            <div class="col-md-6 mb-3">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email">
                <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>
        </div>

        <div class="mb-3">
          <label for="preguntas">Preguntas <span class="text-muted">(Opcional)</span></label>
          <div class="input-group">
            <textarea class="form-control" id="preguntas" required=""></textarea>
          </div>
        </div>
        <hr class="mb-4">
        <button class="btn btn-primary btn-lg btn-block" type="submit">Enviar cotizacion</button>
      </form>
    </div>
  </div>
</div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
          { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
        ],
        reviews: []
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
          this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      }
  },
  computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      }
  }
})