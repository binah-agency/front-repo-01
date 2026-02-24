// src/components/organisms/features.tsx
import { Box, Container, Stack, Title, Text, SimpleGrid, Card, ThemeIcon, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconShoppingBag, IconTruck, IconShieldCheck, IconHeadphones } from '@tabler/icons-react';
import { TiltCard } from '../../molecules/cards';
import { ScrollReveal } from '../../atoms/logo/scroll';


export function FeaturesSection() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    const features = [
        {
            icon: IconShoppingBag,
            title: 'Marketplace Completo',
            description: 'Desde electrónica hasta moda. Miles de productos de vendedores verificados.',
            color: 'violet',
        },
        {
            icon: IconTruck,
            title: 'Envío Nacional',
            description: 'Cobertura en todo Venezuela. Rastrea tu pedido en tiempo real.',
            color: 'blue',
        },
        {
            icon: IconShieldCheck,
            title: 'Compra Protegida',
            description: 'Tu dinero está seguro. Reembolso garantizado si no recibes tu producto.',
            color: 'green',
        },
        {
            icon: IconHeadphones,
            title: 'Soporte 24/7',
            description: 'Atención al cliente en español, siempre disponible para ayudarte.',
            color: 'pink',
        },
    ];

    return (
        <Box py={isMobile ? 60 : 100} bg="dark.9" id="features">
            <Container size="xl">
                <Stack gap={isMobile ? 'xl' : 50}>
                    <ScrollReveal>
                        <Title
                            order={2}
                            size={isMobile ? rem(32) : rem(56)}
                            mb="md"
                        >
                            Todo lo que <Text span c="violet.5" inherit>necesitas</Text>
                            <br />
                            en un solo lugar
                        </Title>
                        <Text size={isMobile ? 'md' : 'xl'} c="gray.5" maw={600}>
                            Una plataforma diseñada para compradores y vendedores venezolanos.
                        </Text>
                    </ScrollReveal>

                    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={isMobile ? 'md' : 'xl'}>
                        {features.map((feature, index) => (
                            <ScrollReveal key={feature.title} delay={index * 0.1}>
                                <TiltCard >
                                    <Card
                                        h="100%"
                                        p={isMobile ? 'lg' : 'xl'}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                        }}
                                    >
                                        <ThemeIcon
                                            size={isMobile ? 50 : 60}
                                            radius="xl"
                                            variant="gradient"
                                            gradient={{ from: `${feature.color}.6`, to: `${feature.color}.5` }}
                                            mb="md"
                                        >
                                            <feature.icon size={isMobile ? 24 : 30} />
                                        </ThemeIcon>
                                        <Title order={3} size={isMobile ? 'h5' : 'h4'} mb="xs">
                                            {feature.title}
                                        </Title>
                                        <Text c="gray.5" size={isMobile ? 'sm' : 'md'} lh={1.6}>
                                            {feature.description}
                                        </Text>
                                    </Card>
                                </TiltCard>
                            </ScrollReveal>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
}