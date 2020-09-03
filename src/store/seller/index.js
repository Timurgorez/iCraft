export default {
  state: {
    sellers: [
      {
        id: "1",
        name: "Natalie Designs",
        description:
          "I am a crochet and jewelry designer. | share my inner self with the world by creating things for people with love, care and attention to detail. My hope is for everyone to have at least one piece of unique handmade apparel that they can treasure, knowing it was made by someone who put their heart into it.",
        location: {
          country: "Russia",
          city: "Moscow",
          street: "per. Pushkina 12",
          zip: "12456"
        },
        rating: {
          count: 18,
          stars: 4.56
        }
      },
      {
        id: "2",
        name: "Tom Cruse",
        description:
          "I am a crochet and jewelry designer. | share my inner self with the world by creating things for people with love, care and attention to detail. My hope is for everyone to have at least one piece of unique handmade apparel that they can treasure, knowing it was made by someone who put their heart into it.",
        location: {
          country: "Canada",
          city: "Ottava",
          street: "per. Pushkina 12",
          zip: "12456"
        },
        rating: {
          count: 17,
          stars: 1.83
        }
      },
      {
        id: "3",
        name: "Denis Seleznov",
        description:
          "I am a crochet and jewelry designer. | share my inner self with the world by creating things for people with love, care and attention to detail. My hope is for everyone to have at least one piece of unique handmade apparel that they can treasure, knowing it was made by someone who put their heart into it.",
        location: {
          country: "Ukraine",
          city: "Kharkiv",
          street: "per. Pushkina 12",
          zip: "12456"
        },
        rating: {
          count: 34,
          stars: 2.34
        }
      },
      {
        id: "4",
        name: "Sergio Picasso",
        description:
          "I am a crochet and jewelry designer. | share my inner self with the world by creating things for people with love, care and attention to detail. My hope is for everyone to have at least one piece of unique handmade apparel that they can treasure, knowing it was made by someone who put their heart into it.",
        location: {
          country: "Italy",
          city: "Milan",
          street: "per. Pushkina 12",
          zip: "12456"
        },
        rating: {
          count: 9,
          stars: 4.86
        }
      }
    ]
  },
  mutations: {
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
    // addProductToBag({ commit, state }, product) {
    //   commit("addToBag", product);
    //   localStorage.setItem("userBag", JSON.stringify(state.productInBag));
    // }
  },
  getters: {
    getSellers(state) {
      return state.sellers;
    },
    getSeller(state) {
      return sellerId => {
        return state.sellers.find(seller => {
          return seller.id == sellerId;
        });
      };
    }
  }
};
