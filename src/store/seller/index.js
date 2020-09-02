export default {
  state: {
    sellers: []
  },
  mutations: {
    addToBag(state, payload) {
      state.productInBag.push(payload);
    },
    initialiseUserBag(state) {
      if (localStorage.getItem("userBag")) {
        state.productInBag = JSON.parse(localStorage.getItem("userBag"));
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
    }
  },
  getters: {
    getSellers(state) {
      return state.productInBag;
    },
    getSeller(state) {
      return (sellerId) => {
        return state.sellers.find((seller) => {
            return seller.id == sellerId
        })
      }
    }
  }
};
