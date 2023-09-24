import React from "react";
import { CCard, CCardBody, CCol, CCardHeader } from "@coreui/react";
import { CChartPie } from "@coreui/react-chartjs";

const colors = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#66ffff",
  "#6666ff",
  "#33ffcc",
  "#db4dff",
  "#cc9966",
];

const PieChart = ({
  size,
  labels,
  data,
  title,
}: {
  size: any;
  labels: any;
  data: any;
  title: any;
}) => {
  const temp = Math.floor(Math.random() * 10);
  return (
    <>
      <CCol xs={size}>
        <CCard className="mb-4">
          <CCardHeader>{title}</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels,
                datasets: [
                  {
                    data,
                    backgroundColor: data.map(
                      (data: any, index: any) =>
                        colors[(index + temp) % colors.length]
                    ),
                    hoverBackgroundColor: data.map(
                      (data: any, index: any) =>
                        colors[(index + temp) % colors.length]
                    ),
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default React.memo(PieChart);
