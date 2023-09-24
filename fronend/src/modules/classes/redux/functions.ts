import { toast } from "react-toastify";
import moment from "moment";
import { DAY_OF_WEEKS, TRANSACTION_TYPES } from "../utils/constants";
import { secondtoHHMMSS, secondtoHour } from "../utils/date";

export const toastNotify = (text: string, type?: string) => {
  switch (type) {
    case "info":
      toast.info(text);
      break;
    case "success":
      toast.success(text);
      break;
    default:
      toast.error(text);
      break;
  }
};

export const formatExcel = (data: any, users: any) => {
  return data.map((d: any, index: any) => {
    return {
      ...d,
      index: index + 1,
      finished_at_render:
        d.finished_at === 0
          ? ""
          : moment(d.finished_at * 1000).format("YYYY-MM-DD"),
      type_render: TRANSACTION_TYPES.find((t: any) => t.value === d.type)?.text,
      user_id_render: users.find((t: any) => t.value === d.user_id)?.label,
      balance_render: `${d.balance}k`,
      finished_by_render:
        d.finished_by !== "" ? "Đã thanh toán" : "Chưa thanh toán",
    };
  });
};

export const formatReportStudentExcel = (
  data: any,
  users: any,
  curricolums: any,
  subjects: any,
  rates: any
) => {
  return data.map((d: any, index: any) => {
    return {
      ...d,
      index: index + 1,
      day_of_week: DAY_OF_WEEKS[moment(d.class_day).day()],
      student_user_name: users.find((t: any) => t.value === d.student_id)
        ?.label,
      teacher_user_name: users.find((t: any) => t.value === d.teacher_id)
        ?.label,
      curricolum_name: curricolums.find((c: any) => c.value === d.curiculum_id)
        ?.label,
      subject_name: subjects.find((s: any) => s.value === d.subject_id)?.label,
      start: secondtoHHMMSS(d.start_time),
      end: secondtoHHMMSS(d.end_time),
      tution_value: `${
        rates
          ? rates.find(
              (r: any) =>
                r.curricolum_id === d.curiculum_id &&
                r.class_scope === d.students.split(",").length
            ).tuition
          : 0
      }/h`,
      money:
        (rates
          ? rates.find(
              (r: any) =>
                r.curricolum_id === d.curiculum_id &&
                r.class_scope === d.students.split(",").length
            ).tuition
          : 0) *
          secondtoHour(d.end_time - d.start_time) +
        "k",
    };
  });
};

export const formatNumber = (number: any) => {
  try {
    if (number > 1000) {
      const mod1000 = number % 1000;
      return `${Math.floor(number / 1000)}.${
        mod1000 < 100
          ? mod1000 < 10
            ? `00${mod1000}`
            : `0${mod1000}`
          : mod1000
      }`;
    } else {
      return number;
    }
  } catch (error) {
    return number;
  }
};

export const getStartEndCurrentWeek = () => {
  const dateDataStart = moment();
  const start = dateDataStart
    .add(1 - dateDataStart.day(), "days")
    .format("YYYY-MM-DD");
  const dateDataEnd = moment();
  const end = dateDataEnd
    .add(7 - dateDataEnd.day(), "days")
    .format("YYYY-MM-DD");
  return {
    dateFrom: start,
    dateTo: end,
  };
};
