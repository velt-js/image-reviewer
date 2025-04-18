"use client"

import { VeltCollaboration } from "@/components/velt/VeltCollaboration"
import DocumentViewer from "@/components/document-viewer"
import { VeltProvider } from "@veltdev/react"

export default function Home() {
  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
        <VeltCollaboration />
        <DocumentViewer />
    </VeltProvider>
  )
}
