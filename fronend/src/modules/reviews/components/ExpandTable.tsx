import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Divider, Row, Col, Select } from "antd";
import { timestamp2Date } from "../../common";
import { getReviewLabel, updateReviewLabel } from "../redux/actions";
const { TextArea } = Input;

const ExpandTable = ({
  record,
  handleChangeReplyContent,
  handleKeydownReplyContent,
  replyContent,
  handleSubmitReply,
}: {
  record: any;
  handleChangeReplyContent: any;
  handleKeydownReplyContent: any;
  replyContent: any;
  handleSubmitReply: any;
}) => {
  const dispatch = useDispatch();

  const [label1, setLabel1] = useState<any>([]);
  const [label2, setLabel2] = useState<any>([]);
  const [label3, setLabel3] = useState<any>("");

  const { options, reviewLabel } = useSelector(
    (state: {
      reviews: {
        options: any;
        reviewLabel: any;
      };
    }) => state.reviews
  );

  useEffect(() => {
    dispatch(getReviewLabel(record.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const initialValue = "";
    const sumWithInitial = reviewLabel
      .filter((label: any) => label.field_id === "2")
      .reduce(
        (accumulator: string, currentValue: any) =>
          accumulator + "," + currentValue.value,
        initialValue
      );
    setLabel3(sumWithInitial.substring(1));
    setLabel1(
      reviewLabel
        .filter(
          (label: any) =>
            label.field_id === "1" &&
            options.labels
              .filter((l: any) => l.level === 1)
              .findIndex((l: any) => l.id === label.value) !== -1
        )
        .map((l: any) => l.value)
    );
    setLabel2(
      reviewLabel
        .filter(
          (label: any) =>
            label.field_id === "1" &&
            options.labels
              .filter((l: any) => l.level === 2)
              .findIndex((l: any) => l.id === label.value) !== -1
        )
        .map((l: any) => l.value)
    );
  }, [reviewLabel]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChangeLabel3: any = (e: any) => {
    setLabel3(e.target.value);
  };

  const handleChangeLabel1 = (value: any) => {
    setLabel1(value);
  };

  const handleChangeLabel2 = (value: any) => {
    setLabel2(value);
  };

  const handleSubmitLabels = () => {
    const data = {
      id: record.id,
      labels: [
        ...label1.map((l: any) => {
          return { level: 1, id: l };
        }),
        ...label2.map((l: any) => {
          return { level: 2, id: l };
        }),
        ...label3.split(",").map((l: any) => {
          return { level: 3, id: l };
        }),
      ].filter((l: any) => l.id !== ""),
    };
    dispatch(updateReviewLabel(data));
  };

  const deviceMetadata: any = record?.deviceMetadata
    ? JSON.parse(record?.deviceMetadata)
    : {};

  return (
    <div style={{ margin: 0 }}>
      <Divider orientation="left">Gán nhãn</Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={4}>
          <div>Nhãn Level 1</div>
        </Col>
        <Col className="gutter-row" span={16}>
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Tags Mode"
            onChange={handleChangeLabel1}
            options={options.labels
              .filter((l: any) => l.level === 1)
              .map((l: any) => {
                return { value: l.id, label: l.name };
              })}
            value={label1}
          />
        </Col>
      </Row>
      <p></p>
      <Row gutter={16}>
        <Col className="gutter-row" span={4}>
          <div>Nhãn Level 2</div>
        </Col>
        <Col className="gutter-row" span={16}>
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Tags Mode"
            onChange={handleChangeLabel2}
            options={options.labels
              .filter((l: any) => l.level === 2)
              .map((l: any) => {
                return { value: l.id, label: l.name };
              })}
            value={label2}
          />
        </Col>
      </Row>
      <p></p>
      <Row gutter={16}>
        <Col className="gutter-row" span={4}>
          <div>Nhãn Level 3</div>
        </Col>
        <Col className="gutter-row" span={16}>
          <Input
            placeholder="Nhãn level 3 ( nhập cách nhau dấu ,"
            onChange={handleChangeLabel3}
            value={label3}
          />
        </Col>
      </Row>

      <p></p>
      <Button type="primary" size="small" onClick={handleSubmitLabels}>
        Cập nhật nhãn
      </Button>
      <Divider orientation="left">Thông tin chung</Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div>
            <span>PackageName:</span> {record?.packageName}
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>
            <span>OS:</span> {record?.os}
          </div>
        </Col>
      </Row>
      <Divider orientation="left">Thông tin user comment</Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={4}>
          <div>
            <span>OsVerion:</span> {record.osVerion}
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div>
            <span>Version Code:</span> {record.appVersionCode}
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div>
            <span>Manufacturer:</span> {deviceMetadata.manufacturer}
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div>
            <span>RamMb:</span> {deviceMetadata.ramMb}
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div>
            <span>ProductName:</span> {deviceMetadata.productName}
          </div>
        </Col>
        <Col className="gutter-row" span={16}>
          <div>
            <span>Translated VN:</span> {record.text}
          </div>
        </Col>
        <Col className="gutter-row" span={16}>
          <div>
            <span>Review Original:</span> {record.originalText}
          </div>
        </Col>
        <Col className="gutter-row" span={16}>
          <div>
            <span>Translated EN:</span> {record.enText}
          </div>
        </Col>
      </Row>
      <Divider orientation="left">
        Thông tin nhóm dịch vụ khách hàng trả lời
      </Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div>
            <span>Date:</span>
            {timestamp2Date(record?.uLastModified)}
          </div>
        </Col>
      </Row>
      <div>
        <span>Thông tin phản hồi:</span> {record.uText}
      </div>
      <Divider />
      <p style={{ color: "red" }}>{`Còn được nhập ${
        350 - replyContent.length
      } kí tự.`}</p>
      <TextArea
        rows={4}
        placeholder="Nhập tối đa 350 kí tự"
        maxLength={9999}
        onChange={handleChangeReplyContent}
        onKeyDown={handleKeydownReplyContent}
        value={replyContent}
      />
      <p></p>
      <Button
        type="primary"
        size="small"
        onClick={handleSubmitReply(record.id)}
      >
        {record?.createdBy !== null ? "Sửa phản hồi" : "Gửi phản hồi"}
      </Button>
    </div>
  );
};

export default ExpandTable;
