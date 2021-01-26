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
        },
        checkAuth(context) {
            return new Promise((resolve, reject) => {
                // validação simples
                const token = localStorage.getItem('token');
                // simular validar token no back
                if(token){
                    context.commit('SET_TOKEN_AND_USER', {user: { username:'felipe', password:'123456'}, token:token })
                    resolve('ok')
                } else {
                    reject();
                }
            });
        },
        logout(context) {
            return new Promise((resolve) => {
                localStorage.removeItem('token');
                context.commit('SET_TOKEN_AND_USER', {user: {}, token: "" })
                resolve();
            });
        }
    }
}