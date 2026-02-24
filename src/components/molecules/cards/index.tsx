
//src/components/molecules/cards/index.tsx
import { Box } from "@mantine/core";
import { useState } from "react";
import { slideUp } from "../../../theme";

// Card con efecto 3D Tilt
interface TiltCardProps {
    children: React.ReactNode;
    delay?: number;
}

export const TiltCard = ({ children, delay = 0 }: TiltCardProps) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientY - rect.top - rect.height / 2) / 20;
        const y = (rect.width / 2 - (e.clientX - rect.left)) / 20;
        setRotation({ x, y });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <Box
            className="hover-lift"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'translateY(-8px)' : ''}`,
                transition: 'transform 0.15s ease-out',
                animation: `${slideUp} 0.6s ease-out ${delay}s both`,
            }}
        >
            {children}
        </Box>
    );
};