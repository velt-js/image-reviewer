"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Home,
  MoreVertical,
  MessageSquare,
  Maximize2,
  Share2,
  Printer,
  Send,
} from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { VeltCommentsSidebar, VeltPresence, VeltSidebarButton } from "@veltdev/react"

export default function DocumentViewer() {
  const [showNotes, setShowNotes] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 4

  return (
    <div className="min-h-screen bg-slate-100">
      <VeltPresence />
        {/* Header Navigation */}
        <div className="p-4 flex items-center gap-2">
          <Link href="#" className="text-sky-500">
          <Home size={20} />
        </Link>
        <ChevronRight size={16} className="text-gray-400" />
        <Link href="#" className="text-gray-600 text-sm">
          Library
        </Link>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-gray-600 text-sm">Cardiovex 65+</span>
      </div>

      {/* Document Header */}
      <div className="px-6 pb-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-medium text-gray-800">Cardiovex 65+</h1>
            <p className="text-gray-500 text-sm">N-NY-US-0123</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch checked={showNotes} onCheckedChange={setShowNotes} className="data-[state=checked]:bg-sky-500" />
              <span className="text-sm text-gray-700">Show notes</span>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MoreVertical size={20} />
            </Button>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white flex items-center gap-2">
              Generate 2253 Form
              <Send size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Document Controls */}
      <div className="px-6 pb-4">
        <div className="bg-white rounded-lg shadow-sm p-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 mr-2">Page</span>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-md">
              <ChevronLeft size={18} />
            </Button>
            <div className="w-8 h-8 flex items-center justify-center text-sm">{currentPage}</div>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-md bg-gray-100">
              <ChevronRight size={18} />
            </Button>
            <span className="text-sm text-gray-600 ml-2">of {totalPages}</span>
          </div>

          <div className="flex items-center gap-2">
            <VeltSidebarButton />
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md">
              <MessageSquare size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md">
              <Maximize2 size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md">
              <Share2 size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md">
              <Printer size={18} />
            </Button>
          </div>

          <Button variant="outline" className="text-sm flex items-center gap-1">
            Version 1.2
            <ChevronDown size={16} />
          </Button>
        </div>
      </div>

      {/* Document Content - Just the image */}
      <div className="px-6 pb-6">
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden max-w-4xl">
            <Image
              src="/medical-stock-image.jpg"
              alt="Cardiovex medical document"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/4">
            <VeltCommentsSidebar embedMode={true} pageMode={true} shadowDom={false} />
          </div>

        </div>
      </div>
    </div>
  )
}
