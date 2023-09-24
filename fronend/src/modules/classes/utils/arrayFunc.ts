export const array2str = (arrs: any, type: number) => {
  let str = "";
  try {
    arrs.map((arr: any) => {
      type === 1 ? (str += `,'${arr}'`) : (str += `,${arr}`);
      return 1;
    });
    return str.substring(1);
  } catch (error) {
    return undefined;
  }
};

export const sumBalance = (datas: any) => {
  try {
    return datas.reduce((total: any, data: any) => {
      return total + Math.round(parseInt(data?.balance));
    }, 0);
  } catch (error) {
    return 0;
  }
};
