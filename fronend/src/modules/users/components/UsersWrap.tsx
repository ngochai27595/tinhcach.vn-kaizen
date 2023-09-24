import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Table, Button } from "antd";
import "../assets/scss/usersWrap.scss";
import { getUsers, addPermision, deletePermision } from "../redux/actions";

const UsersWrap = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  const query: any = new URLSearchParams(location.search);

  const { users } = useSelector(
    (state: {
      users: {
        options: any;
        users: { data: any; page: number; total: number; loading: boolean };
      };
    }) => state.users
  );

  const [pagination, setPagination] = React.useState({
    page: 1,
    current: 1,
    total: users.total,
    pageSize: 12,
  });

  useEffect(() => {
    setPagination({
      ...pagination,
      total: users.total,
      current: parseInt(query.get("page") || 1),
      pageSize: parseInt(query.get("pageSize") || 12),
    });
  }, [users]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(getUsers(query.get("page"), {}));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTableChange: any = (pagination: any, filters: any) => {
    history.push(
      `${location.pathname}?page=${pagination.current}&pageSize=${
        pagination?.pageSize || ""
      }`
    );
    dispatch(getUsers(pagination.current, filters, pagination?.pageSize));
  };

  const addReviewPermision = (userId: any) => () => {
    dispatch(addPermision({ id: userId, loading: true }));
  };

  const deleteReviewPermision = (userId: any) => () => {
    dispatch(deletePermision({ id: userId, loading: true }));
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: () => {
        return <>#</>;
      },
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Permisions",
      dataIndex: "roles",
      key: "roles",
    },
    {
      title: "Action",
      dataIndex: "roles",
      key: "roles",
      render: (roles: any, record: any) => {
        const pers = roles ? roles.split(",") : [];
        return (
          <p>
            {pers.findIndex((p: any) => p === "YO_REVIEW") === -1 && (
              <Button
                type="default"
                size="small"
                loading={record?.loading}
                onClick={addReviewPermision(record.id)}
              >
                Add Review Permision
              </Button>
            )}
            {pers.findIndex((p: any) => p === "YO_REVIEW") !== -1 && (
              <Button
                type="default"
                size="small"
                loading={record?.loading}
                onClick={deleteReviewPermision(record.id)}
              >
                Remove Review Permision
              </Button>
            )}
          </p>
        );
      },
    },
  ];

  return (
    <>
      <div id="users">
        <Table
          dataSource={users.data}
          columns={columns}
          loading={users.loading}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </>
  );
};

export default UsersWrap;
