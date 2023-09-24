import "../assets/css/notFoundPage.scss";
const notFoundImage =
  "https://r73troypb4obj.vcdn.cloud/picture/report_images/base_not-found-image.svg";
type Props = {
  onClickBackButton?: React.MouseEventHandler<HTMLButtonElement>;
  textButton?: string;
};
const NotFoundPage = ({ onClickBackButton, textButton }: Props) => {
  return (
    <div className="not-found-container">
      <img src={notFoundImage} alt="" />
      <div className="not-found-message">
        <span>Oops!</span>
        <span>Không thể tìm thấy trang bạn đang tìm kiếm</span>
      </div>
      <button onClick={onClickBackButton || (() => {})}>
        {textButton || "Về trang chủ"}
      </button>
    </div>
  );
};

export default NotFoundPage;
