//src/components/atoms/logo/index.tsx

// Logo de Pideloo
export const PidelooLogo = ({ size = 40 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path
            d="M20 20 C20 10, 30 5, 50 5 C75 5, 90 20, 90 45 C90 70, 70 85, 50 85 C40 85, 35 80, 30 75 L20 95 L20 20 Z"
            fill="currentColor"
        />
        <path
            d="M35 35 C35 30, 40 25, 50 25 C65 25, 75 35, 75 50 C75 65, 65 75, 50 75 C45 75, 40 72, 37 68"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
        />
    </svg>
);