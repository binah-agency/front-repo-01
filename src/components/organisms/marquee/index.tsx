// src/components/organisms/marquee.tsx
import { Box, Text, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function MarqueeSection() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const items = ['ENVÍO NACIONAL', 'PAGOS SEGUROS', 'VERIFICADO', '24/7', 'MADE IN VZLA', 'SOPORTE LOCAL'];

    return (
        <Box
            py={isMobile ? 'xs' : 'md'}
            style={{
                background: 'rgba(124, 58, 237, 0.1)',
                borderTop: '1px solid rgba(124, 58, 237, 0.2)',
                borderBottom: '1px solid rgba(124, 58, 237, 0.2)',
                overflow: 'hidden',
            }}
        >
            <Box
                className="animate-marquee"
                style={{
                    display: 'flex',
                    width: 'fit-content',
                }}
            >
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <div
                        key={i}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <Text
                            size={isMobile ? 'md' : 'xl'}
                            fw={700}
                            c="gray.6"
                            px={isMobile ? 30 : 50}
                            style={{
                                letterSpacing: rem(isMobile ? 2 : 4),
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {item}
                        </Text>
                        <Text
                            size={isMobile ? 'md' : 'xl'}
                            c="violet.5"
                            px={isMobile ? 15 : 20}
                            style={{ flexShrink: 0 }}
                        >
                            •
                        </Text>
                    </div>
                ))}
            </Box>
        </Box>
    );
}