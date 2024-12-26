import { deleteContact, getContactDetails, getContacts } from './api';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';

export function useContacts() {
  return useQuery({
    queryKey: ['Contacts', 'List'],
    queryFn: getContacts,
  });
}

export function useContactDetails(id) {
  return useQuery({
    queryKey: ['Contacts', 'Detail', id],
    queryFn: () => getContactDetails(id),
  });
}

export function useDeleteContact(id) {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: (id) => deleteContact(id),
    onSuccess: async (data, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ['Contacts', 'Detail', variables.id],
      });
      await queryClient.invalidateQueries({ queryKey: ['Contacts', 'List'] });
    },
  });
}

export function useAddContact(data) {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: (data) => deleteContact(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['Contacts', 'List'] });
    },
  });
}
