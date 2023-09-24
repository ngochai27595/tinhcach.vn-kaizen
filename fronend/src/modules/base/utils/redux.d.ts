type ActionType = {
  type: string | symbol;
  response?: any;
};

type ActionRequestType<T> = {
  type: string | symbol;
  params?: T;
};
export { ActionType, ActionRequestType };
