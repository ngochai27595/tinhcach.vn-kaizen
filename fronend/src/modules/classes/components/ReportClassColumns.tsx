import React from "react";
import { useSelector } from "react-redux";
import { secondtoHour } from "../utils/date";
import { Select } from "antd";
import moment from "moment";
import { DAY_OF_WEEKS } from "../utils/constants";

export const ReportClassColumns = () => {
  const {
    students: ss,
    teachers,
    subjects,
    curricolums,
    rates,
  } = useSelector(
    (state: {
      classes: {
        options: {
          students: any;
          teachers: any;
          subjects: any;
          curricolums: any;
          rates: any;
        };
      };
    }) => state.classes.options
  );

  const renderArray = (idList: any, students: any) => {
    try {
      const data = idList.split(",").map((s: any) => s);
      return students.filter(
        (s: any) => data.findIndex((d: any) => d === s.value) !== -1
      );
    } catch (error) {
      return [];
    }
  };

  return [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      width: "5%",
    },

    {
      title: "Thứ",
      dataIndex: "class_day",
      key: "class_day",
      width: "8%",
      render: (class_day: any) => {
        return <>{DAY_OF_WEEKS[moment(class_day).day()]}</>;
      },
    },
    {
      title: "Ngày",
      dataIndex: "class_day",
      key: "class_day",
      width: "8%",
      render: (class_day: any) => {
        return <>{class_day}</>;
      },
    },
    {
      title: "Giáo viên",
      dataIndex: "teacher_id",
      width: "10%",
      key: "teacher_id",
      render: (teacher_id: any) => {
        return <>{teachers.find((t: any) => t.value === teacher_id)?.label}</>;
      },
      filterSearch: true,
      filters: teachers.map((t: any) => {
        return { ...t, text: t.label };
      }),
    },
    {
      title: "Loại lớp",
      dataIndex: "curiculum_id",
      key: "curiculum_id",
      width: "10%",
      render: (curiculum_id: any) => {
        return (
          <>{curricolums.find((c: any) => c.value === curiculum_id)?.label}</>
        );
      },
    },
    {
      title: "Môn học",
      dataIndex: "subject_id",
      width: "10%",
      key: "subject_id",
      render: (subject_id: any) => {
        return <>{subjects.find((s: any) => s.value === subject_id)?.label}</>;
      },
    },
    {
      title: "Danh sách học sinh",
      dataIndex: "students",
      key: "students",
      render: (students: any) => {
        return (
          <>
            <Select
              mode="multiple"
              style={{ width: "200px" }}
              value={students.split(",").map((s: any) => s)}
              options={renderArray(students, ss)}
              onChange={() => {}}
              maxTagCount="responsive"
            />
          </>
        );
      },
    },
    {
      title: "Payrate",
      width: "10%",
      dataIndex: "start_time",
      key: "start_time",
      render: (start_time: any, data: any) => {
        return (
          <>{`${
            rates
              ? rates.find(
                  (r: any) =>
                    r.curricolum_id === data.curiculum_id &&
                    r.class_scope === data.students.split(",").length
                ).rate
              : 0
          }k/h`}</>
        );
      },
    },
    {
      title: "Hour",
      dataIndex: "end_time",
      width: "10%",
      key: "end_time",
      render: (end_time: any, data: any) => {
        return <>{secondtoHour(end_time - data.start_time)}</>;
      },
    },
    {
      title: "Tiền",
      dataIndex: "end_time",
      width: "10%",
      key: "end_time",
      render: (end_time: any, data: any) => {
        return (
          <>
            {(rates
              ? rates.find(
                  (r: any) =>
                    r.curricolum_id === data.curiculum_id &&
                    r.class_scope === data.students.split(",").length
                ).rate
              : 0) *
              secondtoHour(end_time - data.start_time) +
              rates.find(
                (r: any) =>
                  r.curricolum_id === data.curiculum_id &&
                  r.class_scope === data.students.split(",").length
              ).bonus +
              "k"}
          </>
        );
      },
    },
  ];
};
