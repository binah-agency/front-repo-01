// src/components/atoms/scroll/index.tsx
import { Box } from '@mantine/core';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <Box
            ref={ref}
            className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </Box>
    );
}