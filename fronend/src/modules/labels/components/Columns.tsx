import React from "react";

export const Columns = ({ handleEdit }: { handleEdit: any }) => {
  return [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Tên nhãn",
      dataIndex: "name",
      key: "name",
      render: (name: any) => {
        return <>{name}</>;
      },
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
      render: (level: any) => {
        return <>{level}</>;
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id: any, record: any) => {
        return <span onClick={handleEdit(record)}>Sửa</span>;
      },
    },
  ];
};
