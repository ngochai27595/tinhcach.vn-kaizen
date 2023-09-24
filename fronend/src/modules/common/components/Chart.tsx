import { CCol, CRow } from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import React from "react";
import { options } from "../../pdfs/redux/functions";

const styles = [
  "#336699",
  "#0099cc",
  "#00ccff",
  "#cc99ff",
  "#ff0000",
  "#6600cc",
  "#009900",
  "#669999",
  "#3366ff",
  "#cc9900",
  "#cc6699",
  "#9999ff",
  "#009933",
  "#ff99cc",
  "#993300",
];

const Chart = ({
  title,
  labels,
  data,
}: {
  labels: any;
  data: any;
  title: string;
}) => {
  return (
    <>
      <CRow>
        <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            {title}
          </h4>
        </CCol>
      </CRow>
      <CChartLine
        style={{ height: "300px", marginTop: "40px" }}
        data={{
          labels,
          datasets: data.map((d: any, index: any) => {
            const style = styles[index % styles.length];
            return {
              label: d.label,
              backgroundColor: hexToRgba(style, 10),
              borderColor: style,
              pointHoverBackgroundColor: style,
              borderWidth: 2,
              data: d.data,
              fill: true,
            };
          }),
        }}
        options={options}
      />
    </>
  );
};

export default React.memo(Chart);
