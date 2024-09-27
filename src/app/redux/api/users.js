import { apiSlice } from "./apiSlice";


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createProfile: builder.mutation({
            query: (data) => ({
                url: `${BASE_URL}/api/createProfile`,
                body: data
            })
        }),
        getProfile: builder.query({
            query: () => ({
                url: `${BASE_URL}/api/getProfile`
            })
        }),
        updateProfile: builder.mutation({
            query: (data) => ({
                url: `${BASE_URL}/api/updateProfile`,
                body: data
            })
        })
    })
})

export const { useCreateProfileMutation, useGetProfileQuery, useUpdateProfileMutation } = userApiSlice