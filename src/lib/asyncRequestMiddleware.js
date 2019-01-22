// @flow

const asyncRequestMiddleware = ({ dispatch }: () => void) => {
  return (next: (object: Object) => void) => {
    return async (action: Object) => {
      if (typeof action === "function") {
        return action(dispatch);
      }

      const { asyncRequest, types, ...rest } = action;

      if (!asyncRequest) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAIL] = types;
      next({ ...rest, type: REQUEST });

      const defaultMapper = response => {
        return response;
      };
      const { request, mapResponse = defaultMapper, mapError = defaultMapper } = asyncRequest;

      try {
        const response = await request();
        dispatch({ ...rest, type: SUCCESS, response: mapResponse(response) });

        return mapResponse(response);
      } catch (error) {
        dispatch({ ...rest, type: FAIL, error: mapError(error) });
        throw mapError(error);
      }
    };
  };
};

export default asyncRequestMiddleware;
