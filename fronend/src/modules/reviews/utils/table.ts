export const initKeys = [
  "index",
  "authorName",
  "replyBy",
  "updated_at",
  "language",
  "rate",
  "text",
  "originalText",
  "status",
  "appVersionName",
  "labels",
  "os",
];

export const allKeys: any = [
  { value: "authorName", label: "authorName" },
  { value: "replyBy", label: "replyBy" },
  { value: "updated_at", label: "updated_at" },
  { value: "language", label: "language" },
  { value: "rate", label: "rate" },
  { value: "text", label: "text" },
  { value: "originalText", label: "originalText" },
  { value: "status", label: "status" },
  { value: "appVersionName", label: "appVersionName" },
  { value: "labels", label: "labels" },
  { value: "os", label: "os" },
  { value: "labelCreatedBy", label: "Người gán nhãn" },
];

export const getFilterFromQuery = (query: any) => {
  return {
    status: query.get("status") ? query.get("status").split(",") : [],
    appVersionName: query.get("appVersionName")
      ? query.get("appVersionName").split(",")
      : [],
    language: query.get("language") ? query.get("language").split(",") : [],
    os: query.get("os") ? query.get("os").split(",") : [],
    labels: query.get("labels") ? query.get("labels").split(",") : [],
    replyBy: query.get("replyBy") ? query.get("replyBy").split(",") : [],
    rate: query.get("rate") ? query.get("rate").split(",") : [],
  };
};

const onlyUnique = (value: any, index: any, array: any) => {
  return array.indexOf(value) === index;
};

export const getStatus = (data: {
  createdBy: any;
  updated_at: any;
  created_at: any;
  uLastModified: any;
}) => {
  if (data.createdBy === null) {
    return "Chưa phản hồi";
  } else {
    if (
      data.uLastModified !== "" &&
      data.updated_at > data.uLastModified &&
      data.created_at < data.uLastModified
    ) {
      return "Update since reply";
    }
  }
  return "Đã phản hồi";
};

export const getLabelDisplay = (label: any, labelInits: any) => {
  if (label) {
    let rs: any = [];
    const data: any = label.split(",").filter(onlyUnique);
    data.forEach((l: any) => {
      const label = labelInits.find((labelInit: any) => labelInit.id === l);
      if (label) {
        rs.push(label.name);
      } else {
        rs.push(l);
      }
    });
    return rs;
  } else {
    return [];
  }
};
