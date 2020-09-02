export default {
  state: {
    productInBag: []
  },
  mutations: {
    addToBag(state, payload) {
      state.productInBag.push(payload);
    },
    // increaseCountInBag (state, payload) {
    //     state.productInBag = state.productInBag.map(el => {
    //         if (el.id === payload.id && el.color === payload.color && el.size === payload.size ) {
    //             el.count = el.count + payload.count
    //             return el;
    //         }
    //         return el;
    //       })
    // },
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
    }
  },
  actions: {
    addProductToBag({ commit, state }, product) {
      commit("addToBag", product);
      localStorage.setItem("userBag", JSON.stringify(state.productInBag));
    }
  },
  getters: {
    getProductsInBag(state) {
      return state.productInBag;
    },
    countProductsInBag(state) {
      return state.productInBag.length;
    }
  }
};
