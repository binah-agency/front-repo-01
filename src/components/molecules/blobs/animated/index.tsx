//src/components/molecules/blobs/animated/index.tsx

import { Box, rem } from "@mantine/core";
import { float } from "../../../../theme";

export // Blob animado para fondo
    const AnimatedBlob = ({
        color,
        size,
        top,
        left,
        delay = 0
    }: {
        color: string;
        size: number;
        top: string;
        left: string;
        delay?: number;
    }) => (
        <Box
            style={{
                position: 'absolute',
                width: rem(size),
                height: rem(size),
                background: color,
                borderRadius: '50%',
                filter: 'blur(80px)',
                opacity: 0.5,
                top,
                left,
                animation: `${float} 10s ease-in-out infinite`,
                animationDelay: `${delay}s`,
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );