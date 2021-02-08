app.component('service-display', {
    props: {
        cart: {
            type: Array,
            required: true
        },
        services: {
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
        <span class="badge badge-secondary badge-pill">{{cart.length}}</span>
      </h4>
        <div class="input-group mb-4">
            <select class="custom-select" v-model='selected'>
              <option value='0'>Elige tu servicio</option>
              <option 
                v-for="service in services"
                :key='service.id'
                :value='service.id'
                >{{service.name}}</option>
            </select>   
          <div class="input-group-append">
            <button 
                v-on:click="addToCart"
                type="submit" class="btn btn-secondary">Agregar</button>
          </div>
        </div>
      <ul class="list-group mb-3">
        <li 
            v-for="(item, index) in cart" 
            :key='item.id'
            class="list-group-item d-flex justify-content-between lh-condensed" >
          <div>
            <h6 class="my-0">{{item.name}}</h6>
            <small class="text-muted">{{item.description}}</small>
          </div>
          <div class="text-muted">{{ '$' +item.price}}</div>
          <div 
            class='close-button'
            v-on:click='removeFromCart(index)'
            >x</div>
        </li>
        <li 
            v-show='cart.length'
            class="list-group-item">
            <div class='d-flex justify-content-between'>
              <span>Total (MXN)</span>
              <strong>{{ '$'+getTotal }}</strong>
            </div>
        </li>
        <li 
            v-show='!cart.length'
            class="list-group-item empty">
            <div class='d-flex justify-content-center'>
              <span>VACIO</span>
            </div>
        </li>
      </ul>
    </div>
    <div class="col-md-6 order-md-1">
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
        selected: 0
    }
  },
  methods: {
      addToCart() {
          if (!this.selected) {
              return;
          }
          this.$emit('add-to-cart', this.selected)
      },
      removeFromCart(index) {
          this.$emit('remove-from-cart', index)
      }
  },
  computed: {
      getTotal() {
          return this.cart.reduce((sum, item) => sum + item.price, 0) || 0
      }
  }
})