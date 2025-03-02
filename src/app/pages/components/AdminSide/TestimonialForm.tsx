"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Testimonial } from "./TestimonialList"
import axios from "axios"

type FormData = {
    id?: string
    name: string
    jobType: string
    jobTitle: string
    review: string
    rating: number
    avatar: string
    imageUrl: string | null
}

type Props = {
    testimonial?: Testimonial
    onSuccess?: () => void
}

export default function TestimonialForm({ testimonial, onSuccess }: Props) {
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>(
        testimonial
            ? {
                ...testimonial,
                avatar: testimonial.avatar || "",
            }
            : {
                name: "",
                jobType: "",
                jobTitle: "",
                review: "",
                rating: 5,
                avatar: "",
                imageUrl: "",
            },
    )
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setFormData((prev) => ({ ...prev, rating: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setSuccess("")

        try {
            const url = testimonial ? `/api/testimonials/${testimonial.id}` : "/api/testimonials"
            const method = testimonial ? "PUT" : "POST"

            console.log("formData", formData)
            console.log("url", url)
            console.log("method", method)

            const response = await axios({
                url,
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                data: formData,
            })

            if (!response.status.toString().startsWith("2")) {
                throw new Error("Failed to save testimonial")
            }

            setSuccess(testimonial ? "Testimonial updated successfully!" : "Testimonial added successfully!")

            if (!testimonial) {
                setFormData({
                    name: "",
                    jobType: "",
                    jobTitle: "",
                    review: "",
                    rating: 5,
                    avatar: "",
                    imageUrl: "",
                })
            }

            if (onSuccess) {
                onSuccess()
            }

            router.refresh()
        } catch (error) {
            setError("An error occurred. Please try again.")
            console.error("Error saving testimonial:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                        <div className="bg-red-50 p-3 rounded-md flex items-start text-red-600 text-sm">
                            <AlertCircle className="h-4 w-4 mr-2 mt-0.5" />
                            <span>{error}</span>
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-50 p-3 rounded-md flex items-start text-green-600 text-sm">
                            <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5" />
                            <span>{success}</span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Client Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                                Job Title
                            </label>
                            <input
                                id="jobTitle"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">
                                Job Type
                            </label>
                            <input
                                id="jobType"
                                name="jobType"
                                value={formData.jobType}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                                Rating (1-5)
                            </label>
                            <input
                                id="rating"
                                name="rating"
                                type="number"
                                min="1"
                                max="5"
                                value={formData.rating}
                                onChange={handleRatingChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                            Review
                        </label>
                        <textarea
                            id="review"
                            name="review"
                            value={formData.review}
                            onChange={handleChange}
                            rows={4}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
                                Avatar URL
                            </label>
                            <input
                                id="avatar"
                                name="avatar"
                                value={formData.avatar}
                                onChange={handleChange}
                                placeholder="https://example.com/avatar.jpg"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                                Project Image URL (optional)
                            </label>
                            <input
                                id="imageUrl"
                                name="imageUrl"
                                value={formData.imageUrl!}
                                onChange={handleChange}
                                placeholder="https://example.com/project.jpg"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? "opacity-75 cursor-not-allowed" : ""
                            }`}
                        disabled={loading}
                    >
                        {loading ? "Saving..." : testimonial ? "Update Testimonial" : "Add Testimonial"}
                    </button>
                </form>
            </div>
        </div>
    )
}

