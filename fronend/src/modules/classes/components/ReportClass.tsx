import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getReportTeachers, getOptions } from "../redux/actions";
import { Table, DatePicker, Divider } from "antd";
import { ReportClassColumns } from "./ReportClassColumns";
import { getFilterFromQuery } from "../utils/table";
import "../assets/scss/reportClass.scss";

const ReportClass = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query: any = new URLSearchParams(location.search);

  const { reportTeachers } = useSelector(
    (state: {
      classes: {
        reportTeachers: any;
      };
    }) => state.classes
  );

  const dateDataStart = moment();
  const start = dateDataStart
    .add(1 - dateDataStart.day(), "days")
    .format("YYYY-MM-DD");
  const dateDataEnd = moment();
  const end = dateDataEnd
    .add(7 - dateDataEnd.day(), "days")
    .format("YYYY-MM-DD");
  const [localFilters, setFilters] = useState<any>({
    dateFrom: start,
    dateTo: end,
  });
  const [pagination, setPagination] = useState({
    page: 1,
    current: 1,
    total: reportTeachers.total,
    pageSize: 100,
  });

  const handleChangeDateRange = (date: any) => {
    const dd = date.get("date");
    const mm = date.get("month") + 1;
    const yyyy = date.get("year");
    var dateDataStart = moment(`${yyyy}-${mm}-${dd}`, "YYYY-MM-DD");
    const start = dateDataStart
      .add(1 - dateDataStart.day(), "days")
      .format("YYYY-MM-DD");
    var dateDataEnd = moment(`${yyyy}-${mm}-${dd}`, "YYYY-MM-DD");
    const end = dateDataEnd
      .add(7 - dateDataEnd.day(), "days")
      .format("YYYY-MM-DD");

    const data: any = {
      ...localFilters,
      dateFrom: start,
      dateTo: end,
    };
    setFilters(data);
    dispatch(
      getReportTeachers(
        pagination.current,
        localFilters?.filters,
        pagination?.pageSize,
        data
      )
    );
  };

  const handleTableChange = (
    pagination: any,
    filters: any,
    localFilters: any
  ) => {
    setFilters({ ...localFilters, filters });
    dispatch(
      getReportTeachers(
        pagination.current,
        filters,
        pagination?.pageSize,
        localFilters
      )
    );
  };

  useEffect(() => {
    setPagination({
      ...pagination,
      total: reportTeachers.total,
      current: parseInt(reportTeachers?.page || 1),
    });
  }, [reportTeachers]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(getOptions());
    dispatch(
      getReportTeachers(
        query.get("page"),
        getFilterFromQuery(query),
        parseInt(query.get("pageSize") || 100),
        localFilters
      )
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let rootEl: any = document.getElementById("root")?.offsetHeight;
  let reviewsEl: any = 330;
  try {
    reviewsEl = document.getElementById("report-class")?.offsetTop;
  } catch (error) {}

  return (
    <div id="report-class">
      <DatePicker onChange={handleChangeDateRange} picker="week" />
      <Divider />
      <Table
        dataSource={reportTeachers.data.map((d: any, index: any) => {
          return {
            ...d,
            key: d.id,
            index: index + 1 + (pagination.current - 1) * pagination.pageSize,
          };
        })}
        columns={ReportClassColumns()}
        loading={reportTeachers.loading}
        pagination={pagination}
        onChange={(pagination, filters) =>
          handleTableChange(pagination, filters, localFilters)
        }
        scroll={{
          y: rootEl || 0 - reviewsEl || 0 - 240,
        }}
      />
    </div>
  );
};

export default ReportClass;
