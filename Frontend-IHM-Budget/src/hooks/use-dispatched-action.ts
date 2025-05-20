import { useDispatch } from 'react-redux';

import { AnyAction } from 'redux';

const useDispatchedAction = (action: (...args: any[]) => AnyAction) => {
  const dispatch = useDispatch();

  const dispatchedAction = (...args: any[]) => {
    dispatch(action(...args));
  };
  return dispatchedAction;
};
export default useDispatchedAction;
