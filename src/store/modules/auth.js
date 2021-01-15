export default {
    state: {
        user: {},
        token: ''

    },
    mutations: {
        SET_TOKEN_AND_USER(state, data){
            state.user = data.user;
            state.token = data.token;
        }
    },
    actions: {
        loginUser(context, payload) {
            // locallogin
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if(payload.username === 'felipe' && payload.password === '123456') {
                        const token = {token: 'AAAAAABBBBCCCCC'};
                        resolve(token);
                        localStorage.setItem('token', token.token);
                        context.commit('SET_TOKEN_AND_USER', {user: payload, token:token })
                    }else {
                        reject(new Error('Não autorizado'));
                    }
                }, 2000);
            });
        }
    }
}