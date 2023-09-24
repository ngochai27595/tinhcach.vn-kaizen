export const HHMMSStoSecond = (hhmmss: string) => {
  try {
    const data = hhmmss.split(":");
    return (
      parseInt(data[0]) * 3600 + parseInt(data[1]) * 60 + parseInt(data[2])
    );
  } catch (error) {
    return 0;
  }
};

export const secondtoHHMMSS = (second: any) => {
  try {
    const hh: any = Math.floor(second / 3600);
    const mm: any = Math.floor((second % 3600) / 60);
    const ss: any = Math.floor(second % 60);
    return `${hh < 10 ? "0" + hh : hh}:${mm < 10 ? "0" + mm : mm}:${
      ss < 10 ? "0" + ss : ss
    }`;
  } catch (error) {
    return "00:00:00";
  }
};

export const secondtoHour = (second: any) => {
  try {
    return second / 3600;
  } catch (error) {
    return 0;
  }
};
