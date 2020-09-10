export default {
  state: {
    productInBag: [],
    selectedAddress: {}
  },
  mutations: {
    addToBag(state, payload) {
      state.productInBag.push(payload);
    },
    addToSelectedAddress(state, payload) {
      if (payload.sellerId in state.selectedAddress) {
        state.selectedAddress[payload.sellerId].push(payload);
      } else {
        state.selectedAddress[payload.sellerId] = [payload];
      }
    },
    initialiseUserBag(state) {
      if (localStorage.getItem("userBag")) {
        state.productInBag = JSON.parse(localStorage.getItem("userBag"));
      }
      if (localStorage.getItem("shipping")) {
        state.selectedAddress = JSON.parse(localStorage.getItem("shipping"));
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
    addAddressToSelectedAddress({ commit, state }, shipping) {
      commit("addToSelectedAddress", shipping);
      localStorage.setItem("shipping", JSON.stringify(state.selectedAddress));
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
    }
  }
};
