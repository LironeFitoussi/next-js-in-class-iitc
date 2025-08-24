import { notFound } from "next/navigation"

export default function BlogPage() {
    notFound()
    return (
        <>
        <div>
            <h1>This is the Highlight page</h1>
            <p>BABA - Lirone want to sleep</p>
        </div>
        </>
    )
}