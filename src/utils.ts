type ErrorBoundaryReturn<T> =
  | {
      error: { msg: string };
      data: null;
    }
  | {
      error: null;
      data: T;
    };

export async function errorBoundary<T>(
  func: () => Promise<T>
): Promise<ErrorBoundaryReturn<T>> {
  try {
    return { data: await func(), error: null };
  } catch (err) {
    return { data: null, error: { msg: err } };
  }
}
