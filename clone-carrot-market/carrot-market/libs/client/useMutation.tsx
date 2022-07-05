import { useState } from "react";

export default function useMutation(
  url: string
): [
  (data?: any) => void,
  { loading: boolean; data: undefined | any; error: undefined | any }
] {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });
  function mutation(data: any) {
    setState(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((json) => setState(json))
      .catch((error) => setState(error))
      .finally(() => setState(false));
  }
  // 반환값 1은 function, 2는 object
  return [mutation, { loading, data, error }];
}
