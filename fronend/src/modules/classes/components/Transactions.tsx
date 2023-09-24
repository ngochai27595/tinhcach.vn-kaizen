import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Excel } from "antd-table-saveas-excel";
import {
  getTransactions,
  getOptions,
  updateTransaction,
  addTransaction,
  getReportTransactions,
} from "../redux/actions";
import { Button, Col, Input, Row, Table, DatePicker, Divider } from "antd";
import { TransactionsColumns } from "./TransactionsColumns";
import { getFilterFromQuery } from "../utils/table";
import "../assets/scss/transactions.scss";
import { formatExcel } from "../redux/functions";
import { sumBalance } from "../utils/arrayFunc";

const { RangePicker } = DatePicker;

const Transactions = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query: any = new URLSearchParams(location.search);

  const { students, teachers } = useSelector(
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

  const { transactions } = useSelector(
    (state: {
      classes: {
        transactions: any;
        reportTransactions: { doneBalances: any; notDoneBalances: any };
      };
    }) => state.classes
  );

  const [localFilters, setFilters] = useState<any>({ dateFrom: 0, dateTo: 0 });
  const [transactionInfo, setTransactionInfo] = useState<any>({});
  const [pagination, setPagination] = useState({
    page: 1,
    current: 1,
    total: transactions.total,
    pageSize: 100,
  });

  const handleChangeDateRange = (date: any, dateString: any) => {
    const data: any = {
      ...localFilters,
      dateFrom: dateString[0],
      dateTo: dateString[1],
    };
    setFilters(data);
    dispatch(
      getTransactions(
        pagination.current,
        localFilters?.filters,
        pagination?.pageSize,
        data
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
        title: "Ngày thu",
        dataIndex: "finished_at_render",
        key: "finished_at_render",
      },
      {
        title: "Loại",
        dataIndex: "type_render",
        key: "type_render",
      },
      {
        title: "Người dùng",
        dataIndex: "user_id_render",
        key: "user_id_render",
      },
      {
        title: "Số tiền",
        dataIndex: "balance_render",
        key: "balance_render",
      },
      {
        title: "Trạng thái",
        dataIndex: "finished_by_render",
        key: "finished_by_render",
      },
    ];
    const excel = new Excel();
    const d = new Date();
    excel
      .addSheet("kes")
      .addColumns(cl)
      .addDataSource(
        formatExcel(transactions.data, [...students, ...teachers]),
        {
          str2Percent: true,
        }
      )
      .saveAs(`${d.getTime()}.xlsx`);
  };

  const handleTableChange = (
    pagination: any,
    filters: any,
    localFilters: any
  ) => {
    setFilters({ ...localFilters, filters });
    dispatch(
      getTransactions(
        pagination.current,
        filters,
        pagination?.pageSize,
        localFilters
      )
    );
  };

  const cbUpdateTransaction = () => {
    dispatch(getReportTransactions());
    dispatch(
      getTransactions(
        pagination.current,
        localFilters?.filters,
        pagination?.pageSize,
        localFilters
      )
    );
  };

  const handleFinishTransaction = (id: any) => () => {
    dispatch(updateTransaction(id, cbUpdateTransaction, localFilters));
  };

  const handleAddTransaction = () => {
    dispatch(addTransaction(transactionInfo));
  };

  const onChangeDescription = (e: any) => {
    setTransactionInfo({ ...transactionInfo, description: e.target.value });
  };

  const onChangeBalance = (e: any) => {
    setTransactionInfo({ ...transactionInfo, balance: e.target.value });
  };

  useEffect(() => {
    setPagination({
      ...pagination,
      total: transactions.total,
      current: parseInt(transactions?.page || 1),
    });
  }, [transactions]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(getOptions());
    dispatch(
      getTransactions(
        query.get("page"),
        getFilterFromQuery(query),
        parseInt(query.get("pageSize") || 100),
        localFilters
      )
    );
    dispatch(getReportTransactions());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let rootEl: any = document.getElementById("root")?.offsetHeight;
  let reviewsEl: any = 330;
  try {
    reviewsEl = document.getElementById("report-student")?.offsetTop;
  } catch (error) {}

  const type = query.get("type") ? parseInt(query.get("type")) : 1;

  return (
    <div id="transactions">
      {type === 1 && (
        <>
          <Row>
            <Col span={24}>
              <Input
                placeholder="Mô tả"
                onChange={onChangeDescription}
                value={transactionInfo?.description}
                style={{ width: "160px", marginBottom: "10px" }}
              />
              <span className="device" />
              <Input
                placeholder="Số tiền"
                onChange={onChangeBalance}
                value={transactionInfo?.balance}
                style={{ width: "160px", marginBottom: "10px" }}
              />
              <span className="device" />
              <Button
                type="primary"
                size="middle"
                onClick={handleAddTransaction}
              >
                Thêm
              </Button>
            </Col>
          </Row>
          <Divider />
        </>
      )}
      <RangePicker onChange={handleChangeDateRange} /> <span />
      <Button type="primary" size="middle" onClick={handleExportExcel}>
        Export
      </Button>
      <Divider />
      {type !== 1 && (
        <Row>
          <Col span={12}>
            <p className="report-type">
              <span>Tổng đã thu:</span>{" "}
              {sumBalance(
                transactions.data.filter(
                  (t: any) => t.finished_at !== "0" && t.type === "2"
                )
              )}
              k
            </p>
          </Col>
          <Col span={12}>
            <p className="report-type">
              <span>Tổng chưa thu:</span>
              {sumBalance(
                transactions.data.filter(
                  (t: any) => t.finished_at === "0" && t.type === "2"
                )
              )}
              k
            </p>
          </Col>
        </Row>
      )}
      {type === 1 && (
        <Row>
          <Col span={12}>
            <p className="report-type">
              <span>Tổng đã chi:</span>
              {sumBalance(
                transactions.data.filter(
                  (t: any) => t.finished_at !== "0" && t.type === "1"
                )
              )}
              k
            </p>
            <p className="report-type">
              <span>Tổng chưa chi:</span>
              {sumBalance(
                transactions.data.filter(
                  (t: any) => t.finished_at === "0" && t.type === "1"
                )
              )}
              k
            </p>
          </Col>
          <Col span={12}>
            <p className="report-type">
              <span>Tổng chi phí khác:</span>
              {sumBalance(transactions.data.filter((t: any) => t.type === "3"))}
              k
            </p>
          </Col>
        </Row>
      )}
      <Divider />
      <Table
        dataSource={transactions.data
          .filter((d: any) => (type === 1 ? d.type !== "2" : d.type === "2"))
          .map((d: any, index: any) => {
            return {
              ...d,
              key: d.user_id + "" + d.finished_at,
              index: index + 1 + (pagination.current - 1) * pagination.pageSize,
            };
          })}
        columns={TransactionsColumns(handleFinishTransaction)}
        loading={transactions.loading}
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

export default Transactions;
