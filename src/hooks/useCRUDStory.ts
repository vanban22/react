import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useCRUDStory = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const addMutation = useMutation({
    mutationFn: async (story: any) => {
      const res = await axios.post("http://localhost:3000/stories", story);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await axios.delete(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (story: any) => {
      const { id, ...data } = story;
      const res = await axios.put(`http://localhost:3000/stories/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  return {
    list: data || [],
    isLoading,
    error,

    add: addMutation.mutate,
    remove: removeMutation.mutate,
    update: updateMutation.mutate,

    isAdding: addMutation.isPending,
    isRemoving: removeMutation.isPending,
    isUpdating: updateMutation.isPending,
  };
};