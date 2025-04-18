"use client"

import { VeltCollaboration } from "@/components/velt/VeltCollaboration"
import DocumentViewer from "@/components/document-viewer"
import { VeltProvider } from "@veltdev/react"

export default function Home() {
  // [VELT] Velt provider: Encapsulate your app in the VeltProvider to enable Velt features.
  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
        <VeltCollaboration />
        <DocumentViewer />
    </VeltProvider>
  )
}
