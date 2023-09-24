import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClassesStoreType } from "../types/storeType";
import { Button, DatePicker, Select, Col, Row, TimePicker } from "antd";
import { removeVietnameseTones } from "../../common/utils/string";
import { HHMMSStoSecond } from "../utils/date";
import { addClass, updateClass, getClasses } from "../redux/actions";
import { toastNotify } from "../../common";

const ClassesAddForm = ({
  pagination,
  localFilters,
  setClassInfo,
  classInfo,
}: {
  pagination: any;
  localFilters: any;
  setClassInfo: any;
  classInfo: any;
}) => {
  const dispatch = useDispatch();

  const {
    options: { students, teachers, subjects, roles, classTypes, curricolums },
  } = useSelector((state: { classes: ClassesStoreType }) => state.classes);
  const { auth } = useSelector((state: { auth: any }) => state.auth);

  const onChangeClassDate = (date: any, dateString: any) => {
    setClassInfo({ ...classInfo, class_day: dateString, class_day_data: date });
  };

  const handleChangeCurricolum = (e: any) => {
    setClassInfo({ ...classInfo, curiculum_id: e.value });
  };

  const handleChangeSubject = (e: any) => {
    setClassInfo({ ...classInfo, subject_id: e.value });
  };

  const handleChangeTeacher = (e: any) => {
    setClassInfo({ ...classInfo, teacher_id: e.value });
  };

  const handleChangeClassType = (e: any) => {
    setClassInfo({ ...classInfo, type: e.value });
  };

  const handleChangeStudents = (students: any) => {
    setClassInfo({ ...classInfo, students });
  };

  const onChangeStartTime = (date: any, dateString: any) => {
    setClassInfo({ ...classInfo, start_time: HHMMSStoSecond(dateString) });
  };

  const onChangeEndTime = (date: any, dateString: any) => {
    setClassInfo({ ...classInfo, end_time: HHMMSStoSecond(dateString) });
  };

  const handleAddClass = () => {
    if (
      classInfo.class_day &&
      classInfo.students.length !== 0 &&
      classInfo.start_time &&
      classInfo.curiculum_id &&
      classInfo.end_time &&
      classInfo.type
    ) {
      if (classInfo?.id) {
        dispatch(updateClass(classInfo, cbAddClass));
      } else {
        dispatch(addClass(classInfo, cbAddClass));
      }
    } else {
      toastNotify("Thiếu tham số!");
    }
  };

  const cbAddClass = () => {
    setClassInfo({
      ...classInfo,
      class_day_data: "",
      curiculum_id: "",
      subject_id: "",
      type: "",
      teacher_id: "",
      students: [],
      id: undefined,
    });
    dispatch(
      getClasses(
        pagination.current,
        localFilters?.filters,
        pagination?.pageSize,
        localFilters
      )
    );
  };

  return (
    <Row>
      <Col span={24}>
        <DatePicker
          onChange={onChangeClassDate}
          placeholder={"Ngày"}
          value={classInfo.class_day_data}
        />
        <span className="device" />
        <Select
          labelInValue
          style={{ width: "160px", marginBottom: "10px" }}
          placeholder={"Chương trình"}
          value={curricolums.find(
            (s: any) => s.value === classInfo.curiculum_id
          )}
          onChange={handleChangeCurricolum}
          options={curricolums}
        />
        <span className="device" />
        <Select
          labelInValue
          style={{ width: "120px" }}
          placeholder={"Chọn môn"}
          defaultValue={subjects.find(
            (s: any) => s.value === classInfo.subject_id
          )}
          value={subjects.find((s: any) => s.value === classInfo.subject_id)}
          onChange={handleChangeSubject}
          options={subjects}
        />
        <span className="device" />
        <Select
          mode="multiple"
          style={{ width: "200px" }}
          value={classInfo.students}
          options={students}
          filterOption={(input, option) => {
            return (
              removeVietnameseTones(option?.label + "" || "").indexOf(
                removeVietnameseTones(input)
              ) !== -1
            );
          }}
          showSearch
          onChange={handleChangeStudents}
          placeholder="Chọn học sinh"
          maxTagCount="responsive"
        />
        <span className="device" />
        <TimePicker
          onChange={onChangeStartTime}
          placeholder={"Giờ bắt đầu"}
          value={classInfo.start_time_data}
        />
        <span className="device" />
        <TimePicker
          onChange={onChangeEndTime}
          placeholder={"Giờ kết thúc"}
          value={classInfo.end_time_data}
        />
        <span className="device" />
        {auth?.permisions &&
          auth?.permisions.find(
            (p: { role: string }) => p.role === roles?.ADMIN
          ) && (
            <>
              <Select
                labelInValue
                onChange={handleChangeTeacher}
                placeholder={"Chọn giáo viên"}
                options={teachers}
                showSearch
                value={teachers.find(
                  (t: any) => t.value === classInfo.teacher_id
                )}
                filterOption={(input, option) => {
                  return (
                    removeVietnameseTones(option?.label + "" || "").indexOf(
                      removeVietnameseTones(input)
                    ) !== -1
                  );
                }}
              />
              <span className="device" />
            </>
          )}
        <Select
          labelInValue
          style={{ width: "140px", marginBottom: "10px" }}
          placeholder={"Loại lớp"}
          onChange={handleChangeClassType}
          options={classTypes}
          value={classTypes.find((t: any) => t.value === classInfo.type)}
        />
        <span className="device" />
        <Button type="primary" size="middle" onClick={handleAddClass}>
          {classInfo?.id ? "Sửa lớp" : "Thêm lớp"}
        </Button>
      </Col>
    </Row>
  );
};

export default React.memo(ClassesAddForm);
