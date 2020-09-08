export default {
  state: {
    productInBag: [],
    shippingInfo: {}
  },
  mutations: {
    addToBag(state, payload) {
      state.productInBag.push(payload);
    },
    addToShippingInfo(state, payload) {
      if (payload.sellerId in state.shippingInfo) {
        state.shippingInfo[payload.sellerId].push(payload);
      } else {
        state.shippingInfo[payload.sellerId] = [payload];
      }
    },
    initialiseUserBag(state) {
      if (localStorage.getItem("userBag")) {
        state.productInBag = JSON.parse(localStorage.getItem("userBag"));
      }
      if (localStorage.getItem("shipping")) {
        state.shippingInfo = JSON.parse(localStorage.getItem("shipping"));
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
    addAddressToShippingInfo({ commit, state }, shipping) {
      commit("addToShippingInfo", shipping);
      localStorage.setItem("shipping", JSON.stringify(state.shippingInfo));
    }
  },
  getters: {
    getProductsInBag(state) {
      return state.productInBag;
    },
    countProductsInBag(state) {
      return state.productInBag.length;
    },
    isAddressChosen(state) {
      return sellerId => {
        return state.shippingInfo[sellerId];
      };
    }
  }
};
