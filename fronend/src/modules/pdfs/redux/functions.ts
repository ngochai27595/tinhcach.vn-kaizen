import {
  timestampToStartOfMonthV2,
  timestampToStartOfWeekV2,
  timestampToYYYYMMDDV2,
} from "../../common";

export const renderDataby = (
  datas: any,
  type: any = "d",
  range: number = 12
) => {
  const date = new Date();
  const days = [];
  for (let index = 0; index <= range; index++) {
    days.push(index);
  }
  if (type === "d") {
    return days.map((d) => {
      return {
        label: timestampToYYYYMMDDV2(date.getTime() - 86400000 * d),
        data:
          parseInt(
            datas?.find(
              (a: any) =>
                a.date === timestampToYYYYMMDDV2(date.getTime() - 86400000 * d)
            )?.total
          ) || 0,
      };
    });
  }
  if (type === "w") {
    return days.map((d) => {
      return {
        label: timestampToStartOfWeekV2(date.getTime() - 86400000 * d * 7),
        data:
          parseInt(
            datas
              ?.filter(
                (a: any) =>
                  a.date >=
                    timestampToStartOfWeekV2(
                      date.getTime() - 86400000 * 7 * d
                    ) &&
                  a.date <
                    timestampToStartOfWeekV2(
                      date.getTime() - 86400000 * 7 * (d - 1)
                    )
              )
              ?.reduce((total: any, data: any) => {
                return total + Math.round(parseInt(data?.total));
              }, 0)
          ) || 0,
      };
    });
  }

  if (type === "m") {
    return days.map((d) => {
      return {
        label: timestampToStartOfMonthV2(date.getTime() - 86400000 * d * 31),
        data:
          parseInt(
            datas
              ?.filter(
                (a: any) =>
                  a.date >=
                    timestampToStartOfMonthV2(
                      date.getTime() - 86400000 * 31 * d
                    ) &&
                  a.date <
                    timestampToStartOfMonthV2(
                      date.getTime() - 86400000 * 31 * (d - 1)
                    )
              )
              ?.reduce((total: any, data: any) => {
                return total + Math.round(parseInt(data?.total));
              }, 0)
          ) || 0,
      };
    });
  }
  return [];
};

export const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
      },
    },
    y: {
      ticks: {
        maxTicksLimit: 5,
        stepSize: Math.ceil(250 / 5),
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};
