import React from 'react';

// Custom interface for general svg sizing
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const JavaIcon = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19.467 14c0 2.21-3.343 4-7.467 4s-7.467-1.79-7.467-4 3.343-4 7.467-4 7.467 1.79 7.467 4z" fill="#007396" fillOpacity="0.15" />
    <path d="M2 17.5c0 1.933 4.477 3.5 10 3.5s10-1.567 10-3.5" stroke="#F89820" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 19.5c0 1.38 3.582 2.5 8 2.5s8-1.12 8-2.5" stroke="#F89820" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13.5 2c-.5 2.5-2 3.5-3 5s-.5 3 1.5 4.5" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 2.5c-.8 2-2.5 3-3 4.5s.5 2.5 2 3.5" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8.5 13.5c1.5-.5 3-1 4.5-.5s2 1.5.5 2.5-4 1-5.5.5-1.5-2 .5-2.5z" fill="#F89820" />
  </svg>
);

export const JavaScriptIcon = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="24" height="24" rx="3" fill="#F7DF1E" />
    <path d="M19.3 17.6c-.3.8-.9 1.4-1.7 1.8-1 .4-2.1.3-3-.2-.5-.3-.8-.8-.9-1.3l1.8-1.1c.1.3.3.6.5.7.3.2.7.2 1.1 0 .3-.2.5-.5.5-.8 0-.4-.3-.7-.7-.9l-1-.4c-1-.4-1.7-1-1.7-2.1 0-.8.4-1.6 1.1-2 .7-.4 1.7-.5 2.5-.2.6.2 1.1.7 1.3 1.3l-1.7 1c-.1-.3-.3-.5-.5-.6-.2-.1-.5-.1-.7 0-.3.1-.4.4-.4.6 0 .3.2.5.6.7l.9.4c1.2.5 1.8 1.1 1.8 2.2zM12.9 14.5v3.4c0 .7-.2 1.2-.6 1.5-.4.3-1 .4-1.7.4-.7 0-1.3-.2-1.7-.5-.3-.3-.5-.7-.5-1.3l1.8-1c0 .3.1.5.3.6.2.1.4.1.6 0 .3-.1.4-.4.4-.8v-5.7h1.9v3.4z" fill="#323330" />
  </svg>
);

export const ReactIcon = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    <path d="M12 7c3.9 0 7.1 2.2 7.1 5s-3.2 5-7.1 5-7.1-2.2-7.1-5 3.2-5 7.1-5z" stroke="#61DAFB" strokeWidth="1.2" />
    <path d="M12 7c3.9 0 7.1 2.2 7.1 5s-3.2 5-7.1 5-7.1-2.2-7.1-5 3.2-5 7.1-5z" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
    <path d="M12 7c3.9 0 7.1 2.2 7.1 5s-3.2 5-7.1 5-7.1-2.2-7.1-5 3.2-5 7.1-5z" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
  </svg>
);

export const HtmlIcon = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.6 2l1.6 17.5 6.8 2.5 6.8-2.5L20.4 2H3.6z" fill="#E34F26" />
    <path d="M12 3.8v16.3l5.2-1.9L18.4 3.8H12z" fill="#F16529" />
    <path d="M12 8.7H8.5l-.2-2.5h7.4l-.2 2.5H12zM12 13.7H8.9l-.3-3.2h6.8l-.3 3.2H12zM8.9 15.3l.2 2.5 2.9 1v-2.8l-3.1-.7zM12 18.8l2.9-1 .2-2.5H12v3.5z" fill="#FFF" />
  </svg>
);

export const CssIcon = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.6 2l1.6 17.5 6.8 2.5 6.8-2.5L20.4 2H3.6z" fill="#1572B6" />
    <path d="M12 3.8v16.3l5.2-1.9L18.4 3.8H12z" fill="#21A1F1" />
    <path d="M12 8.7H8.5l-.2-2.5h7.4l-.2 2.5H12zM12 13.7H8.9l-.3-3.2h6.8l-.3 3.2H12zM8.9 15.3l.2 2.5 2.9 1v-2.8l-3.1-.7zM12 18.8l2.9-1 .2-2.5H12v3.5z" fill="#FFF" />
  </svg>
);

