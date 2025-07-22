'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { tanstackProviderProps } from "@/utils/project-types"
import { useState } from "react"


export const TanstackProvider = ({ children }: tanstackProviderProps) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}