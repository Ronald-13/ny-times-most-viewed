import { SEARCH_TEXT } from './actions';

const initialState = {
    search: ''
};

const reducer = (state = initialState, action) => {
    const { type, payload = {} } = action;

    switch (type) {
        case SEARCH_TEXT:
            return { ...payload };
        default:
            return state;
    }
};

export default reducer;
