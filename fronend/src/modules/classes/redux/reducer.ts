import { ReducerRegistry, TAction } from "../../base";
import { ACTION_TYPES } from "./actionTypes";

const initState = {
  classes: { data: [], total: 0, page: 1, loading: true },
  reportTeachers: { data: [], total: 0, page: 1, loading: true },
  reportStudents: { data: [], total: 0, page: 1, loading: true },
  transactions: { data: [], total: 0, page: 1, loading: true },
  options: {
    students: [],
    teachers: [],
    subjects: [],
    roles: {},
    classTypes: [],
    curricolums: [],
  },
  reportTransactions: { doneBalances: [], notDoneBalances: [] },
};

ReducerRegistry.register("classes", (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CLASSES:
      return { ...state, classes: { ...action.data } };
    case ACTION_TYPES.SET_TEACHER_REPORT:
      return { ...state, reportTeachers: { ...action.data } };
    case ACTION_TYPES.SET_STUDENT_REPORT:
      return { ...state, reportStudents: { ...action.data } };
    case ACTION_TYPES.SET_OPTIONS:
      return { ...state, options: action.data };
    case ACTION_TYPES.SET_TRANSACTIONS:
      return { ...state, transactions: { ...action.data } };
    case ACTION_TYPES.SET_REPORT_TRANSACTIONS: {
      return {
        ...state,
        reportTransactions: action.data,
      };
    }
    default:
      return state;
  }
});
