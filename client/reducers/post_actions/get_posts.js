import { GET_POSTS } from '../../actions/posts';

export default function getPost(state = {}, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload
    }
    return state;
}