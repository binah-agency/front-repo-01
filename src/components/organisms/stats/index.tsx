//src/components/organisms/stats/index.tsx
import { Text, Box, Container, SimpleGrid, rem } from "@mantine/core";

// Stats Section
export const StatsSection = () => {
    const stats = [
        { value: '50K+', label: 'Usuarios activos' },
        { value: '10K+', label: 'Productos' },
        { value: '500+', label: 'Vendedores' },
        { value: '99%', label: 'Satisfacción' },
    ];

    return (
        <Box py={60} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <Container size="xl">
                <SimpleGrid cols={{ base: 2, md: 4 }} spacing={50}>
                    {stats.map((stat) => (
                        <Box key={stat.label} ta="center">
                            <Text
                                size={rem(56)}
                                fw={700}
                                style={{
                                    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {stat.value}
                            </Text>
                            <Text c="gray.5" size="sm" tt="uppercase" fw={500} mt={8}>
                                {stat.label}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};