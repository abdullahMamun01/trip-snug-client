import { updateUserRoleAction } from '@/actions/user.action'
import { catchError } from '@/lib/catchError';
import { useMutation, useQueryClient } from '@tanstack/react-query'

import toast from 'react-hot-toast';

export default function useUserRoleUpdate() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateUserRoleAction,
    onSuccess: (data) => {
      toast.success('user role update success', { position: "top-right" });
      queryClient.invalidateQueries({queryKey:['users']})
    },
    onError: (error) => {
      console.log(error, "from");
      catchError(error);
    },
  })
}