export const NodeIcon = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2z" fill="#339933" fillOpacity="0.15" stroke="#339933" strokeWidth="1.5" />
    <path d="M12 6.5L6 10v4l6 3.5 6-3.5v-4l-6-3.5z" fill="#339933" />
    <path d="M12 9.5V14" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const ExpressIcon = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="24" height="24" rx="3" fill="#353535" />
    <path d="M4 8h5v1.5H5.8v2.2H9v1.5H5.8v2.3H9V17H4V8zm7.2 4.2L13 8h1.8l-2.6 4.8 2.7 5.2h-1.8l-1.9-4.2-1.9 4.2H7.5l2.7-5.2L7.6 8h1.8l1.8 4.2zm6.3-1.4c1 .3 1.5 1 1.5 2.2v1.5c0 1.2-.5 2.2-1.7 2.2h-2.5V8h2.3c1.2 0 1.7.8 1.7 2 0 .8-.3 1.4-1.3 1.6zm-2.7-1.3v1.8h.5c.3 0 .5-.2.5-.5v-.8c0-.3-.2-.5-.5-.5h-.5zm0 3.3V15.5h.7c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-.7z" fill="#FFF" />
  </svg>
);

export const MongoIcon = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 1.5C12 1.5 6.5 7.5 6.5 12c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-4.5-5.5-10.5-5.5-10.5z" fill="#47A248" fillOpacity="0.15" stroke="#47A248" strokeWidth="1.5" />
    <path d="M12 1.5v16M12 12c-2 0-3.5-1.5-3.5-3.5S10 5 12 5" stroke="#47A248" strokeWidth="1.2" />
    <path d="M12 17.5v3.5" stroke="#3F3F3F" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const MySqlIcon = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2C6.5 2 2 5.6 2 10c0 3.5 3 6.5 7.5 7.5l-1 2.5 4-2c5 0 9.5-3 9.5-8 0-4.4-4.5-8-10-8z" fill="#00758F" fillOpacity="0.15" />
    <path d="M4 10c0-3.5 3.5-6.5 8-6.5s8 3 8 6.5-3.5 6.5-8 6.5-8-3-8-6.5z" stroke="#00758F" strokeWidth="1.5" />
    <path d="M12 6c1 1.5 2 2 3.5 2" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const GitIcon = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2.5 12l9.5-9.5 9.5 9.5-9.5 9.5-9.5-9.5z" fill="#F05032" fillOpacity="0.1" stroke="#F05032" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2.5" fill="#F05032" />
    <circle cx="8.5" cy="8.5" r="1.5" fill="#F05032" />
    <circle cx="15.5" cy="15.5" r="1.5" fill="#F05032" />
    <path d="M8.5 8.5h3.5v7h3.5" stroke="#F05032" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

export const VsCodeIcon = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2 16.5l3.5-3.5-3.5-3.5v7z" fill="#0065A9" />
    <path d="M17.5 2.5L7.5 10l-2 1.5v1l2 1.5 10 7.5 2.5-1.5V4l-2.5-1.5z" fill="#007ACC" />
    <path d="M17.5 2.5v19L20 20V4l-2.5-1.5z" fill="#1F9CF0" />
    <path d="M5.5 13L15 20.5l2.5-1.5-12-6z" fill="#AE80B2" />
  </svg>
);

export const PostmanIcon = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" fill="#FF6C37" fillOpacity="0.15" stroke="#FF6C37" strokeWidth="1.5" />
    <path d="M10 16.5l4.5-4.5L10 7.5v9z" fill="#FF6C37" />
    <path d="M7 12h8.5" stroke="#FF6C37" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Custom Brand Icons aliased for drop-in replacement of lucide-react brand icons
export const Github = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Linkedin = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
