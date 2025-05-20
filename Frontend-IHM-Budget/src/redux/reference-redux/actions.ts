export const REFERENCES_FETCHED_SUCCESS = 'REFERENCES_FETCHED_SUCCESS';
export const REFERENCES_FETCHED_REQUEST = 'REFERENCES_FETCHED_REQUEST';
export const REFERENCES_FETCHED_FAILURE = 'REFERENCES_FETCHED_FAILURE';
export const REFERENCE_ADD = 'REFERENCE_ADD';
export const REFERENCE_REMOVE = 'REFERENCE_REMOVE';
export const REFERENCE_CLEAR = 'REFERENCE_CLEAR';

export const addReference = (reference: any) => ({
  type: REFERENCE_ADD,
  payload: { reference },
});

export const removeReference = (id: any) => ({
  type: REFERENCE_REMOVE,
  payload: { id },
});

export const clearReferences = () => ({
  type: REFERENCE_CLEAR,
});

export const referencesFetched = (references: any[]) => ({
  type: REFERENCES_FETCHED_SUCCESS,
  payload: { references },
});

export const referencesRequest = () => ({
  type: REFERENCES_FETCHED_REQUEST,
});

export const referencesFailure = (error: any) => ({
  type: REFERENCES_FETCHED_FAILURE,
  payload: error,
});
