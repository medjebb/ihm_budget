/* eslint-disable */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  addReference,
  referencesFailure,
  referencesFetched,
  referencesRequest,
  removeReference,
} from 'src/redux/reference-redux/actions';
import { RootState } from 'src/redux/store'; // Ensure you have a RootState type defined in your Redux store
import { mockFormReferenceDataList } from 'src/_mock';
import useDispatchedAction from './use-dispatched-action';

const useReference = () => {
  const handleReferenceRequest = useDispatchedAction(referencesRequest);
  const handleReferenceSuccess = useDispatchedAction(referencesFetched);
  const handleReferenceFailure = useDispatchedAction(referencesFailure);
  const handleReferenceAdd = useDispatchedAction(addReference);
  const handleReferenceRemove = useDispatchedAction(removeReference);
  const handleReferenceClear = useDispatchedAction(removeReference);

  const referencesData = useSelector((store: RootState) => {
    console.log('Redux state updated:', store.references);
    return store.references;
  });
  useEffect(() => {
    const fetchReferences = () => {
      if (referencesData?.references?.length > 0) return;
      handleReferenceRequest();
      setTimeout(() => {
        handleReferenceSuccess(mockFormReferenceDataList);
      }, 2000);
    };

    fetchReferences();
  }, []);
  return {
    referencesData,
    handleReferenceAdd,
    handleReferenceRemove,
    handleReferenceClear,
    handleReferenceSuccess,
    handleReferenceFailure,
    handleReferenceRequest,
  };
};
export default useReference;
