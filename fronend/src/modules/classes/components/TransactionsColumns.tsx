import { Button } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { formatNumber } from "../redux/functions";
import { TRANSACTION_TYPES } from "../utils/constants";

export const TransactionsColumns = (handleFinishTransaction: any) => {
  const { students: ss, teachers } = useSelector(
    (state: {
      classes: {
        options: {
          students: any;
          teachers: any;
          subjects: any;
          curricolums: any;
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
      title: "Ngày thu",
      dataIndex: "finished_at",
      key: "finished_at",
      width: "8%",
      render: (finished_at: any) => {
        return (
          <>
            {finished_at === "0"
              ? ""
              : moment(finished_at * 1000).format("YYYY-MM-DD")}
          </>
        );
      },
    },
    {
      title: "Loại",
      dataIndex: "type",
      width: "10%",
      key: "type",
      render: (type: any) => {
        return (
          <>{TRANSACTION_TYPES.find((t: any) => t.value === type)?.text}</>
        );
      },
      filters: TRANSACTION_TYPES,
    },
    {
      title: "Người dùng",
      dataIndex: "user_id",
      width: "10%",
      key: "user_id",
      render: (user_id: any) => {
        return (
          <>
            {[...teachers, ...ss].find((t: any) => t.value === user_id)?.label}
          </>
        );
      },
      filters: [...teachers, ...ss].map((t: any) => {
        return { ...t, text: t.label };
      }),
    },
    {
      title: "Số tiền",
      dataIndex: "balance",
      key: "balance",
      width: "10%",
      render: (balance: any) => {
        return <>{`${formatNumber(balance)}k`}</>;
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "finished_by",
      width: "10%",
      key: "finished_by",
      render: (finished_by: any) => {
        return <>{finished_by !== "" ? "Đã thanh toán" : "Chưa thanh toán"}</>;
      },
    },
    {
      title: "Hành động",
      dataIndex: "finished_by",
      width: "10%",
      key: "finished_by",
      render: (finished_by: any, data: any) => {
        return (
          <>
            {finished_by === "" && (
              <Button
                type="primary"
                size="middle"
                onClick={handleFinishTransaction(data.user_id)}
              >
                Thanh toán
              </Button>
            )}
          </>
        );
      },
    },
  ];
};
