import { SET_TAGS, SET_ALL_TAGS } from '../constants';

export const tagReducer = (state = { tags: [] }, action: any) => {
  switch (action.type) {
    case SET_TAGS: {
      if (state.tags.length === 0) {
        return { ...state, tags: [action.tag] };
      }
      //@ts-ignore
      if (state?.tags?.includes('All')) {
        return { ...state, tags: [] };
      }
      //@ts-ignore
      if (state?.tags?.includes(action.tag)) {
        const filteredTags = state.tags.filter((tag) => tag !== action.tag);
        return { ...state, tags: filteredTags };
      }
      return { ...state, tags: [...state.tags, action.tag] };
    }

    case SET_ALL_TAGS: {
      if (state.tags.length === action.tags.length) {
        return { ...state, tags: [] };
      }

      return { ...state, tags: [...action.tags] };
    }

    default:
      return state;
  }
};
