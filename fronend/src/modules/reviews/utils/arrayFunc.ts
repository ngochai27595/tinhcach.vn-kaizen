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
