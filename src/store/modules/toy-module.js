import { toyService } from '../../service/toy-service.js';


export default {
    state: {
        toys: null,
        filterBy: null,
    },
    getters: {
        toys(state) {
            return state.toys;
        }
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys;
        },
        removeToy(state, { id }) {
            const idx = state.toys.findIndex(toy => toy._id === id);
            state.toys.splice(idx, 1);
        },
        saveToy(state, { toy }) {
            const idx = state.toys.findIndex(currToy => currToy._id === toy._id);
            if (idx !== -1) state.toys.splice(idx, 1, toy);
            else state.toys.push(toy);
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        },
    },
    //TODO: add catch for all promises
    actions: {
        loadToys({ commit, state }) {
            console.log(state.filterBy);
            toyService.query(state.filterBy)
                .then(toys => {
                    console.log('toys', toys);
                    commit({ type: 'setToys', toys });
                });
        },
        removeToy({ commit }, { id }) {
            toyService.remove(id)
                .then(() => {
                    commit({ type: 'removeToy', id });
                });
        },
        saveToy({ commit }, { toy }) {
            toyService.save(toy)
                .then(toy => {
                    commit({ type: 'saveToy', toy });
                });
        },
        getToy(context, { id }) {
            if (id) return toyService.getById(id);
            else return toyService.getEmptyToy();
        },
        filter({ commit, dispatch }, { filterBy }) {
            // toyService.query(filterBy).then((toys) => {
            //   commit({type: 'setToys', toys});
            // });
            commit({ type: 'setFilter', filterBy });
            dispatch({ type: 'loadToys' });
        },

    },
};