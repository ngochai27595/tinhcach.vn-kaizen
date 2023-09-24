import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReview, replyComment } from "../redux/actions";
import { Button, Divider, Input, Form } from "antd";
import { useParams } from "react-router-dom";
import { timestamp2Date } from "../../common";
import { toastNotify } from "../redux/functions";
import "../assets/scss/review.scss";

const { TextArea } = Input;

const Review = () => {
  const dispatch = useDispatch();
  const params: { id: any } = useParams();

  const [replyContent, setReplyContent] = React.useState("");

  const { review } = useSelector(
    (state: { reviews: { review: any } }) => state.reviews
  );

  const userComment: any = review?.comments?.find((c: any) => c.type === 0);
  const developComment: any = review?.comments?.find((c: any) => c.type === 1);
  const deviceMetadata: any = userComment?.deviceMetadata
    ? JSON.parse(userComment?.deviceMetadata)
    : {};
  const deviceMetadataArr = [];
  for (const [key, value] of Object.entries(deviceMetadata)) {
    deviceMetadataArr.push({ key, value });
  }

  const handleChangeReplyContent: any = (e: any) => {
    setReplyContent(e.target.value);
  };

  const handleKeydownReplyContent: any = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmitReply();
    }
  };

  const handleSubmitReply: any = () => {
    if (replyContent === "") {
      toastNotify("Chưa điền nội dung!");
    } else {
      toastNotify("Gửi phản hồi thành công", "success");
      dispatch(
        replyComment({ id: params.id, text: replyContent.substring(0, 350) })
      );
    }
  };

  useEffect(() => {
    dispatch(getReview(params.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="review">
      <header>Thông tin</header>
      {review?.loading === true && <>Đang lấy dữ liệu</>}
      {review?.id && (
        <>
          <main>
            <Divider />
            <h3>Thông tin chung</h3>
            <p>
              <span>PackageName:</span> {review?.packageName}
            </p>
            <p>
              <span>OS:</span> {review?.os}
            </p>
            <p>
              <span>AuthorName:</span> {review?.authorName}
            </p>
            <p>
              <span>Date:</span> {timestamp2Date(review?.updated_at)}
            </p>
            {userComment && (
              <>
                <Divider />
                <h3>Thông tin user comment</h3>
                <p>
                  <span>OsVerion:</span> {userComment.osVerion}
                </p>
                <p>
                  <span>Version Code:</span> {userComment.appVersionCode}
                </p>
                <p>
                  <span>Version Name:</span> {userComment.appVersionName}
                </p>
                <p>
                  <span>Rate:</span> {userComment.rate}
                </p>
                <p>
                  <span>Translated VN:</span> {userComment.text}
                </p>
                <p>
                  <span>Translated EN:</span> {userComment.enText}
                </p>
                <p>
                  <span>Review Original:</span> {userComment.originalText}
                </p>
                <p>
                  <span>Language:</span> {userComment.reviewerLanguage}
                </p>
                <p>
                  <span>Date:</span> {timestamp2Date(userComment?.lastModified)}
                </p>
                {deviceMetadataArr.map((d: any) => {
                  return (
                    <p>
                      <span>{d.key}:</span> {d.value}
                    </p>
                  );
                })}
              </>
            )}
            {developComment && (
              <>
                <Divider />
                <h3>Thông tin nhóm dịch vụ khách hàng trả lời</h3>
                <p>
                  <span>Thông tin phản hồi:</span> {developComment.text}
                </p>
                <p>
                  <span>Reply:</span> {developComment.createdBy}
                </p>
                <p>
                  <span>Date:</span>
                  {timestamp2Date(developComment?.lastModified)}
                </p>
              </>
            )}
          </main>
          <footer>
            <Divider />
            <Form name="basic">
              <Form.Item label={``} name="replyContent">
                <p style={{ color: "red" }}>{`Còn được nhập ${
                  350 - replyContent.length
                } kí tự.`}</p>
              </Form.Item>
              <Form.Item
                label={`Nội dung thông tin phản hồi.`}
                name="replyContent"
              >
                <TextArea
                  rows={4}
                  placeholder="Nhập tối đa 350 kí tự"
                  maxLength={9999}
                  onChange={handleChangeReplyContent}
                  onKeyDown={handleKeydownReplyContent}
                />
              </Form.Item>
              <Button type="primary" size="small" onClick={handleSubmitReply}>
                {developComment ? "Sửa phản hồi" : "Gửi phản hồi"}
              </Button>
            </Form>
          </footer>
        </>
      )}
    </div>
  );
};

export default Review;
