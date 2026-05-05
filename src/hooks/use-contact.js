import { useMutation } from "@tanstack/react-query";



export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data) => {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Contact form submitted:", data);
      // In a real app, you'd send this to your backend
      return data;
    },
  });
}