import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getClasses, getOptions, deleteClass } from "../redux/actions";
import { DatePicker, Table, Row, Divider } from "antd";
import { Columns } from "./Columns";
import { getFilterFromQuery } from "../utils/table";
import "../assets/scss/classes.scss";
import { secondtoHHMMSS } from "../utils/date";
import { ClassesStoreType } from "../types/storeType";
import { getStartEndCurrentWeek } from "../redux/functions";
import ClassesAddForm from "./ClassesAddForm";

const Classes = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query: any = new URLSearchParams(location.search);

  const { classes } =
    useSelector((state: { classes: ClassesStoreType }) => state.classes) || {};

  const [localFilters, setFilters] = useState<any>(getStartEndCurrentWeek());

  const [classInfo, setClassInfo] = useState<any>({
    students: [],
    isAdd: true,
  });
  const [pagination, setPagination] = useState({
    page: 1,
    current: 1,
    total: classes.total,
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
      getClasses(
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
      getClasses(
        pagination.current,
        filters,
        pagination?.pageSize,
        localFilters
      )
    );
  };

  const cbDeleteClass = () => {
    dispatch(
      getClasses(
        pagination.current,
        localFilters?.filters,
        pagination?.pageSize,
        localFilters
      )
    );
  };

  const handleDeleteClass = (id: any, type: number) => () => {
    let text = "Bạn có chắc chắc muốn xoá lớp không?";
    if (window.confirm(text) === true) {
      dispatch(deleteClass(id, type, cbDeleteClass));
    }
  };

  const updateClassInfo = (data: any) => {
    setClassInfo({
      ...data,
      students: data.students.split(","),
      class_day_data: dayjs(data.class_day, "YYYY-MM-DD"),
      start_time_data: dayjs(secondtoHHMMSS(data.start_time), "HH:mm:ss"),
      end_time_data: dayjs(secondtoHHMMSS(data.end_time), "HH:mm:ss"),
    });
  };

  useEffect(() => {
    setPagination({
      ...pagination,
      total: classes.total,
      current: parseInt(classes?.page || 1),
    });
  }, [classes]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(getOptions());
    dispatch(
      getClasses(
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
    reviewsEl = document.getElementById("classes")?.offsetTop;
  } catch (error) {}

  return (
    <div id="classes">
      <ClassesAddForm
        pagination={pagination}
        localFilters={localFilters}
        classInfo={classInfo}
        setClassInfo={setClassInfo}
      />
      <Row>
        <Divider />
        <DatePicker onChange={handleChangeDateRange} picker="week" />
        <Divider />
      </Row>
      <Table
        dataSource={classes.data.map((d: any, index: any) => {
          return {
            ...d,
            key: d.id,
            index: index + 1 + (pagination.current - 1) * pagination.pageSize,
          };
        })}
        columns={Columns({ updateClassInfo, deleteClass: handleDeleteClass })}
        loading={classes.loading}
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

export default Classes;
