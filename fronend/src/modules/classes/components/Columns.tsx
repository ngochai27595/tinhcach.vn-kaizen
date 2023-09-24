import React from "react";
import { useSelector } from "react-redux";
import { secondtoHHMMSS } from "../utils/date";
import { Select, Button } from "antd";
import moment from "moment";
import { DAY_OF_WEEKS } from "../utils/constants";

export const Columns = ({
  updateClassInfo,
  deleteClass,
}: {
  updateClassInfo: any;
  deleteClass: any;
}) => {
  const {
    students: ss,
    teachers,
    subjects,
    classTypes,
    curricolums,
  } = useSelector(
    (state: {
      classes: {
        options: {
          students: any;
          teachers: any;
          subjects: any;
          classTypes: any;
          curricolums: any;
        };
      };
    }) => state.classes.options
  );

  const handleEdit = (data: any) => () => {
    updateClassInfo(data);
  };

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
      title: "Chương trình",
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
      width: "200px",
      key: "students",
      render: (students: any) => {
        return (
          <>
            <Select
              mode="multiple"
              style={{ width: "200px" }}
              value={students ? students.split(",").map((s: any) => s) : []}
              options={renderArray(students, ss)}
              onChange={() => {}}
              maxTagCount="responsive"
            />
          </>
        );
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
      dataIndex: "type",
      width: "10%",
      key: "type",
      render: (type: any) => {
        return <>{classTypes.find((c: any) => c.value === type)?.label}</>;
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      width: "20%",
      key: "action",
      render: (id: any, record: any) => {
        return (
          <>
            <Button type="primary" size="small" onClick={handleEdit(record)}>
              Sửa
            </Button>
            <span style={{ margin: "5px" }} />
            <Button type="primary" size="small" onClick={deleteClass(id, 2)}>
              Xoá nhiều
            </Button>
            <br />
            <br />
            <Button type="dashed" size="small" onClick={deleteClass(id, 1)}>
              Xoá 1
            </Button>
            <span style={{ margin: "5px" }} />
            <Button type="dashed" size="small" onClick={deleteClass(id, 3)}>
              Xoá tất cả
            </Button>
          </>
        );
      },
    },
  ];
};
