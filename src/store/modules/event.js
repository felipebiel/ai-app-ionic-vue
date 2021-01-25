export default {
    state: {
        events: [],
    },
    mutations: {
        SET_EVENTS(state, data){
            state.events = data;
        },
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
        }
    }
}