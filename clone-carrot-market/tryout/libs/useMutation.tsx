import { useState } from "react";

export default function useMutation(
  url: string
): [(data?: any) => void, { result: undefined | any; error: undefined | any }] {
  const [result, setResult] = useState(undefined);
  const [error, setError] = useState(undefined);

  function mutation(data: any) {
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) =>
      response
        .json()
        .then((json) => setResult(json))
        .catch((error) => setError(error))
    );
  }

  return [mutation, { result, error }];
}
