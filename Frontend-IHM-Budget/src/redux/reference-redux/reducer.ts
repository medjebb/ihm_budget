import { ReferenceType } from 'src/model/reference';
import {
  REFERENCE_ADD,
  REFERENCE_CLEAR,
  REFERENCE_REMOVE,
  REFERENCES_FETCHED_FAILURE,
  REFERENCES_FETCHED_REQUEST,
  REFERENCES_FETCHED_SUCCESS,
} from './actions';

interface ReferencesState {
  references: ReferenceType[];
  loading?: boolean;
  errors?: any;
}
const initialState: ReferencesState = {
  references: [],
  loading: true,
  errors: null,
};

interface Action {
  type: string;
  payload?: any;
}
const referencesReducer = (
  state: ReferencesState = initialState,
  action: Action = { type: '' }
) => {
  const { type, payload } = action;
  switch (type) {
    case REFERENCES_FETCHED_SUCCESS:
      return {
        ...state,
        references: payload.references,
        loading: false,
      };
    case REFERENCES_FETCHED_REQUEST:
      return { ...state, loading: true };

    case REFERENCES_FETCHED_FAILURE:
      return { ...state, loading: false, errors: payload };
    case REFERENCE_ADD:
      return {
        ...state,
        references: [
          { ...payload.reference, isNew: true },
          ...state.references.map((ref) => {
            if ('isNew' in ref && ref.isNew === true) {
              return { ...ref, isNew: false };
            }
            return ref;
          }),
        ],
        loading: false,
      };
    case REFERENCE_REMOVE:
      return {
        ...state,
        references: state.references,
      };
    case REFERENCE_CLEAR:
      return {
        ...state,
        references: [],
      };
    default:
      return state;
  }
};

export default referencesReducer;
