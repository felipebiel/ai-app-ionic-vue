import { createStore } from 'vuex';
import auth from './modules/auth';
import event from './modules/event';

const store = createStore({
    modules: {
        auth,
        event
    }
})

export default store;