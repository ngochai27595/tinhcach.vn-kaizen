export const timestamp2Date = (timestamp: any) => {
  const d: any = new Date(timestamp * 1000 + 7 * 3600000);
  return d.toGMTString();
};

export const timestampToYYYYMMDD = (minisecond: any) => {
  const d: any = new Date(minisecond);
  return `${d.getFullYear()}-${
    d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1
  }-${d.getDate() < 10 ? "0" + d.getDate() : d.getDate()}`;
};

export const timestampToYYYYMMDDV3 = (minisecond: any) => {
  const d: any = new Date(minisecond);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${
    d.getDate() < 10 ? "0" + d.getDate() : d.getDate()
  }`;
};

export const timestampToYYYYMMDDV2 = (minisecond: any) => {
  const d: any = new Date(minisecond);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${
    d.getDate() < 10 ? "0" + d.getDate() : d.getDate()
  }`;
};

export const timestampToStartOfWeek = (minisecond: any) => {
  const date = new Date(minisecond);
  const d: any = new Date(minisecond - (date.getDay() - 1) * 86400000);
  return `${d.getFullYear()}-${
    d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1
  }-${d.getDate() < 10 ? "0" + d.getDate() : d.getDate()}`;
};

export const timestampToStartOfWeekV2 = (minisecond: any) => {
  const date = new Date(minisecond);
  const d: any = new Date(
    minisecond - (date.getDay() === 0 ? 7 : date.getDay() - 1) * 86400000
  );
  return `${d.getFullYear()}-${d.getMonth() + 1}-${
    d.getDate() < 10 ? "0" + d.getDate() : d.getDate()
  }`;
};

export const timestampToStartOfMonth = (minisecond: any) => {
  const date = new Date(minisecond);
  const d: any = new Date(`${date.getFullYear()}-${date.getMonth() + 1}-01`);
  return `${d.getFullYear()}-${
    d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1
  }-${d.getDate() < 10 ? "0" + d.getDate() : d.getDate()}`;
};

export const timestampToStartOfMonthV2 = (minisecond: any) => {
  const date = new Date(minisecond);
  const d: any = new Date(`${date.getFullYear()}-${date.getMonth() + 1}-01`);
  return `${d.getFullYear()}-${d.getMonth() + 1}-01`;
};

export const timestampToStartOfYear = (minisecond: any) => {
  const date = new Date(minisecond);
  const d: any = new Date(`${date.getFullYear()}-01-01`);
  return `${d.getFullYear()}-${
    d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1
  }-${d.getDate() < 10 ? "0" + d.getDate() : d.getDate()}`;
};

export const timestampToStartOfYearV2 = (minisecond: any) => {
  const date = new Date(minisecond);
  const d: any = new Date(`${date.getFullYear()}-01-01`);
  return `${d.getFullYear()}-1-1`;
};
