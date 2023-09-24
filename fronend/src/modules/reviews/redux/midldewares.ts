import { Store } from "redux";
import { ACTION_TYPES } from "./actionTypes";
import { MiddlewareRegistry } from "../../base";
import {
  apiGetReviews,
  apiGetReview,
  apiPostComment,
  apiGetOptions,
  apiPostReviewLabel,
  apiGetReviewLabel,
  apiGetReports,
  apiGetLabelReports,
} from "./services";
import { toastNotify } from "../../common";
import { array2str } from "../utils/arrayFunc";
import {
  setOptions,
  setReviews,
  setReview,
  setReviewLabel,
  setReports,
  setLabelReports,
} from "./actions";

export const middleware =
  ({ dispatch, getState }: Store) =>
  (next: Function) =>
  async (action: any) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.GET_OPTIONS: {
        apiGetOptions().then((rs: any) => {
          dispatch(setOptions(rs));
        });
        return;
      }
      case ACTION_TYPES.REPLY_COMMENT: {
        const { reviews, review } = getState().reviews;
        const { auth } = getState().auth;
        let dateNow = new Date();
        dispatch(
          setReviews({
            ...reviews,
            data: reviews.data.map((d: any) =>
              d.id === action.data.id
                ? {
                    ...d,
                    createdBy: auth?.email,
                    uText: action.data.text,
                    uLastModified: dateNow.getTime() / 1000,
                  }
                : d
            ),
          })
        );
        try {
          dispatch(
            setReview({
              ...review,
              comments:
                review.comments.length === 1
                  ? [
                      ...review.comments,
                      {
                        type: 1,
                        text: action.data.text,
                        createdBy: auth?.email,
                        lastModified: dateNow.getTime() / 1000,
                      },
                    ]
                  : review.comments.map((c: any) =>
                      c.type === 1
                        ? {
                            ...c,
                            text: action.data.text,
                            lastModified: dateNow.getTime() / 1000,
                          }
                        : c
                    ),
            })
          );
        } catch (error) {}
        apiPostComment(action.data).then((rs: any) => {});
        return;
      }
      case ACTION_TYPES.GET_REVIEW: {
        dispatch(setReview({ loading: true }));
        apiGetReview(action.data)
          .then((rs) => {
            dispatch(setReview({ ...rs, loading: false }));
          })
          .catch((err) => {});
        return;
      }
      case ACTION_TYPES.GET_REVIEWS: {
        dispatch(
          setReviews({
            data: [],
            page: action.data,
            loading: true,
          })
        );
        apiGetReviews({
          page: action.data,
          size: action.size,
          textlike: action.q,
          rate: array2str(action.filters?.rate, 0),
          replyby: array2str(action.filters?.replyBy, 1),
          versionname: array2str(action.filters?.appVersionName, 1),
          language: array2str(action.filters?.language, 1),
          labels: array2str(action.filters?.labels, 1),
          os: array2str(action.filters?.os, 1),
          isreplied: action.filters?.status
            ? action.filters?.status.length === 1
              ? action.filters?.status[0]
              : undefined
            : undefined,
        })
          .then((rs) => {
            dispatch(setReviews({ ...rs, loading: false }));
          })
          .catch((err) => {});
        return;
      }
      case ACTION_TYPES.UPDATE_REVIEW_LABEL: {
        apiPostReviewLabel(action.data)
          .then((rs) => {
            toastNotify("Gán nhãn thành công!", "info");
          })
          .catch((err) => {});
        return;
      }
      case ACTION_TYPES.GET_REVIEW_LABEL: {
        dispatch(setReviewLabel([]));
        apiGetReviewLabel(action.data).then((rs) => {
          dispatch(setReviewLabel(rs.data));
        });
        return;
      }
      case ACTION_TYPES.GET_REPORTS: {
        apiGetReports().then((rs) => {
          dispatch(setReports(rs));
        });
        return;
      }
      case ACTION_TYPES.GET_LABEL_REPORTS: {
        apiGetLabelReports(action.params).then((rs) => {
          dispatch(setLabelReports(rs));
        });
        return;
      }
    }
  };

MiddlewareRegistry.register(middleware);
