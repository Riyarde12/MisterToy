import { toyService } from '../../service/toy-service.js';

export default {
    state: {
        toys: null,
        filterBy: null,
        // toyToEdit: null,
        userSignUp: {
            fullname: "",
            inputUsername: "",
            inputPassword: "",
        },
    },
    getters: {
        toys(state) {
            return JSON.parse(JSON.stringify(state.toys));
        },
        // toy(state) {
        //     return JSON.parse(JSON.stringify(state.toyToEdit));
        // },
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys;
        },
        removeToy(state, { id }) {
            const idx = state.toys.findIndex(toy => toy._id === id);
            state.toys.splice(idx, 1);
        },
        saveToy(state, { savedToy }) {
            const idx = state.toys.findIndex(currToy => currToy._id === savedToy._id);
            if (idx !== -1) state.toys.splice(idx, 1, savedToy);
            else state.toys.push(savedToy);
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        },
        // setToyToEdit(state, { toy }) {
        //     state.toyToEdit = toy;
        // },
    },
    actions: {
        async loadToys({ commit, state }) {
            try {
                const toys = await toyService.query(state.filterBy);

                commit({ type: 'setToys', toys });
            }
            catch (err) {
                console.log('err', err);
            }
        },
        async removeToy({ commit }, { id }) {
            console.log('id', id);
            try {
                await toyService.remove(id);
                commit({ type: 'removeToy', id });
            }
            catch (err) {
                console.log('err', err);
            }
        },
        async saveToy({ commit }, { toy }) {
            console.log('toy', toy);
            try {
                const savedToy = await toyService.save(toy);
                commit({ type: 'saveToy', savedToy });
            }
            catch (err) {
                console.log('err', err);
            }
        },
        getToy({ commit, state }, { id }) {
            return id ? toyService.getById(id) : toyService.getEmptyToy();
        },
        filter({ commit, dispatch }, { filterBy }) {
            commit({ type: 'setFilter', filterBy });
            dispatch({ type: 'loadToys' });
        },
    },
};