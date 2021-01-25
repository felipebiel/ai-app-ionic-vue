export default {
    state: {
        events: [],
    },
    mutations: {
        SET_EVENTS(state, data){
            state.events = data;
        },
        SET_MORE_EVENTS(state, data) {
            state.events.push(data);
        }
    },
    actions: {
        loadEvents(context) {
            return new Promise((resolve) => {
                context.commit('SET_EVENTS', [
                    {
                      id: Date.now(),
                      bombaOnOff: 0,
                      currentLevel: 3,
                      contraSecoOnOff: 1,
                      dateHourLevelCurrent: Date.now() - 1000,
                    },
                    {
                      id: Date.now(),
                      bombaOnOff: 1,
                      currentLevel: 3,
                      contraSecoOnOff: 1,
                      dateHourLevelCurrent: Date.now() - 5000,
                    },
                    {
                      id: Date.now(),
                      bombaOnOff: 1,
                      currentLevel: 2,
                      contraSecoOnOff: 1,
                      dateHourLevelCurrent: Date.now() - 6000,
                    },
                    {
                      id: Date.now(),
                      bombaOnOff: 1,
                      currentLevel: 1,
                      contraSecoOnOff: 1,
                      dateHourLevelCurrent: Date.now() - 7000,
                    },
                    {
                      id: Date.now(),
                      bombaOnOff: 1,
                      currentLevel: 0,
                      contraSecoOnOff: 1,
                      dateHourLevelCurrent: Date.now() - 150000,
                    },
                  ])
                  resolve();
            });
        },
        loadMoreEvens(context) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    for (let index = 0; index < 5; index++) {
                        context.commit('SET_MORE_EVENTS', {
                            id: Date.now(),
                            bombaOnOff: Math.floor(Math.random() * 1),
                            currentLevel: Math.floor(Math.random() * 3),
                            contraSecoOnOff: Math.floor(Math.random() * 1),
                            dateHourLevelCurrent: context.state.events[context.state.events.length - 1].dateHourLevelCurrent - 150000,
                        });                    
                    }
                    resolve();
                }, 3000);                                
            });
        }
    }
}