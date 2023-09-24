import { CRow } from "@coreui/react";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chart, PieChart } from "../../common";
import { getLabelReports, getReports } from "../redux/actions";
import { DatePicker, Divider } from "antd";
import {
  renderDataComment,
  renderDataLabel,
  renderDataRate,
  renderDataRateV2,
  renderDataReviewStatus,
  renderReportOfLabelAddbyReviewDate,
} from "../redux/functions";
import "../assets/scss/reports.scss";
import { Link } from "react-router-dom";

const { RangePicker } = DatePicker;

const getSize = (number: number) => {
  return Math.sqrt(number) + 10;
};

const Report = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = React.useState({
    start: "2000-1-1",
    end: "2100-1-1",
  });

  useEffect(() => {
    dispatch(getReports());
    dispatch(getLabelReports({}));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { reports } = useSelector(
    (state: { reviews: { reports: any } }) => state.reviews
  );

  const handleChangeDateRange = (date: any, dateString: any) => {
    const data: any = {
      ...filter,
      start: dateString[0].replace(/-0/g, "-"),
      end: dateString[1].replace(/-0/g, "-"),
    };
    const dateStart = new Date(dateString[0]);
    const dateEnd = new Date(dateString[1]);
    setFilter(data);
    dispatch(
      getLabelReports({
        start: dateStart.getTime() / 1000,
        end: dateEnd.getTime() / 1000,
      })
    );
  };

  const dataReportOfLabelAddbyReviewDate = useMemo(() => {
    return renderReportOfLabelAddbyReviewDate(
      reports.labels,
      reports.labelByDateCreateReview
    );
  }, [reports.labels, reports.labelByDateCreateReview]);

  return (
    <div id="reports-review">
      <RangePicker onChange={handleChangeDateRange} />
      <Divider />
      <div>
        {reports.labels
          .filter((l: any) => l.level === 2)
          .map((l: any) => {
            return (
              <Link
                className="label"
                style={{ fontSize: `${getSize(l.total)}px` }}
                to={`/reviews?labels=${l.id}`}
              >{`${l.label}(${l.total})`}</Link>
            );
          })}
      </div>
      <Divider />
      <CRow>
        <PieChart
          title={"Lượt phản hồi theo user"}
          size={3}
          labels={reports.commentTotals.map((c: any) => c.createdBy)}
          data={reports.commentTotals.map((cTotal: any) => {
            return reports.comments
              .filter(
                (c: any) =>
                  c.createdBy === cTotal.createdBy &&
                  c.date >= filter.start &&
                  c.date <= filter.end
              )
              .reduce((total: any, data: any) => {
                return total + Math.round(parseInt(data?.total));
              }, 0);
          })}
        />
        <PieChart
          title={"Số * đánh giá"}
          size={3}
          labels={reports.rateTotals.map((c: any) => c.rate)}
          data={reports.rateTotals.map((rTotal: any) => {
            return reports.rates
              .filter(
                (c: any) =>
                  c.rate === rTotal.rate &&
                  c.date >= filter.start &&
                  c.date <= filter.end
              )
              .reduce((total: any, data: any) => {
                return total + Math.round(parseInt(data?.total));
              }, 0);
          })}
        />
        <PieChart
          title={"Review đã phản hồi / chưa phản hồi"}
          size={3}
          labels={
            renderDataReviewStatus(reports.rateByOSAndStatusTotals, filter)
              .label
          }
          data={
            renderDataReviewStatus(reports.rateByOSAndStatusTotals, filter).data
          }
        />
        <PieChart
          title={"Số review gán nhãn"}
          size={3}
          labels={reports.createrLabels.map((c: any) => c.createdBy)}
          data={reports.createrLabels.map((c: any) => c.total)}
        />
      </CRow>
      <Chart
        labels={dataReportOfLabelAddbyReviewDate.dataLabels}
        data={dataReportOfLabelAddbyReviewDate.dataValue}
        title={"Thông kê label theo ngày"}
      />
      <Chart
        labels={renderDataLabel()}
        data={renderDataRateV2(reports.rateByOSAndStatusTotals)}
        title={"Thông kê số lượt đánh giá"}
      />
      <Chart
        labels={renderDataLabel()}
        data={reports.rateTotals.map((r: any) => {
          return {
            label: r.rate,
            data: renderDataRate(
              reports.rates.filter((c: any) => c.rate === r.rate)
            ),
          };
        })}
        title={"Thông kê số sao đánh giá"}
      />
      <Chart
        labels={renderDataLabel()}
        data={reports.commentTotals
          .sort((a: any, b: any) => b.total - a.total)
          .map((comment: any) => {
            return {
              label: comment.createdBy,
              data: renderDataComment(
                reports.comments.filter(
                  (c: any) => c.createdBy === comment.createdBy
                )
              ),
            };
          })}
        title={"Thông kê số lượt phản hồi"}
      />
    </div>
  );
};

export default Report;
