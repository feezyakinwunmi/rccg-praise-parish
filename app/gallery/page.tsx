"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Download, X } from "lucide-react";
import { PageIntro } from "../components/ui";

// Albums load from Google Drive when these are set. Each folder in the parent
// folder becomes an album. Without them, the albums below are shown instead.
const GOOGLE_DRIVE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;
const PARENT_FOLDER_ID = process.env.NEXT_PUBLIC_DRIVE_PARENT_FOLDER_ID;

interface Photo {
  id: string;
  name: string;
  imageUrl: string;
}

interface Album {
  id: string;
  name: string;
  images: Photo[];
  createdTime?: string;
}

const localAlbums: Album[] = [
  {
    id: "epe-praise-experience",
    name: "Epe Praise Experience 1.0",
    createdTime: "2026-04-19",
    images: ["epe", "epe2", "epe3", "epe4", "epe5", "epe6", "epe7", "epe8", "epe9", "epe10"].map((f) => ({
      id: f,
      name: `Epe Praise Experience, photo ${f.replace("epe", "") || "1"}`,
      imageUrl: `/${f}.jpg`,
    })),
  },
  {
    id: "parish-life",
    name: "Sundays at the parish",
    images: ["tppc", "pra", "ch", "ch2", "ch3", "ch4", "sc", "youth"].map((f) => ({
      id: f,
      name: "A Sunday at The Praise Parish",
      imageUrl: `/${f}.jpg`,
    })),
  },
];

async function fetchDriveAlbums(): Promise<Album[]> {
  const base = "https://www.googleapis.com/drive/v3/files";
  const foldersRes = await fetch(
    `${base}?q='${PARENT_FOLDER_ID}'+in+parents+and+mimeType='application/vnd.google-apps.folder'+and+trashed=false&key=${GOOGLE_DRIVE_API_KEY}&fields=files(id,name,createdTime)`
  );
  const folders = await foldersRes.json();
  if (!folders.files) return [];

  const albums: Album[] = await Promise.all(
    folders.files.map(async (folder: { id: string; name: string; createdTime?: string }) => {
      const imagesRes = await fetch(
        `${base}?q='${folder.id}'+in+parents+and+(mimeType='image/jpeg'+or+mimeType='image/png'+or+mimeType='image/jpg'+or+mimeType='image/webp')+and+trashed=false&key=${GOOGLE_DRIVE_API_KEY}&fields=files(id,name)&pageSize=50`
      );
      const images = await imagesRes.json();
      return {
        id: folder.id,
        name: folder.name,
        createdTime: folder.createdTime,
        images: (images.files || []).map((img: { id: string; name: string }) => ({
          id: img.id,
          name: img.name,
          imageUrl: `${base}/${img.id}?alt=media&key=${GOOGLE_DRIVE_API_KEY}`,
        })),
      };
    })
  );

  return albums
    .filter((a) => a.images.length > 0)
    .sort((a, b) => (b.createdTime ?? "").localeCompare(a.createdTime ?? ""));
}

function prettyName(fileName: string) {
  return fileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
}

function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date.length === 10 ? `${date}T12:00:00` : date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function GalleryPage() {
  const [albums, setAlbums] = useState<Album[] | null>(null);
  const [album, setAlbum] = useState<Album | null>(null);
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (!GOOGLE_DRIVE_API_KEY || !PARENT_FOLDER_ID) {
      setAlbums(localAlbums);
      return;
    }
    fetchDriveAlbums()
      .then((drive) => setAlbums(drive.length > 0 ? drive : localAlbums))
      .catch((err) => {
        console.error("Could not load the gallery from Google Drive:", err);
        setAlbums(localAlbums);
      });
  }, []);

  useEffect(() => {
    if (!album && !photo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (photo) setPhoto(null);
      else setAlbum(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [album, photo]);

  return (
    <>
      <PageIntro kicker="Gallery" title="Photos from the parish">
        Sundays, special services and the evenings we have shared together in Epe.
      </PageIntro>

      <section className="wrap min-h-[480px] pb-24 sm:pb-32">
        {albums === null ? (
          <p className="text-[15px] text-ink-3">Loading albums…</p>
        ) : (
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((a) => (
              <button key={a.id} type="button" onClick={() => setAlbum(a)} className="group rounded-2xl text-left">
                <div className="grid aspect-[4/3] grid-cols-3 grid-rows-2 gap-1.5 overflow-hidden rounded-2xl bg-raised">
                  {a.images.slice(0, 3).map((img, i) => (
                    <img
                      key={img.id}
                      src={img.imageUrl}
                      alt=""
                      className={`h-full w-full object-cover ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                    />
                  ))}
                </div>
                <h2 className="mt-5 text-[17px] font-medium text-ink transition-colors group-hover:text-plum">
                  {a.name}
                </h2>
                <p className="mt-1 text-sm tabular-nums text-ink-3">
                  {a.images.length} photos{a.createdTime ? ` · ${formatDate(a.createdTime)}` : ""}
                </p>
              </button>
            ))}
          </div>
        )}
      </section>

      {album && (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-paper" role="dialog" aria-modal="true" aria-labelledby="album-title">
          <div className="sticky top-0 z-10 border-b border-line bg-paper/95 backdrop-blur-[6px]">
            <div className="wrap flex h-16 items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setAlbum(null)}
                className="-ml-2 inline-flex h-10 items-center gap-2 rounded-lg px-2 text-[15px] text-ink-2 transition-colors hover:bg-raised hover:text-ink"
              >
                <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" />
                All albums
              </button>
              <p id="album-title" className="truncate text-[15px] font-medium text-ink">
                {album.name}
              </p>
              <span className="w-[110px] text-right text-sm tabular-nums text-ink-3">{album.images.length} photos</span>
            </div>
          </div>
          <div className="wrap columns-2 gap-3 py-8 sm:columns-3 lg:columns-4">
            {album.images.map((img) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setPhoto(img)}
                className="mb-3 block w-full overflow-hidden rounded-xl bg-raised"
              >
                <img
                  src={img.imageUrl}
                  alt={prettyName(img.name)}
                  loading="lazy"
                  className="w-full transition-opacity duration-150 hover:opacity-90"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {photo && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0d1218]/95 p-4"
          onClick={() => setPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={prettyName(photo.name)}
        >
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={photo.imageUrl}
              alt={prettyName(photo.name)}
              className="max-h-[80vh] w-full rounded-lg object-contain"
            />
            <div className="mt-4 flex items-center justify-between gap-4 text-white/80">
              <p className="truncate text-sm">{prettyName(photo.name)}</p>
              <div className="flex gap-2">
                <a
                  href={photo.imageUrl}
                  download
                  className="inline-flex h-10 items-center gap-2 rounded-[10px] bg-white/10 px-4 text-sm text-white transition-colors hover:bg-white/20"
                >
                  <Download size={16} strokeWidth={1.5} aria-hidden="true" />
                  Download
                </a>
                <button
                  type="button"
                  onClick={() => setPhoto(null)}
                  aria-label="Close photo"
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
