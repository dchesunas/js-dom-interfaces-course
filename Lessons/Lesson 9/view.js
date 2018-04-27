function ItemView(container, data) {
    this.init = function () {
        this.el = document.createElement('div');
        container.appendChild(this.el);
    }

    this.render = function () {
        this.el.innerHTML = this.template();
    }

    this.template = function () {
        return `
      <div class="item-view">
        <span class="item-view__field">
          ${data.index}
        </span>
        <span class="item-view__field">
          ${data.title}
        </span>
        <span class="item-view__field">
          ${data.price}
        </span>
      </div>
    `;
    }
}

function CartView(container, data) {
    this.data = data.getData();

    this.el = document.createElement('div');
    this.el.classList.add('cart-view');

    this.data.map((item) => {
        const itemView = new ItemView(this.el, item);

        itemView.init();
        itemView.render();
    });

    container.appendChild(this.el);
}