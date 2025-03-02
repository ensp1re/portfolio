"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Star, Pencil, Trash2, AlertCircle, X } from "lucide-react"
import TestimonialForm from "./TestimonialForm"

export type Testimonial = {
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

export default function TestimonialList() {
    const router = useRouter()
    const [testimonials, setTestimonials] = useState<Testimonial[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null)
    const [deleteId, setDeleteId] = useState<string | null>(null)
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const [editDialogOpen, setEditDialogOpen] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        fetchTestimonials()
    }, [])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setEditDialogOpen(false)
                setDeleteDialogOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const fetchTestimonials = async () => {
        setLoading(true)
        try {
            const response = await fetch("/api/testimonials?limit=100")
            const data = await response.json()
            setTestimonials(data.testimonials)
        } catch (error) {
            console.error("Error fetching testimonials:", error)
            setError("Failed to load testimonials")
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (testimonial: Testimonial) => {
        setEditingTestimonial(testimonial)
        setEditDialogOpen(true)
    }

    const handleDelete = (id: string) => {
        setDeleteId(id)
        setDeleteDialogOpen(true)
    }

    const confirmDelete = async () => {
        if (!deleteId) return

        try {
            const response = await fetch(`/api/testimonials/${deleteId}`, {
                method: "DELETE",
            })

            if (!response.ok) {
                throw new Error("Failed to delete testimonial")
            }

            setTestimonials((prev) => prev.filter((t) => t.id !== deleteId))
            router.refresh()
        } catch (error) {
            console.error("Error deleting testimonial:", error)
            setError("Failed to delete testimonial")
        } finally {
            setDeleteDialogOpen(false)
            setDeleteId(null)
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
        <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
                {error && (
                    <div className="bg-red-50 p-3 rounded-md flex items-start text-red-600 text-sm mb-4">
                        <AlertCircle className="h-4 w-4 mr-2 mt-0.5" />
                        <span>{error}</span>
                    </div>
                )}

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : testimonials.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">No testimonials found. Add your first testimonial!</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Client
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Job
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Rating
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {testimonials.map((testimonial) => (
                                    <tr key={testimonial.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {testimonial.avatar && (
                                                    <Image
                                                        src={testimonial.avatar || "/placeholder.svg"}
                                                        alt={testimonial.name}
                                                        width={32}
                                                        height={32}
                                                        className="rounded-full mr-2"
                                                    />
                                                )}
                                                {testimonial.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {testimonial.jobTitle} • {testimonial.jobType}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{formatDate(testimonial.date)}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                className="text-blue-600 hover:text-blue-900 mr-2"
                                                onClick={() => handleEdit(testimonial)}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </button>
                                            <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(testimonial.id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Edit Dialog */}
                {editDialogOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div ref={modalRef} className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center p-4 border-b">
                                <h3 className="text-lg font-semibold">Edit Testimonial</h3>
                                <button onClick={() => setEditDialogOpen(false)} className="text-gray-500 hover:text-gray-700">
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                            {editingTestimonial && (
                                <div className="p-4">
                                    <TestimonialForm
                                        testimonial={editingTestimonial as Testimonial}
                                        onSuccess={() => {
                                            setEditDialogOpen(false)
                                            fetchTestimonials()
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Delete Dialog */}
                {deleteDialogOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div ref={modalRef} className="bg-white rounded-lg shadow-xl max-w-md w-full">
                            <div className="flex justify-between items-center p-4 border-b">
                                <h3 className="text-lg font-semibold">Confirm Deletion</h3>
                                <button onClick={() => setDeleteDialogOpen(false)} className="text-gray-500 hover:text-gray-700">
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="p-4">
                                <p>Are you sure you want to delete this testimonial? This action cannot be undone.</p>
                                <div className="flex justify-end gap-2 mt-4">
                                    <button
                                        onClick={() => setDeleteDialogOpen(false)}
                                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={confirmDelete}
                                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

