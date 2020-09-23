export default {
  state: {
    productInBag: [],
    selectedAddress: {},
    shoppingType: {},
    insurance: {},
    shippingAdresses: [
      {
        id: 1,
        name: "Kelly Hoffman",
        country: "Ukraine",
        state: "Kharkiv",
        zip_code: "Ukraine",
        city: "Kharkiv",
        address: "per. Pushkina 12",
        default: false
      },
      {
        id: 2,
        name: "Kelly Hoffman",
        country: "Canada",
        state: "Quebec",
        zip_code: "134234",
        city: "Ottawa",
        address: "ave. Lenina 12",
        default: false
      },
      {
        id: 3,
        name: "Kelly Hoffman",
        country: "USA",
        state: "Texas",
        zip_code: "34523",
        city: "Miniapalis",
        address: "ave. Lenina 12",
        default: false
      }
    ]
  },
  mutations: {
    addToBag(state, payload) {
      state.productInBag.push(payload);
    },
    addToSelectedAddress(state, payload) {
      state.selectedAddress[payload.sellerId] = payload.address;
    },
    initialiseUserBag(state) {
      if (localStorage.getItem("userBag")) {
        state.productInBag = JSON.parse(localStorage.getItem("userBag"));
      }
      if (localStorage.getItem("selectedAddress")) {
        state.selectedAddress = JSON.parse(
          localStorage.getItem("selectedAddress")
        );
      }
    },
    modifyFieldInBag(state, obj) {
      state.productInBag.forEach(prodInBag => {
        if (prodInBag.id == obj.id) {
          prodInBag[obj.name] = obj.value;
        }
      });
      localStorage.setItem("userBag", JSON.stringify(state.productInBag));
    },
    removeProductFromBag(state, id) {
      console.log(id);
      state.productInBag.forEach((prodInBag, index) => {
        if (prodInBag.id == id) {
          state.productInBag.splice(index, 1);
        }
      });
      localStorage.setItem("userBag", JSON.stringify(state.productInBag));
    },
    modifyInsurance(state, { sellerId, value }) {
      state.insurance[sellerId] = value;
    },
    modifyShoppingType(state, { sellerId, value }) {
      state.shoppingType[sellerId] = value;
    },
    initialiseShoppingType(state) {
      state.productInBag.forEach(el => {
        state.shoppingType[el.sellerId] = null;
        state.insurance[el.sellerId] = false;
      });
    }
    // addNewFieldToBag(state, id, fieldName, value){
    //   console.log(id, fieldName, value);
    //   state.productInBag.forEach((prodInBag) => {
    //     if (prodInBag.id == id) {
    //       prodInBag[fieldName] = value;
    //     }
    //   });
    //   localStorage.setItem("userBag", JSON.stringify(state.productInBag));
    // }
  },
  actions: {
    addProductToBag({ commit, state }, product) {
      commit("addToBag", product);
      localStorage.setItem("userBag", JSON.stringify(state.productInBag));
    },
    addAddressToSelectedAddress({ commit, state }, shipping) {
      commit("addToSelectedAddress", shipping);
      localStorage.setItem(
        "selectedAddress",
        JSON.stringify(state.selectedAddress)
      );
    }
  },
  getters: {
    getProductsInBag(state) {
      return state.productInBag;
    },
    countProductsInBag(state) {
      return state.productInBag.length;
    },
    isSelectedAddress(state) {
      return sellerId => {
        return !!state.selectedAddress[sellerId];
      };
    },
    getSelectedAddress(state) {
      return state.selectedAddress;
    },
    getDefaultAddress(state) {
      // return state.selectedAddress;
      return state.shippingAdresses.find(address => {
        return address.default;
      });
    },
    getShippingAdresses(state) {
      return state.shippingAdresses;
    },
    getInsurance(state) {
      return state.insurance;
    },
    getShoppingType(state) {
      return state.shoppingType;
    }
  }
};
