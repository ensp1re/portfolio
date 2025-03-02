/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import axios from "axios"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

type Testimonial = {
    id: string
    name: string
    jobType: string
    jobTitle: string
    review: string
    rating: number
    date: string
    avatar: string | null
    imageUrl: string | null
}

type PaginationData = {
    total: number
    pages: number
    page: number
    limit: number
}

export default function TestimonialsSection() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([])
    const [pagination, setPagination] = useState<PaginationData>({
        total: 0,
        pages: 0,
        page: 1,
        limit: 6,
    })
    const [loading, setLoading] = useState(true)
    const t = useTranslations("reviews")

    useEffect(() => {
        fetchTestimonials(pagination.page)
    }, [pagination.page])

    const fetchTestimonials = async (page: number) => {
        setLoading(true)
        try {
            const response = await axios.get(`/api/testimonials`, {
                params: {
                    page: page,
                    limit: pagination.limit
                }
            })
            const data = response.data
            setTestimonials(data.testimonials)
            setPagination(data.pagination)
        } catch (error) {
            console.error("Error fetching testimonials:", error)
        } finally {
            setLoading(false)
        }
    }

    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= pagination.pages) {
            setPagination((prev) => ({ ...prev, page: newPage }))
        }
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    return (
        <motion.section
            id="reviews"
            className="py-12 bg-slate-50 text-slate-900 border-t-1"
            initial={{ opacity: 0.3, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4">
                <div className="space-y-6 mb-12">
                    <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold relative text-[#050d18]">
                        {t("title")}
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl ">
                        See what my clients have to say about my work and services
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
                    </div>
                ) : (

                    testimonials && testimonials.length > 0 ? (

                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {testimonials.map((testimonial: Testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                                    >
                                        {testimonial.imageUrl && (
                                            <div className="h-48 overflow-hidden">
                                                <Image
                                                    src={testimonial.imageUrl || "/placeholder.svg?height=200&width=400"}
                                                    alt={`Project for ${testimonial.name}`}
                                                    width={400}
                                                    height={200}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="mr-4">
                                                    <Image
                                                        src={testimonial.avatar || "/placeholder.svg?height=50&width=50"}
                                                        alt={testimonial.name}
                                                        width={50}
                                                        height={50}
                                                        className="rounded-full"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                                    <p className="text-sm text-gray-600">
                                                        {testimonial.jobTitle} • {testimonial.jobType}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex mb-3">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 
                          className={\`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-gray-700 mb-3">{testimonial.review}</p>
                                            <p className="text-sm text-gray-500">{formatDate(testimonial.date)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center mt-10">
                                <nav className="flex items-center">
                                    <button
                                        onClick={() => handlePageChange(pagination.page - 1)}
                                        disabled={pagination.page === 1}
                                        className="px-3 py-2 text-slate-600 rounded-md mr-2 flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50 bg-slate-100"
                                    >
                                        <ChevronLeft className="w-5 h-5 mr-1" />
                                        Previous
                                    </button>

                                    {Array.from({ length: pagination.pages }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handlePageChange(index + 1)}
                                            className={`w-10 h-10 mx-1 rounded-md flex items-center justify-center ${pagination.page === index + 1
                                                ? "bg-sky-400 text-white"
                                                : "bg-white text-gray-700 hover:bg-gray-100"
                                                }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => handlePageChange(pagination.page + 1)}
                                        disabled={pagination.page === pagination.pages}
                                        className="px-3 py-2 rounded-md ml-2 flex items-center disabled:opacity-50 disabled:cursor-not-allowed bg-sky-400 text-white"
                                    >
                                        Next
                                        <ChevronRight className="w-5 h-5 ml-1" />
                                    </button>
                                </nav>
                            </div>
                        </>
                    ) : (
                        <div className="py-12">
                            <h3 className="text-muted-foreground">
                                No testimonials available right now!
                            </h3>
                        </div>
                    )
                )}
            </div>
        </motion.section>
    )
}

