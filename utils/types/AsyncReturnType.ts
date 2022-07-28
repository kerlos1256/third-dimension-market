export type AsyncReturnType<T extends () => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;
