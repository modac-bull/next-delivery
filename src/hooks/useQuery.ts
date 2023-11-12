import { useEffect, useState } from 'react';

// useQuery 훅의 옵션
interface UseQueryOptions {
  refetchInterval?: number; // 옵션으로 refetchInterval을 받습니다.
}

// useQuery 훅의 반환 타입
interface QueryResult<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
  isFetching: boolean;
}

// useQuery 훅에 제네릭 타입 적용
function useQuery<T>(
  key: string,
  fetchFunction: () => Promise<T>,
  options: UseQueryOptions = {},
): QueryResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  // 캐시를 저장
  const cache: Record<string, T> = {};

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsFetching(true);
      try {
        // 캐시에 데이터가 이미 있으면 캐시에서 데이터 가져오기.
        console.log("cache : ", cache)
        if (cache[key]) {
          setData(cache[key]);
        } else {
          const response = await fetchFunction();
          setData(response);
          cache[key] = response; // 응답을 캐시에 저장
        }
        setError(null);
      } catch (e) {
        setError(e as Error);
      } finally {
        setIsLoading(false);
        setIsFetching(false);
      }
    };

    // 데이터 페칭을 시작
    fetchData();

    // 주기적으로 데이터를 리프레시하는 옵션 설정
    if (options.refetchInterval) {
      const intervalId = setInterval(fetchData, options.refetchInterval);
      return () => clearInterval(intervalId);
    }
  }, [key, fetchFunction, options.refetchInterval]);

  return { data, error, isLoading, isFetching };
}

export default useQuery;
