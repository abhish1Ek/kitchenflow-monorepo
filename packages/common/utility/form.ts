export const getFieldKeys = <A extends object>(obj: A) =>
  (Object.keys(obj) as (keyof A)[]).reduce((acc, curr) => {
    acc[curr] = curr;
    return acc;
  }, {} as any) as { [P in keyof A]: P };
