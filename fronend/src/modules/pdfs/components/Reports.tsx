import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPdfReport } from "../redux/actions";
import "../assets/scss/reports.scss";
import { useLocation } from "react-router-dom";
import { Col, Row } from "antd";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import { CCol, CRow } from "@coreui/react";
import { options, renderDataby } from "../redux/functions";

const Reports = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location?.search);

  const { reports } = useSelector(
    (state: { pdfs: { reports: any } }) => state.pdfs
  );

  useEffect(() => {
    dispatch(getPdfReport({ idSource: query.get("idSource") || 0 }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="pdf-reports">
      <Row>
        <Col span={12}>
          <p className="report-type">
            <span>Total pdf: </span>
            {reports?.totalPdf}
          </p>
          <p className="report-type">
            <span>Total pdf dtv:</span>
            {reports?.totalPdfDtv}
          </p>
          <p className="report-type">
            <span>Total pdf tailieu:</span>
            {reports?.totalPdfTailieu}
          </p>
          <p className="report-type">
            <span>Total pdf toanmath:</span>
            {reports?.totalPdfToanmath}
          </p>
        </Col>
        <Col span={12}>
          <p className="report-type">
            <span>Total pdf thi247:</span>
            {reports?.totalPdfTthi247}
          </p>
          <p className="report-type">
            <span>Total pdf tailieu done:</span>
            {reports?.totalPdfTailieuDone}
          </p>
          <p className="report-type">
            <span>Total pdf tailieu doing:</span>
            {reports?.totalPdfTailieuDoing}
          </p>
          <p className="report-type">
            <span>Total pdf tailieu need doing:</span>
            {reports?.totalPdfTailieuNeedDone}
          </p>
        </Col>
      </Row>
      <CRow>
        <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            Theo ngày
          </h4>
        </CCol>
      </CRow>
      <CChartLine
        style={{ height: "300px", marginTop: "40px" }}
        data={{
          labels: renderDataby(reports?.all, "d")?.map((a: any) => a.label),
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: hexToRgba(getStyle("--cui-info"), 10),
              borderColor: getStyle("--cui-info"),
              pointHoverBackgroundColor: getStyle("--cui-info"),
              borderWidth: 2,
              data: renderDataby(reports?.all, "d")?.map(
                (a: { data: number }) => a.data
              ),
              fill: true,
            },
          ],
        }}
        options={options}
      />
      <CRow>
        <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            Theo tuần
          </h4>
        </CCol>
      </CRow>
      <CChartLine
        style={{ height: "300px", marginTop: "40px" }}
        data={{
          labels: renderDataby(reports?.all, "w")?.map((a: any) => a.label),
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: hexToRgba(getStyle("--cui-info"), 10),
              borderColor: getStyle("--cui-info"),
              pointHoverBackgroundColor: getStyle("--cui-info"),
              borderWidth: 2,
              data: renderDataby(reports?.all, "w")?.map(
                (a: { data: number }) => a.data
              ),
              fill: true,
            },
          ],
        }}
        options={options}
      />
      <CRow>
        <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            Theo tháng
          </h4>
        </CCol>
      </CRow>
      <CChartLine
        style={{ height: "300px", marginTop: "40px" }}
        data={{
          labels: renderDataby(reports?.all, "m")?.map((a: any) => a.label),
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: hexToRgba(getStyle("--cui-info"), 10),
              borderColor: getStyle("--cui-info"),
              pointHoverBackgroundColor: getStyle("--cui-info"),
              borderWidth: 2,
              data: renderDataby(reports?.all, "m")?.map(
                (a: { data: number }) => a.data
              ),
              fill: true,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default React.memo(Reports);
