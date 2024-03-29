import CartSlice from "../Slices/CartSlice";

const { configureStore } = require("@reduxjs/toolkit");

const AppStore = configureStore({
    reducer : {
        cart : CartSlice,
    }
});

export default AppStore;