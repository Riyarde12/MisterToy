import { userService } from "../../service/user-service";

export default {
    strict: true,
    state: {
        loggedInUser: null,
    },
    getters: {
        loggedInUser(state) {
            return JSON.parse(JSON.stringify(state.loggedInUser));
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user;
        }
    },
    // setLoggedInUser(state, { loggedInUser }) {
    //     state.loggedInUser = loggedInUser;
    // },
    actions: {
        loadUser({ commit }) {
            commit({ type: 'setIsLoading', isLoading: true });
            return userService.getLoggedinUser()
                .then(user => {
                    console.log('user', user);
                    commit({ type: 'setUser', user });
                })
                .catch(err => {
                    console.error('Cannot Load User', err);

                })
                .finally(() => context.commit({ type: 'setIsLoading', isLoading: false }));
        },
        async login({ commit }, { username, password }) {
            try {
                const loggedInUser = await userService.login(username, password);
                // commit({ type: 'setLoggedInUser', loggedInUser });
                // console.log('loggedInUser', loggedInUser);
                return loggedInUser;
            }
            catch (err) {
                console.log('err', err);
            }
        },
    },
};
