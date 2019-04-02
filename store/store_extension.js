import example from "./example";
import createPersistedState from "vuex-persistedstate";

const store_extension = {
  modules: {
    example
  },
  plugins: [
    createPersistedState({
      key: "example",
      paths: ["example.example"]
    })
  ]
};

export default store_extension;
