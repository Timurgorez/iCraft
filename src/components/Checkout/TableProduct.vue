<template>
  <b-row class="table-product">
    <b-col cols="12" lg="6">
      <div class="first-block">
        <div class="img-block">
          <div class="img-block__img">
            <img :src="product.images[0]" :alt="product.name" />
          </div>
          <div class="img-block__btns">
            Remove
          </div>
        </div>
        <div class="desc-block">
          <h3 class="desc-block__title">{{ product.name }}</h3>
          <div class="color">
            <ColorChoose @model_color="model_color_trigger" />
          </div>
          <div class="size">
            <SizeChoose @model_size="model_size_trigger" />
            <span>Sizing Chart</span>
          </div>

          <div class="custom-request">
            <Checkbox
              labelText="This will be a gift"
              inputName="gift-order"
              id="gift-order"
              value="gift-order"
              @changeHandler="customGiftHandler"
            />
            <div class="custom-request__hint" id="popover-gift__hint"></div>

            <b-popover
              custom-class="custom-popover"
              target="popover-gift__hint"
              :show.sync="popoverGift"
              triggers="hover"
            >
              <h4>Placing Custom Orders</h4>
              You can place a Custom Order for this item and provide seller with
              your color and other product preferences and modifications. You
              will be able to add this information at the Checkout.
            </b-popover>
          </div>
          <div class="custom-request">
            <Checkbox
              labelText="This is a Custom Order"
              inputName="custom-order"
              id="custom-order"
              value="custom-order"
              @changeHandler="customRequstHandler"
            />
            <div
              class="custom-request__hint"
              id="popover-custom-request__hint"
            ></div>

            <b-popover
              custom-class="custom-popover"
              target="popover-custom-request__hint"
              :show.sync="popoverCustomRequest"
              triggers="hover"
            >
              <h4>Placing Custom Orders</h4>
              You can place a Custom Order for this item and provide seller with
              your color and other product preferences and modifications. You
              will be able to add this information at the Checkout.
            </b-popover>
          </div>
          <NoteForSeller
            labelText="Note for Seller (Optional)"
            inputName="note-order"
            id="note-order"
            value="note-order"
            @changeHandler="noteHandler"
          />
        </div>
      </div>
    </b-col>
    <b-col cols="12" lg="2">
      <div class="quantity">
        <integer-plusminus
          :min="quantity_min"
          :max="quantity_max"
          :step="quantity_step"
          v-model="model_quantity"
        >
          {{ model_quantity }}
          <template slot="decrement">-</template>

          <template slot="increment">+</template>
        </integer-plusminus>
        <span class="quantity-available"
          >Only {{ product.available }} Avaliable</span
        >
      </div>
    </b-col>
    <b-col cols="12" lg="2">
      <div class="price">
        <span class="price__new"
          >$ {{ product.price.new }}
          <span class="price__currency">{{ product.price.currency_code }}</span>
        </span>
        <span class="price__old"
          >$ {{ product.price.old }}
          <span class="price__currency">{{ product.price.currency_code }}</span>
        </span>
      </div>
    </b-col>
    <b-col cols="12" lg="2">
      <span class="count-sum-price">
        $ {{ countSumPrice }} {{ product.price.currency_code }}</span
      >
    </b-col>
  </b-row>
</template>

<script>
import { IntegerPlusminus } from "vue-integer-plusminus";
import Checkbox from "../FormElements/Checkbox.vue";
import SizeChoose from "../FormElements/SizeChoose.vue";
import ColorChoose from "../FormElements/ColorChoose.vue";
import NoteForSeller from "../FormElements/NoteForSeller.vue";

export default {
  name: "TableProduct",
  data() {
    return {
      quantity_min: 1,

      quantity_step: 1,
      model_quantity: this.product.count,

      model_size: "M",
      model_color: "red",

      popoverCustomRequest: false,
      popoverGift: false
    };
  },
  props: {
    product: Object
  },
  components: {
    IntegerPlusminus,
    Checkbox,
    SizeChoose,
    ColorChoose,
    NoteForSeller
  },
  methods: {
    customRequstHandler() {
      console.log("customRequstHandler");
    },
    customGiftHandler() {
      console.log("customGiftHandler");
    },
    noteHandler() {
      console.log("noteHandler");
    },
    model_size_trigger(model_size) {
      this.model_size = model_size;
    },
    model_color_trigger(model_color) {
      this.model_color = model_color;
    }
  },
  computed: {
    quantity_max() {
      return this.product.available;
    },
    countSumPrice() {
      return this.product.price.new * this.product.count;
    }
  },
  watch: {
    countSumPrice() {
      return this.product.price.new * this.product.count;
    }
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped lang="scss">
.table-product {
  border-bottom: 1px solid #d7d7d7;
  border-left: 1px solid #d7d7d7;
  border-right: 1px solid #d7d7d7;
  padding-top: 15px;
  padding-bottom: 15px;
}

.first-block {
  display: flex;
  flex-wrap: wrap;
}

.img-block {
  width: 20%;
  padding-right: 20px;
}
.desc-block {
  width: 80%;
}

.desc-block__title {
  font-family: NeueKabel;
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: normal;
  color: $purple_color_btn;
}

.quantity-available {
  font-family: $font_montserrat_regular;
  font-size: 14px;
  color: $text_color_red;
}

.price__new {
  font-family: $font_montserrat_regular;
  font-size: 20px;
  color: #000000;
}

.price__new,
.price__old {
  display: inline-block;
}
.price__old {
  font-family: $font_montserrat_medium;
  font-size: 14px;
  font-weight: 500;
  color: #545454;
  padding-right: 10px;
  text-decoration: line-through;
}
.img-block__img {
  img {
    max-height: 140px;
    width: 100%;
  }
}

.count-sum-price {
  font-family: $font_montserrat_regular;
  font-size: 20px;
  color: $text_color;
}

@media only screen and (max-width: 480px) {
}
</style>
