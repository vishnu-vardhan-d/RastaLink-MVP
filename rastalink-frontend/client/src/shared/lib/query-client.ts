import { QueryClient, QueryFunction, DefaultOptions } from "@tanstack/react-query";
import { apiClient } from "@/shared/api/client";

const queryConfig: DefaultOptions = {
  queries: {
    retry: (failureCount, error: any) => {
      // Don't retry on 4xx errors except 408, 429
      if (error?.status >= 400 && error?.status < 500 && 
          error?.status !== 408 && error?.status !== 429) {
        return false;
      }
      return failureCount < 3;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  },
  mutations: {
    retry: false,
  },
};

const defaultQueryFn: QueryFunction = async ({ queryKey, signal }) => {
  const path = queryKey.join("/");
  return apiClient.get(path, { signal });
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
  queryCache: queryConfig.queries ? undefined : undefined,
});

// Set default query function
queryClient.setQueryDefaults([], { queryFn: defaultQueryFn });