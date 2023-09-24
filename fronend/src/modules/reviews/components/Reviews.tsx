import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { Table, Select, Input } from "antd";
import { getReviews, getOptions, replyComment } from "../redux/actions";
import { Columns } from "./Columns";
import ExpandTable from "./ExpandTable";
import { allKeys, getFilterFromQuery, initKeys } from "../utils/table";
import { toastNotify } from "../redux/functions";
import "react-toastify/dist/ReactToastify.css";
import "../assets/scss/reviews.scss";

const Reviews = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const query: any = new URLSearchParams(location.search);

  const { reviews, options } = useSelector(
    (state: {
      reviews: {
        options: any;
        reviews: { data: any; page: number; total: number; loading: boolean };
      };
    }) => state.reviews
  );

  const [pagination, setPagination] = useState({
    page: 1,
    current: 1,
    total: reviews.total,
    pageSize: 100,
  });
  const [q, setQ] = useState<any>("");
  const [activeExpRow, setActiveExpRow] = useState<any>();
  const [keys, setKeys] = useState<any>(initKeys);
  const [replyContent, setReplyContent] = React.useState("");
  const [filters, setFilters] = useState({
    status: [],
    language: [],
    labels: [],
    os: [],
    replyBy: [],
    rate: [],
    appVersionName: [],
  });

  useEffect(() => {
    setFilters({
      ...filters,
      status: query.get("status") ? query.get("status").split(",") : [],
      appVersionName: query.get("appVersionName")
        ? query.get("appVersionName").split(",")
        : [],
      language: query.get("language") ? query.get("language").split(",") : [],
      os: query.get("os") ? query.get("os").split(",") : [],
      labels: query.get("labels") ? query.get("labels").split(",") : [],
      replyBy: query.get("replyBy") ? query.get("replyBy").split(",") : [],
      rate: query.get("rate") ? query.get("rate").split(",") : [],
    });
    setPagination({
      ...pagination,
      total: reviews.total,
      current: parseInt(query.get("page") || 1),
      pageSize: parseInt(query.get("pageSize") || 100),
    });
  }, [reviews]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(
      getReviews(
        query.get("page"),
        getFilterFromQuery(query),
        parseInt(query.get("pageSize") || 10),
        q
      )
    );
    dispatch(getOptions());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTableChange: any = (pagination: any, filters: any) => {
    history.push(
      `/reviews?page=${pagination.current}&pageSize=${
        pagination?.pageSize || ""
      }&status=${filters?.status || ""}&language=${
        filters?.language || ""
      }&labels=${filters?.labels || ""}&os=${filters?.os || ""}&rate=${
        filters?.rate || ""
      }&replyBy=${filters?.replyBy || ""}&appVersionName=${
        filters?.appVersionName || ""
      }`
    );
    dispatch(getReviews(pagination.current, filters, pagination?.pageSize, q));
  };

  const onExpand = (_: any, data: any) => {
    setReplyContent("");
    activeExpRow === data.id ? setActiveExpRow(null) : setActiveExpRow(data.id);
  };

  const handleChangeReplyContent: any = (e: any) => {
    setReplyContent(e.target.value);
  };

  const handleKeydownReplyContent: any = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmitReply();
    }
  };

  const handleSubmitReply: any = (id: any) => () => {
    if (replyContent === "") {
      toastNotify("Chưa điền nội dung!");
    } else {
      toastNotify("Gửi phản hồi thành công", "success");
      dispatch(replyComment({ id, text: replyContent.substring(0, 350) }));
      setReplyContent("");
      setActiveExpRow(null);
    }
  };

  const handleKeySearchDown = (e: any) => {
    if (e.keyCode === 13) {
      setQ(e.target.value);
      dispatch(
        getReviews(
          query.get("page"),
          getFilterFromQuery(query),
          parseInt(query.get("pageSize") || 10),
          e.target.value
        )
      );
    }
  };

  const handleChange = (value: any) => {
    setKeys(value);
  };

  let rootEl: any = document.getElementById("root")?.offsetHeight;
  let reviewsEl: any = 210;
  try {
    reviewsEl = document.getElementById("reviews")?.offsetTop;
  } catch (error) {}

  return (
    <>
      <div id="reviews">
        <Input
          placeholder="Từ khoá tìm kiếm..."
          onKeyDown={handleKeySearchDown}
        />
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Tags Mode"
          onChange={handleChange}
          options={allKeys}
          defaultValue={initKeys}
        />
        <Table
          dataSource={reviews.data.map((d: any, index: any) => {
            return {
              ...d,
              key: d.id,
              index: index + 1 + (pagination.current - 1) * pagination.pageSize,
            };
          })}
          columns={Columns({ options }).filter(
            (c: any) =>
              [...keys, "action"].findIndex((k: any) => k === c.key) !== -1
          )}
          loading={reviews.loading}
          pagination={pagination}
          onChange={handleTableChange}
          scroll={{ y: rootEl - reviewsEl - 210 }}
          expandable={{
            expandedRowRender: (record: any) => {
              return (
                <ExpandTable
                  record={record}
                  handleChangeReplyContent={handleChangeReplyContent}
                  handleKeydownReplyContent={handleKeydownReplyContent}
                  replyContent={replyContent}
                  handleSubmitReply={handleSubmitReply}
                />
              );
            },
            rowExpandable: (record: any) => record.name !== "Not Expandable",
            expandedRowKeys: [activeExpRow],
            onExpand: onExpand,
          }}
        />
      </div>
    </>
  );
};

export default React.memo(Reviews);
