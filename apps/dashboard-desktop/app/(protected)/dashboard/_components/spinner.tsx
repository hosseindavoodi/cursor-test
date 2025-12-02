import React from 'react';

interface FillingSpinnerProps {
    progress: number; // Progress percentage (0–100)
    size?: number; // Size of the spinner in pixels (default: 64)
    strokeWidth?: number; // Stroke width of the circle (default: 10)
    backgroundColor?: string; // Tailwind class or hex for background circle (default: gray-200)
    fillColor?: string; // Tailwind class or hex for filling circle (default: primary-500)
    textColor?: string; // Tailwind class or hex for percentage text (default: gray-800)
}

export const FillingSpinner: React.FC<FillingSpinnerProps> = ({
    progress,
    size = 64,
    strokeWidth = 10,
    backgroundColor = '#e5e7eb',
    fillColor = '#721126',
    textColor = '#1f2937',
}) => {
    const radius = 45; // Fixed radius for SVG viewBox (100x100)
    const circumference = 2 * Math.PI * radius; // Approx. 283
    const strokeDashoffset = (circumference * (100 - progress)) / 100;

    return (
        <div
            className="flex flex-col items-center"
            aria-busy={progress > 0 && progress < 100}
            aria-label={`Uploading file, ${progress}% complete`}
        >
            <svg
                className={`w-${size / 4} h-${size / 4}`} // Tailwind units (e.g., w-16 for 64px)
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Upload progress spinner"
            >
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke={backgroundColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke={fillColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)" // Start from top
                    style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                />
                <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    fill={textColor}
                    fontSize="20"
                    fontFamily="pinar"
                    fontWeight="normal"
                    aria-hidden="true"
                >
                    {progress}%
                </text>
            </svg>
        </div>
    );
};