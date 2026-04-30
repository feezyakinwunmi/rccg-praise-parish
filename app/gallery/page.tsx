"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FolderOpen, 
  Image as ImageIcon, 
  Calendar, 
  Download,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Google Drive API configuration
// You'll need to set up a Google Cloud Project and enable Drive API
const GOOGLE_DRIVE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;
const PARENT_FOLDER_ID = process.env.NEXT_PUBLIC_DRIVE_PARENT_FOLDER_ID;

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  webViewLink?: string;
  thumbnailLink?: string;
  webContentLink?: string;
  imageUrl?: string;
}

interface EventFolder {
  id: string;
  name: string;
  images: DriveFile[];
  createdTime?: string;
}

export default function GalleryPage() {
  const [eventFolders, setEventFolders] = useState<EventFolder[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventFolder | null>(null);
  const [selectedImage, setSelectedImage] = useState<DriveFile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch folders (events) from Google Drive
  useEffect(() => {
    const fetchFoldersAndImages = async () => {
      try {
        setLoading(true);
        
        // Step 1: Get all folders in the parent directory
        const foldersResponse = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${PARENT_FOLDER_ID}'+in+parents+and+mimeType='application/vnd.google-apps.folder'+and+trashed=false&key=${GOOGLE_DRIVE_API_KEY}&fields=files(id,name,createdTime)`
        );
        
        const foldersData = await foldersResponse.json();
        
        if (!foldersData.files) {
          setError("No folders found");
          setLoading(false);
          return;
        }
        
        // Step 2: For each folder, fetch images inside
        const foldersWithImages = await Promise.all(
          foldersData.files.map(async (folder: any) => {
            const imagesResponse = await fetch(
              `https://www.googleapis.com/drive/v3/files?q='${folder.id}'+in+parents+and+(mimeType='image/jpeg'+or+mimeType='image/png'+or+mimeType='image/jpg'+or+mimeType='image/webp')+and+trashed=false&key=${GOOGLE_DRIVE_API_KEY}&fields=files(id,name,mimeType,webViewLink,thumbnailLink)&pageSize=50`
            );
            
            const imagesData = await imagesResponse.json();
            
            // Get direct download URLs for images
            const imagesWithUrls = await Promise.all(
              (imagesData.files || []).map(async (image: any) => {
                // Get direct download link
                const directLink = `https://www.googleapis.com/drive/v3/files/${image.id}?alt=media&key=${GOOGLE_DRIVE_API_KEY}`;
                
                return {
                  ...image,
                  imageUrl: directLink,
                };
              })
            );
            
            return {
              id: folder.id,
              name: folder.name,
              images: imagesWithUrls,
              createdTime: folder.createdTime,
            };
          })
        );
        
        // Sort by newest first and filter folders with images
        const sortedFolders = foldersWithImages
          .filter(folder => folder.images.length > 0)
          .sort((a, b) => {
            if (!a.createdTime || !b.createdTime) return 0;
            return new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime();
          });
        
        setEventFolders(sortedFolders);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching from Google Drive:", err);
        setError("Failed to load gallery. Please try again later.");
        setLoading(false);
      }
    };
    
    if (GOOGLE_DRIVE_API_KEY && PARENT_FOLDER_ID) {
      fetchFoldersAndImages();
    } else {
      setError("Google Drive API not configured. Please check your environment variables.");
      setLoading(false);
    }
  }, []);

  // Helper function to format filename for display
  const formatFileName = (fileName: string) => {
    const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
    return nameWithoutExt.replace(/[-_]/g, " ");
  };

  // Helper function to format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 sm:pt-28 pb-16">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading gallery...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 sm:pt-28 pb-16">
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
            <ImageIcon className="w-10 h-10 text-red-500" />
          </div>
          <p className="text-gray-600">{error}</p>
          <p className="text-sm text-gray-400 mt-2">
            Make sure to add folders and images to your Google Drive.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <ImageIcon className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Our Memories</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Photo
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Gallery
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Capturing God's goodness through moments of worship, fellowship, and celebration.
          </p>
        </motion.div>

        {/* Events Grid */}
        {eventFolders.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <FolderOpen className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Events Yet</h3>
            <p className="text-gray-500">Check back soon for event photos!</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventFolders.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedEvent(event)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  {/* Cover Image */}
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    {event.images[0] ? (
                      <img
                        src={event.images[0].imageUrl}
                        alt={event.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                      <div className="flex items-center gap-1 text-white text-xs">
                        <ImageIcon className="w-3 h-3" />
                        <span>{event.images.length} photos</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Event Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                      {event.name}
                    </h3>
                    {event.createdTime && (
                      <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(event.createdTime)}</span>
                      </div>
                    )}
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {event.images.length} {event.images.length === 1 ? "memory" : "memories"} captured
                    </p>
                    <button className="mt-3 text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Gallery <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Event Modal - View all images in an event */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto" onClick={() => setSelectedEvent(null)}>
          <div className="min-h-screen p-4 sm:p-6">
            <div className="max-w-6xl mx-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedEvent.name}</h2>
                  {selectedEvent.createdTime && (
                    <p className="text-gray-400 text-sm">{formatDate(selectedEvent.createdTime)}</p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {selectedEvent.images.map((image, idx) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.02 }}
                    onClick={() => setSelectedImage(image)}
                    className="aspect-square rounded-xl overflow-hidden cursor-pointer group bg-gray-800"
                  >
                    <img
                      src={image.imageUrl}
                      alt={formatFileName(image.name)}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
            >
              <X className="w-5 h-5" />
            </button>
            
            <img
              src={selectedImage.imageUrl}
              alt={formatFileName(selectedImage.name)}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            
            <div className="flex justify-between items-center mt-4">
              <p className="text-white text-sm">{formatFileName(selectedImage.name)}</p>
              <a
                href={selectedImage.imageUrl}
                download
                className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}