import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6239a1f6bbe20c3f66c76942.mockapi.io/api/v1/' }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: (contactId) => ({
                url: `/contacts/${ contactId }`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: (body) => ({
                url: '/contacts',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Contact'],
        })
    }),
});

export const { useFetchContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactApi;