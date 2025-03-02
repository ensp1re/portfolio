import React from "react"
import { Metadata } from "next"
import { SessionProvider } from "../pages/components/AdminSide/SectionProvider"

export const metadata: Metadata = {
    title: "Admin Dashboard - Testimonials",
    description: "Admin dashboard for managing testimonials",
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SessionProvider>
            <div>{children}</div>
        </SessionProvider>
    )
}

