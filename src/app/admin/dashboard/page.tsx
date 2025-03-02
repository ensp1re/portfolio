"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import TestimonialList from "@src/app/pages/components/AdminSide/TestimonialList"
import TestimonialForm from "@src/app/pages/components/AdminSide/TestimonialForm"

export default function AdminDashboard() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("list")

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/admin/login")
        }
    }, [status, router])

    if (status === "loading") {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    if (!session) {
        return null
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Testimonials Admin</h1>
                <button
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center"
                    onClick={() => signOut({ callbackUrl: "/admin/login" })}
                >
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                </button>
            </div>

            <div className="mb-8">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex">
                        <button
                            onClick={() => setActiveTab("list")}
                            className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${activeTab === "list"
                                ? "border-blue-500 text-blue-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                        >
                            Testimonial List
                        </button>
                        <button
                            onClick={() => setActiveTab("add")}
                            className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${activeTab === "add"
                                ? "border-blue-500 text-blue-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                        >
                            Add New Testimonial
                        </button>
                    </nav>
                </div>
            </div>

            {activeTab === "list" ? <TestimonialList /> : <TestimonialForm />}
        </div>
    )
}

