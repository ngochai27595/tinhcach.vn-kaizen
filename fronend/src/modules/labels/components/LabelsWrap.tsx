import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { Table, Input, Divider, Select, Col, Row, Button, Space } from "antd";
import { Columns } from "./Columns";
import { getLabels, addLabel, updateLabel } from "../redux/actions";
import { toastNotify } from "../../common";

const LabelsWrap = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const query: any = new URLSearchParams(location.search);

  const { labels } = useSelector(
    (state: {
      labels: {
        labels: { data: any; page: number; total: number; loading: boolean };
      };
    }) => state.labels
  );

  const [nameLabel, setNameLabel] = useState("");
  const [idLabel, setIdLabel] = useState("");
  const [levelLabel, setLevelLabel] = useState(1);
  const [pagination, setPagination] = useState({
    page: 1,
    current: 1,
    total: labels.total,
    pageSize: 10,
  });

  useEffect(() => {
    setPagination({
      ...pagination,
      total: labels.total,
      current: parseInt(query.get("page") || 1),
      pageSize: parseInt(query.get("pageSize") || 10),
    });
  }, [labels]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(
      getLabels(query.get("page"), {}, parseInt(query.get("pageSize") || 10))
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTableChange: any = (pagination: any, filters: any) => {
    history.push(
      `/labels?page=${pagination.current}&pageSize=${
        pagination?.pageSize || ""
      }`
    );
    dispatch(getLabels(pagination.current, filters, pagination?.pageSize));
  };

  const handleChangeLevelLabel = (e: any) => {
    setLevelLabel(e);
  };

  const handleChangeNameLabel: any = (e: any) => {
    setNameLabel(e.target.value);
  };

  const handleSubmitReply = () => {
    if (nameLabel.trim() === "") {
      toastNotify("Tên nhãn chưa hợp lệ!");
    } else {
      if (idLabel === "") {
        dispatch(addLabel({ name: nameLabel, level: levelLabel }));
      } else {
        dispatch(
          updateLabel({ name: nameLabel, level: levelLabel, id: idLabel })
        );
        setIdLabel("");
        setLevelLabel(1);
      }
      setNameLabel("");
    }
  };

  const handleEdit = (data: any) => () => {
    setIdLabel(data.id);
    setNameLabel(data.name);
    setLevelLabel(data.level);
  };

  let rootEl: any = document.getElementById("root")?.offsetHeight;
  let reviewsEl: any = 330;
  try {
    reviewsEl = document.getElementById("labels")?.offsetTop;
  } catch (error) {}

  return (
    <>
      <div id="labels">
        <Row>
          <Col span={12}>
            <Input
              placeholder="Tên nhãn"
              onChange={handleChangeNameLabel}
              value={nameLabel}
            />
          </Col>
          <Col span={12}>
            <Space>
              <Select
                defaultValue={levelLabel}
                value={levelLabel}
                style={{ width: 120 }}
                onChange={handleChangeLevelLabel}
                options={[
                  { value: "1", label: "Level 1" },
                  { value: "2", label: "Level 2" },
                ]}
              />
              <Button type="primary" size="small" onClick={handleSubmitReply}>
                {idLabel === "" ? "Thêm nhãn" : "Cập nhật nhãn"}
              </Button>
            </Space>
          </Col>
        </Row>
        <Divider />
        <Table
          dataSource={labels.data.map((d: any, index: any) => {
            return {
              ...d,
              key: d.id,
              index: index + 1 + (pagination.current - 1) * pagination.pageSize,
            };
          })}
          columns={Columns({ handleEdit }).filter((c: any) => c)}
          loading={labels.loading}
          pagination={pagination}
          onChange={handleTableChange}
          scroll={{
            y: rootEl || 0 - reviewsEl || 0 - 240,
          }}
        />
      </div>
    </>
  );
};

export default React.memo(LabelsWrap);
