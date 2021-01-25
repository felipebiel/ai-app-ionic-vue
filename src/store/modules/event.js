export default {
    state: {
        events: [],
    },
    mutations: {
        SET_EVENTS(state, data){
        },
    },
    actions: {
        loadEvents(context) {
            return new Promise((resolve, reject) => {
                    resolve('ok');
                    reject();
            });
        }
    }
}