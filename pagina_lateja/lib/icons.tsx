// Simple SVG icon components to replace lucide-react
export const ArrowRight = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export const Calendar = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
    <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} />
    <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} />
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2} />
  </svg>
)

export const MapPin = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <circle cx="12" cy="8" r="3" strokeWidth={2} />
  </svg>
)

export const Users = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197v1a6 6 0 009-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

export const Mail = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

export const Send = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <line x1="22" y1="2" x2="11" y2="13" strokeWidth={2} />
    <polygon points="22,2 15,21 11,13 3,9 22,2" strokeWidth={2} />
  </svg>
)

export const Heart = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
)

export const Archive = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <polyline points="21,8 21,21 3,21 3,8" strokeWidth={2} />
    <rect x="1" y="3" width="22" height="5" strokeWidth={2} />
    <line x1="10" y1="12" x2="14" y2="12" strokeWidth={2} />
  </svg>
)

export const Search = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="11" cy="11" r="8" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.35-4.35" />
  </svg>
)

export const Filter = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46 22,3" strokeWidth={2} />
  </svg>
)

export const Clock = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <polyline points="12,6 12,12 16,14" strokeWidth={2} />
  </svg>
)

export const User = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

export const Menu = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <line x1="3" y1="6" x2="21" y2="6" strokeWidth={2} />
    <line x1="3" y1="12" x2="21" y2="12" strokeWidth={2} />
    <line x1="3" y1="18" x2="21" y2="18" strokeWidth={2} />
  </svg>
)

export const X = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" strokeWidth={2} />
    <line x1="6" y1="6" x2="18" y2="18" strokeWidth={2} />
  </svg>
)

export const Sun = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="5" strokeWidth={2} />
    <line x1="12" y1="1" x2="12" y2="3" strokeWidth={2} />
    <line x1="12" y1="21" x2="12" y2="23" strokeWidth={2} />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth={2} />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth={2} />
    <line x1="1" y1="12" x2="3" y2="12" strokeWidth={2} />
    <line x1="21" y1="12" x2="23" y2="12" strokeWidth={2} />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth={2} />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth={2} />
  </svg>
)

export const Moon = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
    />
  </svg>
)

export const Camera = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z"
    />
    <circle cx="12" cy="13" r="4" strokeWidth={2} />
  </svg>
)

export const Share = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="18" cy="5" r="3" strokeWidth={2} />
    <circle cx="6" cy="12" r="3" strokeWidth={2} />
    <circle cx="18" cy="19" r="3" strokeWidth={2} />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" strokeWidth={2} />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" strokeWidth={2} />
  </svg>
)

export const ImageIcon = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
    <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={2} />
    <polyline points="21,15 16,10 5,21" strokeWidth={2} />
  </svg>
)

export const Video = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <polygon points="23,7 16,12 23,17 23,7" strokeWidth={2} />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" strokeWidth={2} />
  </svg>
)

export const Headphones = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18v-6a9 9 0 0118 0v6" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
    />
  </svg>
)

export const FileText = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
    />
    <polyline points="14,2 14,8 20,8" strokeWidth={2} />
    <line x1="16" y1="13" x2="8" y2="13" strokeWidth={2} />
    <line x1="16" y1="17" x2="8" y2="17" strokeWidth={2} />
    <polyline points="10,9 9,9 8,9" strokeWidth={2} />
  </svg>
)

export const Map = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2 1,6" strokeWidth={2} />
    <line x1="8" y1="2" x2="8" y2="18" strokeWidth={2} />
    <line x1="16" y1="6" x2="16" y2="22" strokeWidth={2} />
  </svg>
)

export const Phone = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
    />
  </svg>
)

export const Instagram = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
    />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} />
  </svg>
)

export const Twitter = ({ className = "h-4 w-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
    />
  </svg>
)
