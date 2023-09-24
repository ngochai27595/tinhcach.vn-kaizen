import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { timestamp2Date } from "../../common";
import { RATES } from "../utils/constants";
import { getUserNameEmail } from "../utils/mail";
import { getStatus, getLabelDisplay } from "../utils/table";

export const Columns = ({ options }: { options: any }) => {
  const location = useLocation();
  const query: any = new URLSearchParams(location.search);

  const { options: optionInit } = useSelector(
    (state: {
      reviews: {
        options: any;
      };
    }) => state.reviews
  );

  return [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "AuthorName",
      dataIndex: "authorName",
      key: "authorName",
      width: "10%",
      render: (authorName: any) => {
        return <>{authorName}</>;
      },
    },
    {
      title: "Reply",
      dataIndex: "createdBy",
      key: "replyBy",
      render: (replyBy: any) => {
        return <>{getUserNameEmail(replyBy)}</>;
      },
      defaultFilteredValue: query.get("replyBy")
        ? query.get("replyBy").split(",")
        : [],
      filters: options?.authors
        ? options?.authors.map((a: any) => {
            return { text: a.createdBy, value: a.createdBy };
          })
        : [],
    },
    {
      title: "UpdateAt",
      dataIndex: "updated_at",
      key: "updated_at",
      render: (updated_at: any) => {
        return <p style={{ fontSize: "9px" }}>{timestamp2Date(updated_at)}</p>;
      },
    },
    {
      title: "Lang",
      dataIndex: "reviewerLanguage",
      key: "language",
      defaultFilteredValue: query.get("language")
        ? query.get("language").split(",")
        : [],
      filters: options?.languages
        ? options?.languages
            .sort((a: any, b: any) => {
              return a.reviewerLanguage - b.reviewerLanguage;
            })
            .map((l: any) => {
              return { text: l.name, value: l.reviewerLanguage };
            })
        : [],
    },
    {
      title: "*",
      dataIndex: "rate",
      key: "rate",
      filters: RATES,
      defaultFilteredValue: query.get("rate")
        ? query.get("rate").split(",")
        : [],
    },
    {
      title: "Translated VN",
      dataIndex: "text",
      key: "text",
      render: (text: any) => {
        return (
          <p className="threedot" title={text}>
            {text}
          </p>
        );
      },
    },
    {
      title: "Review Original",
      dataIndex: "originalText",
      key: "originalText",
      render: (originalText: any) => {
        return (
          <p className="threedot" title={originalText}>
            {originalText}
          </p>
        );
      },
    },
    {
      title: "Labels",
      dataIndex: "labels",
      key: "labels",
      render: (labels: any) => {
        return (
          <>
            {getLabelDisplay(labels, optionInit.labels).map((l: any) => {
              return <span className="label">{l}</span>;
            })}
          </>
        );
      },
      defaultFilteredValue: query.get("labels")
        ? query.get("labels").split(",")
        : [],
      filters: optionInit?.labels
        ? optionInit?.labels.map((o: any) => {
            return { text: o.name, value: o.id };
          })
        : [],
    },
    {
      title: "Status",
      dataIndex: "createdBy",
      key: "status",
      render: (createdBy: any, record: any) => {
        return <>{getStatus(record)}</>;
      },
      defaultFilteredValue: query.get("status")
        ? query.get("status").split(",")
        : [],
      filters: [
        { text: "Đã phản hồi", value: 1 },
        { text: "Chưa phản hồi", value: 0 },
        { text: "Update since reply", value: 2 },
      ],
    },
    {
      title: "OS",
      dataIndex: "os",
      key: "os",
      render: (os: any) => {
        return <>{os}</>;
      },
      defaultFilteredValue: query.get("os") ? query.get("os").split(",") : [],
      filters: [
        { text: "Android", value: "Android" },
        { text: "IOS", value: "IOS" },
      ],
    },
    {
      title: "Người gán nhãn",
      dataIndex: "labelCreatedBy",
      key: "labelCreatedBy",
      render: (labelCreatedBy: string) => {
        return <>{labelCreatedBy}</>;
      },
    },
    {
      title: "Ver Name",
      dataIndex: "appVersionName",
      key: "appVersionName",
      defaultFilteredValue: query.get("appVersionName")
        ? query.get("appVersionName").split(",")
        : [],
      filters: options?.versionNames
        ? options?.versionNames.map((l: any) => {
            return { text: l.appVersionName, value: l.appVersionName };
          })
        : [],
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id: any) => {
        return (
          <a target={"_blank"} href={`reviews/${id}`} rel="noreferrer">
            Xem chi tiết
          </a>
        );
      },
    },
  ];
};
