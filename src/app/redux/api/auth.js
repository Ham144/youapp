import { BASE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${BASE_URL}/api/login`,
                body: data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${BASE_URL}/api/register`,
                body: data
            })
        })
    })
})


export const { useLoginMutation, useRegisterMutation } = authApiSlice