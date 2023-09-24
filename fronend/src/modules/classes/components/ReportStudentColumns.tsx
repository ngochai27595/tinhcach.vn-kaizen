import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { DAY_OF_WEEKS } from "../utils/constants";
import { secondtoHHMMSS, secondtoHour } from "../utils/date";

export const ReportStudentColumns = () => {
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
      title: "Học sinh",
      dataIndex: "student_id",
      width: "10%",
      key: "student_id",
      render: (student_id: any) => {
        return <>{ss.find((t: any) => t.value === student_id)?.label}</>;
      },
      filterSearch: true,
      filters: ss.map((t: any) => {
        return { ...t, text: t.label };
      }),
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
      title: "Giờ bắt đầu",
      width: "10%",
      dataIndex: "start_time",
      key: "start_time",
      render: (start_time: any) => {
        return <>{secondtoHHMMSS(start_time)}</>;
      },
    },
    {
      title: "Giờ kết thúc",
      dataIndex: "end_time",
      width: "10%",
      key: "end_time",
      render: (end_time: any) => {
        return <>{secondtoHHMMSS(end_time)}</>;
      },
    },
    {
      title: "Tuition",
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
                ).tuition
              : 0
          }/h`}</>
        );
      },
    },
    {
      title: "Chiết khấu",
      dataIndex: "end_time",
      width: "10%",
      key: "end_time",
      render: (end_time: any, data: any) => {
        return <>0%</>;
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
                ).tuition
              : 0) *
              secondtoHour(end_time - data.start_time) +
              "k"}
          </>
        );
      },
    },
  ];
};
