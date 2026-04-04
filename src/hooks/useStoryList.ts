import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useStoryList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  return {
    list: data || [],
    isLoading,
    error,
  };
};