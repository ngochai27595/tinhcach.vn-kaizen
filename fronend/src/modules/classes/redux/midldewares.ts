import { Store } from "redux";
import { ACTION_TYPES } from "./actionTypes";
import { MiddlewareRegistry } from "../../base";
import {
  apiGetClasses,
  apiAddClass,
  apiUpdateClass,
  apiGetReportTeachers,
  apiGetOptions,
  apiGetReportStudents,
  apiGetTransactions,
  apiUpdateTransaction,
  apiAddTransaction,
  apiGetReportTransactions,
  apiDeleteClass,
} from "./services";
import {
  setClasses,
  setOptions,
  setReportStudents,
  setReportTeachers,
  setReportTransactions,
  setTransactions,
} from "./actions";
import { toastNotify } from "../../common";
import { array2str } from "../utils/arrayFunc";

export const middleware =
  ({ dispatch, getState }: Store) =>
  (next: Function) =>
  async (action: any) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.GET_CLASSES: {
        dispatch(
          setClasses({
            data: [],
            page: action.data,
            loading: true,
          })
        );
        apiGetClasses({
          page: action.data,
          size: action.size,
          from_date: action?.localFilters?.dateFrom,
          to_date: action?.localFilters?.dateTo,
          teacher_id:
            action.filters?.teacher_id &&
            action.filters?.teacher_id?.length !== 0
              ? action.filters?.teacher_id[0]
              : undefined,
        })
          .then((rs) => {
            dispatch(setClasses({ ...rs, loading: false }));
          })
          .catch((err) => {});
        return;
      }
      case ACTION_TYPES.DELETE_CLASS: {
        apiDeleteClass(action.id, action.typeDelete).then((rs: any) => {
          toastNotify("Xoá lớp thành công!", "info");
          action.cbDeleteClass();
        });
        return;
      }
      case ACTION_TYPES.ADD_CLASS: {
        apiAddClass(action.data).then((rs: any) => {
          toastNotify("Thêm lớp thành công!", "info");
          action.cbAddClass();
        });
        return;
      }
      case ACTION_TYPES.UPDATE_CLASS: {
        apiUpdateClass(action.data).then((rs: any) => {
          toastNotify("Sửa lớp thành công!", "info");
          action.cbAddClass();
        });
        return;
      }
      case ACTION_TYPES.GET_TEACHER_REPORT: {
        dispatch(
          setReportTeachers({
            data: [],
            page: action.data,
            loading: true,
          })
        );
        apiGetReportTeachers({
          page: action.data,
          size: action.size,
          from_date: action?.localFilters?.dateFrom,
          to_date: action?.localFilters?.dateTo,
          teacher_id:
            action.filters?.teacher_id &&
            action.filters?.teacher_id?.length !== 0
              ? action.filters?.teacher_id[0]
              : undefined,
        })
          .then((rs) => {
            dispatch(setReportTeachers({ ...rs, loading: false }));
          })
          .catch((err) => {});
        return;
      }
      case ACTION_TYPES.GET_OPTIONS: {
        apiGetOptions().then((rs: any) => {
          dispatch(
            setOptions({
              ...rs,
              students: rs.students.map((s: any) => {
                return { ...s, label: s.name, value: s.id };
              }),
              teachers: rs.teachers.map((t: any) => {
                return { ...t, label: t.name, value: t.id };
              }),
            })
          );
        });
        return;
      }
      case ACTION_TYPES.GET_STUDENT_REPORT: {
        dispatch(
          setReportStudents({
            data: [],
            page: action.data,
            loading: true,
          })
        );
        apiGetReportStudents({
          page: action.data,
          size: action.size,
          from_date: action?.localFilters?.dateFrom,
          to_date: action?.localFilters?.dateTo,
          teacher_id:
            action.filters?.teacher_id &&
            action.filters?.teacher_id?.length !== 0
              ? action.filters?.teacher_id[0]
              : undefined,
          student_id:
            action.filters?.student_id &&
            action.filters?.student_id?.length !== 0
              ? action.filters?.student_id[0]
              : undefined,
        })
          .then((rs) => {
            dispatch(setReportStudents({ ...rs, loading: false }));
          })
          .catch((err) => {});
        return;
      }
      case ACTION_TYPES.GET_TRANSACTIONS: {
        dispatch(
          setTransactions({
            data: [],
            page: action.data,
            loading: true,
          })
        );
        apiGetTransactions({
          page: action.data,
          size: action.size,
          from_date: action?.localFilters?.dateFrom,
          to_date: action?.localFilters?.dateTo,
          type: array2str(action.filters?.type, 0),
          user_id: array2str(action.filters?.user_id, 1),
        })
          .then((rs) => {
            dispatch(setTransactions({ ...rs, loading: false }));
          })
          .catch((err) => {});
        return;
      }
      case ACTION_TYPES.UPDATE_TRANSACTION: {
        apiUpdateTransaction({
          id: action.data,
          from_date: action.localFilters?.dateFrom,
          to_date: action.localFilters?.dateTo,
        }).then((rs: any) => {
          toastNotify("Thanh toán thành công!", "info");
          action.cbUpdateTransaction();
        });
        return;
      }
      case ACTION_TYPES.ADD_TRANSACTION: {
        apiAddTransaction(action.data).then((rs: any) => {
          toastNotify("Thêm khoản chi phát sinh thành công!", "info");
        });
        return;
      }
      case ACTION_TYPES.GET_REPORT_TRANSACTIONS: {
        apiGetReportTransactions().then((rs: any) => {
          dispatch(setReportTransactions(rs));
        });
        return;
      }
    }
  };

MiddlewareRegistry.register(middleware);
