import React, { useEffect, useState } from "react";
import moment from "moment";
import { Excel } from "antd-table-saveas-excel";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getReportStudents, getOptions } from "../redux/actions";
import { Table, DatePicker, Divider, Button } from "antd";
import { ReportStudentColumns } from "./ReportStudentColumns";
import { getFilterFromQuery } from "../utils/table";
import "../assets/scss/reportStudent.scss";
import { formatReportStudentExcel } from "../redux/functions";

const { RangePicker } = DatePicker;

const ReportStudent = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query: any = new URLSearchParams(location.search);

  const { reportStudents, options } = useSelector(
    (state: {
      classes: {
        reportStudents: any;
        options: {
          students: any;
          teachers: any;
          subjects: any;
          curricolums: any;
          rates: any;
        };
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
    total: reportStudents.total,
    pageSize: 100,
  });

  const handleTableChange = (
    pagination: any,
    filters: any,
    localFilters: any
  ) => {
    setFilters({ ...localFilters, filters });
    dispatch(
      getReportStudents(
        pagination.current,
        filters,
        filters?.student_id && filters?.student_id.length === 1
          ? 1000
          : pagination?.pageSize,
        localFilters
      )
    );
  };

  const handleExportExcel = () => {
    const cl: any = [
      {
        title: "STT",
        dataIndex: "index",
        key: "index",
      },
      {
        title: "Thứ",
        dataIndex: "day_of_week",
        key: "day_of_week",
      },
      {
        title: "Ngày",
        dataIndex: "class_day",
        key: "class_day",
      },
      {
        title: "Học sinh",
        dataIndex: "student_user_name",
        key: "student_user_name",
      },
      {
        title: "Giáo viên",
        dataIndex: "teacher_user_name",
        key: "teacher_user_name",
      },
      {
        title: "Loại lớp",
        dataIndex: "curricolum_name",
        key: "curricolum_name",
      },
      {
        title: "Môn học",
        dataIndex: "subject_name",
        key: "subject_name",
      },
      {
        title: "Giờ bắt đầu",
        dataIndex: "start",
        key: "start",
      },
      {
        title: "Giờ kết thúc",
        dataIndex: "end",
        key: "end",
      },
      {
        title: "Tuition",
        dataIndex: "tution_value",
        key: "tution_value",
      },
      {
        title: "Tiền",
        dataIndex: "money",
        key: "money",
      },
    ];
    const excel = new Excel();
    const d = new Date();
    excel
      .addSheet("kes")
      .addColumns(cl)
      .addDataSource(
        formatReportStudentExcel(
          reportStudents.data,
          [...options.students, ...options.teachers],
          options.curricolums,
          options.subjects,
          options.rates
        ),
        {
          str2Percent: true,
        }
      )
      .saveAs(
        `${
          options.students.find(
            (t: any) => t.value === localFilters?.filters?.student_id[0]
          )?.label +
          "-" +
          d.getTime()
        }.xlsx`
      );
  };

  const handleChangeDateRange = (date: any, dateString: any) => {
    const data: any = {
      ...localFilters,
      dateFrom: dateString[0],
      dateTo: dateString[1],
    };
    setFilters(data);
    dispatch(
      getReportStudents(
        pagination.current,
        localFilters?.filters,
        localFilters?.filters?.student_id &&
          localFilters?.filters?.student_id.length === 1
          ? 1000
          : pagination?.pageSize,
        data
      )
    );
  };

  useEffect(() => {
    setPagination({
      ...pagination,
      total: reportStudents.total,
      current: parseInt(reportStudents?.page || 1),
    });
  }, [reportStudents]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(getOptions());
    dispatch(
      getReportStudents(
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
    reviewsEl = document.getElementById("report-student")?.offsetTop;
  } catch (error) {}

  return (
    <div id="report-student">
      <RangePicker onChange={handleChangeDateRange} />
      <span className="device" />
      {localFilters?.filters?.student_id &&
        localFilters?.filters?.student_id?.length === 1 && (
          <Button type="primary" size="middle" onClick={handleExportExcel}>
            Export
          </Button>
        )}
      <Divider />
      <Table
        dataSource={reportStudents.data.map((d: any, index: any) => {
          return {
            ...d,
            key: d.id + d.student_id,
            index: index + 1 + (pagination.current - 1) * pagination.pageSize,
          };
        })}
        columns={ReportStudentColumns()}
        loading={reportStudents.loading}
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

export default ReportStudent;
