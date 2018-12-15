import { LOADING_POSTS } from '../../actions/posts';

export default function getPost(state = {}, action) {
	switch (action.type) {
		case LOADING_POSTS:
			return action.payload;
	}
	return state;
}
