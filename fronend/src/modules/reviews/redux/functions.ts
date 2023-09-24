import { toast } from "react-toastify";
import { timestampToYYYYMMDDV3 } from "../../common";

export const toastNotify = (text: string, type?: string) => {
  switch (type) {
    case "info":
      toast.info(text);
      break;
    case "success":
      toast.success(text);
      break;
    default:
      toast.error(text);
      break;
  }
};

export const renderDataLabel = () => {
  const days = [];
  const date = new Date();
  for (let index = 0; index <= 31; index++) {
    days.push(index);
  }
  return days.map((d) => {
    return timestampToYYYYMMDDV3(date.getTime() - 86400000 * d);
  });
};

export const renderDataLabelByCreatedAtReview = (data: any) => {
  const days = [];
  const date = new Date();
  for (let index = 0; index <= 31; index++) {
    days.push(index);
  }
  return days.map((day) => {
    const temp = data.find(
      (d: any) => d.c === timestampToYYYYMMDDV3(date.getTime() - 86400000 * day)
    );
    return temp?.total || 0;
  });
};

export const renderDataComment = (data: any) => {
  const days = [];
  const date = new Date();
  for (let index = 0; index <= 31; index++) {
    days.push(index);
  }
  return days.map((day) => {
    const temp = data.find(
      (d: any) =>
        d.date === timestampToYYYYMMDDV3(date.getTime() - 86400000 * day)
    );
    return temp?.total || 0;
  });
};

export const renderDataRateV2 = (data: any) => {
  const days: any = [];
  const date = new Date();
  for (let index = 0; index <= 31; index++) {
    days.push(index);
  }

  return [
    {
      label: "IOS",
      data: days.map((day: any) => {
        return data
          .filter(
            (d: any) =>
              d.date ===
                timestampToYYYYMMDDV3(date.getTime() - 86400000 * day) &&
              d.os === "IOS"
          )
          .reduce((total: any, data: any) => {
            return total + Math.round(parseInt(data?.total));
          }, 0);
      }),
    },
    {
      label: "Android",
      data: days.map((day: any) => {
        return data
          .filter(
            (d: any) =>
              d.date ===
                timestampToYYYYMMDDV3(date.getTime() - 86400000 * day) &&
              d.os === "Android"
          )
          .reduce((total: any, data: any) => {
            return total + Math.round(parseInt(data?.total));
          }, 0);
      }),
    },
    {
      label: "IOS-Chưa phản hồi",
      data: days.map((day: any) => {
        const temp = data.find(
          (d: any) =>
            d.date === timestampToYYYYMMDDV3(date.getTime() - 86400000 * day) &&
            d.isReplyed === 0 &&
            d.os === "IOS"
        );
        return temp?.total || 0;
      }),
    },
    {
      label: "IOS-Đã phản hồi",
      data: days.map((day: any) => {
        const temp = data.find(
          (d: any) =>
            d.date === timestampToYYYYMMDDV3(date.getTime() - 86400000 * day) &&
            d.isReplyed === 1 &&
            d.os === "IOS"
        );
        return temp?.total || 0;
      }),
    },
    {
      label: "Android-Chưa phản hồi",
      data: days.map((day: any) => {
        const temp = data.find(
          (d: any) =>
            d.date === timestampToYYYYMMDDV3(date.getTime() - 86400000 * day) &&
            d.isReplyed === 0 &&
            d.os === "Android"
        );
        return temp?.total || 0;
      }),
    },
    {
      label: "Android-Đã phản hồi",
      data: days.map((day: any) => {
        const temp = data.find(
          (d: any) =>
            d.date === timestampToYYYYMMDDV3(date.getTime() - 86400000 * day) &&
            d.isReplyed === 1 &&
            d.os === "Android"
        );
        return temp?.total || 0;
      }),
    },
  ];
};

export const renderDataRate = (data: any) => {
  const days = [];
  const date = new Date();
  for (let index = 0; index <= 31; index++) {
    days.push(index);
  }
  return days.map((day) => {
    const temp = data.find(
      (d: any) =>
        d.date === timestampToYYYYMMDDV3(date.getTime() - 86400000 * day)
    );
    return temp?.total || 0;
  });
};

export const renderDataReviewStatus = (datas: any, filter: any) => {
  return {
    label: [
      "Chưa phản hồi IOS",
      "Đã phản hồi IOS",
      "Chưa phản hồi Android",
      "Đã phản hồi Android",
    ],
    data: [
      datas
        .filter(
          (r: any) =>
            r.isReplyed === 0 &&
            r.os === "IOS" &&
            r.date >= filter.start &&
            r.date <= filter.end
        )
        .reduce((total: any, data: any) => {
          return total + Math.round(parseInt(data?.total));
        }, 0),
      datas
        .filter(
          (r: any) =>
            r.isReplyed === 1 &&
            r.os === "IOS" &&
            r.date >= filter.start &&
            r.date <= filter.end
        )
        .reduce((total: any, data: any) => {
          return total + Math.round(parseInt(data?.total));
        }, 0),
      datas
        .filter(
          (r: any) =>
            r.isReplyed === 0 &&
            r.os === "Android" &&
            r.date >= filter.start &&
            r.date <= filter.end
        )
        .reduce((total: any, data: any) => {
          return total + Math.round(parseInt(data?.total));
        }, 0),
      datas
        .filter(
          (r: any) =>
            r.isReplyed === 1 &&
            r.os === "Android" &&
            r.date >= filter.start &&
            r.date <= filter.end
        )
        .reduce((total: any, data: any) => {
          return total + Math.round(parseInt(data?.total));
        }, 0),
    ],
  };
};

export const renderReportOfLabelAddbyReviewDate = (
  labels: {}[],
  labelByDateCreateReview: {}[]
) => {
  const days: any[] = [];
  for (let index = 0; index <= 31; index++) {
    days.push(index);
  }

  const date = new Date();
  const dataLabels = days.map((d: any) => {
    return timestampToYYYYMMDDV3(date.getTime() - 86400000 * d);
  });
  const dataValue = labels
    .filter((l: any) => l.level === 2)
    .map((l: any) => {
      return {
        label: l.label,
        data: days.map((d: any) => {
          const temp: any = labelByDateCreateReview.find(
            (label: any) =>
              label.v === l.id &&
              label.c === timestampToYYYYMMDDV3(date.getTime() - 86400000 * d)
          );
          const tempAll: any = labelByDateCreateReview.filter(
            (label: any) =>
              label.c === timestampToYYYYMMDDV3(date.getTime() - 86400000 * d)
          );
          const total = tempAll.reduce((total: any, data: any) => {
            return total + Math.round(parseInt(data?.total));
          }, 0);
          return total === 0
            ? 0
            : Math.floor((parseInt(temp?.total || 0) / total) * 10) / 10;
        }),
      };
    });

  return { dataLabels, dataValue };
};
