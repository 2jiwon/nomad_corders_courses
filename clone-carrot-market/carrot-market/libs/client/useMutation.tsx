import { useState } from "react";

export default function useMutation(
  url: string
): [
  (data?: any) => void,
  { loading: boolean; data: undefined | any; error: undefined | any }
] {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);
  function mutation(data: any) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }
  // 반환값 1은 function, 2는 object
  return [mutation, { loading, data, error }];
}
