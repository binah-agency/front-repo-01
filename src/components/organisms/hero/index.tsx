// src/components/organisms/hero.tsx
import { Box, Container, Grid, Stack, Title, Text, Button, Group, Badge, Card, SimpleGrid, ThemeIcon, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconArrowRight, IconChevronRight, IconPackage, IconCheck, IconClock, IconStar } from '@tabler/icons-react';
import { useMantineTheme } from '@mantine/core';

export function HeroSection() {
    const theme = useMantineTheme();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 1024px)');

    const categories = [
        { name: 'Tecnología', icon: '📱' },
        { name: 'Moda', icon: '👕' },
        { name: 'Hogar', icon: '🏠' },
        { name: 'Deportes', icon: '⚽' },
    ];

    return (
        <Box
            style={{
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #09090b 0%, #1a0b2e 50%, #09090b 100%)',
                overflow: 'hidden',
                paddingTop: rem(100),
                paddingBottom: rem(60),
            }}
        >
            {/* Background Blobs */}
            <Box
                className="animate-float-slow"
                style={{
                    position: 'absolute',
                    width: rem(isMobile ? 200 : 400),
                    height: rem(isMobile ? 200 : 400),
                    background: theme.colors.violet[6],
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    opacity: 0.4,
                    top: '-10%',
                    left: '-10%',
                    pointerEvents: 'none',
                }}
            />
            <Box
                className="animate-float-slow delay-2000"
                style={{
                    position: 'absolute',
                    width: rem(isMobile ? 150 : 300),
                    height: rem(isMobile ? 150 : 300),
                    background: theme.colors.violet[4],
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    opacity: 0.3,
                    top: '60%',
                    right: '10%',
                    pointerEvents: 'none',
                }}
            />
            <Box
                className="animate-float-slow delay-4000"
                style={{
                    position: 'absolute',
                    width: rem(isMobile ? 120 : 250),
                    height: rem(isMobile ? 120 : 250),
                    background: '#ec4899',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    opacity: 0.2,
                    top: '30%',
                    right: '5%',
                    pointerEvents: 'none',
                }}
            />

            <Container size="xl" style={{ position: 'relative', zIndex: 10 }}>
                <Grid gutter={{ base: 40, md: 60 }} align="center">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack gap={isMobile ? 'md' : 'xl'} className="animate-slide-up">
                            <Badge
                                size={isMobile ? 'md' : 'lg'}
                                radius="xl"
                                variant="gradient"
                                gradient={{ from: 'violet.6', to: 'violet.5' }}
                                leftSection={
                                    <Box
                                        w={8}
                                        h={8}
                                        bg="white"
                                        style={{
                                            borderRadius: '50%',
                                        }}
                                        className="animate-pulse-slow"
                                    />
                                }
                                style={{ alignSelf: 'flex-start' }}
                            >
                                Ahora en Venezuela
                            </Badge>

                            <Title
                                order={1}
                                style={{
                                    fontSize: isMobile ? rem(40) : isTablet ? rem(56) : rem(72),
                                    lineHeight: 1.05,
                                    background: 'linear-gradient(135deg, #fff 0%, #c084fc 50%, #a855f7 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Tu tienda,
                                <br />
                                <Text
                                    span
                                    inherit
                                    style={{
                                        WebkitTextFillColor: theme.colors.violet[4],
                                        color: theme.colors.violet[4],
                                    }}
                                >
                                    sin límites
                                </Text>
                            </Title>

                            <Text
                                size={isMobile ? 'md' : 'xl'}
                                c="gray.4"
                                maw={500}
                                lh={1.6}
                            >
                                La plataforma de e-commerce que conecta a venezolanos con productos locales e internacionales.
                                Rápido, seguro y sin complicaciones.
                            </Text>

                            <Group wrap="wrap" gap="sm">
                                <Button
                                    size={isMobile ? 'md' : 'lg'}
                                    radius="xl"
                                    variant="gradient"
                                    gradient={{ from: 'violet.6', to: 'violet.5' }}
                                    rightSection={<IconArrowRight size={20} />}
                                    style={{
                                        boxShadow: '0 10px 40px -10px rgba(124, 58, 237, 0.5)',
                                        flex: isMobile ? '1 1 100%' : '0 0 auto',
                                    }}
                                >
                                    Empezar a comprar
                                </Button>
                                <Button
                                    size={isMobile ? 'md' : 'lg'}
                                    radius="xl"
                                    variant="outline"
                                    color="gray"
                                    rightSection={<IconChevronRight size={20} />}
                                    style={{
                                        flex: isMobile ? '1 1 100%' : '0 0 auto',
                                    }}
                                >
                                    Vender en Pideloo
                                </Button>
                            </Group>

                            <Group gap="xs" c="gray.5" wrap="nowrap">
                                <Group gap={0} wrap="nowrap">
                                    {[1, 2, 3].map((i) => (
                                        <Box
                                            key={i}
                                            w={isMobile ? 28 : 32}
                                            h={isMobile ? 28 : 32}
                                            bg="gray.7"
                                            style={{
                                                borderRadius: '50%',
                                                border: '2px solid #09090b',
                                                marginLeft: i > 1 ? rem(-10) : 0,
                                            }}
                                        />
                                    ))}
                                </Group>
                                <Text size={isMobile ? 'xs' : 'sm'}>
                                    <strong>+50,000</strong> compradores activos
                                </Text>
                            </Group>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 6 }} className="animate-slide-up delay-200">
                        <Box
                            className="animate-float"
                            style={{
                                position: 'relative',
                                maxWidth: isMobile ? 320 : 400,
                                margin: '0 auto',
                            }}
                        >
                            <Card
                                p={0}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 25px 50px -12px rgba(124, 58, 237, 0.25)',
                                }}
                            >
                                <Box p={isMobile ? 'md' : 'xl'}>
                                    <Group justify="space-between" align="center" mb="md" wrap="nowrap">
                                        <Text fw={700} size={isMobile ? 'md' : 'lg'}>Pideloo Market</Text>
                                        <Badge
                                            color="green"
                                            variant="light"
                                            leftSection={<IconClock size={12} />}
                                            size={isMobile ? 'sm' : 'md'}
                                        >
                                            En vivo
                                        </Badge>
                                    </Group>

                                    <SimpleGrid cols={2} spacing={isMobile ? 'xs' : 'md'} mb="md">
                                        {categories.map((cat) => (
                                            <Box
                                                key={cat.name}
                                                p={isMobile ? 'sm' : 'md'}
                                                className="category-card"
                                                style={{
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    borderRadius: rem(12),
                                                    textAlign: 'center',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <Text size={isMobile ? 'lg' : 'xl'} mb={4}>{cat.icon}</Text>
                                                <Text size={isMobile ? 'xs' : 'sm'} c="gray.3">{cat.name}</Text>
                                            </Box>
                                        ))}
                                    </SimpleGrid>

                                    <Card radius="lg" p="sm" bg="rgba(124, 58, 237, 0.2)">
                                        <Group wrap="nowrap">
                                            <ThemeIcon
                                                size={isMobile ? 40 : 50}
                                                radius="xl"
                                                variant="gradient"
                                                gradient={{ from: 'violet.6', to: 'violet.5' }}
                                            >
                                                <IconPackage size={isMobile ? 20 : 24} />
                                            </ThemeIcon>
                                            <Box style={{ minWidth: 0 }}>
                                                <Text size={isMobile ? 'xs' : 'sm'} c="gray.4" truncate>Tu pedido #1234</Text>
                                                <Text fw={700} c="green.4" size={isMobile ? 'xs' : 'sm'}>
                                                    <IconCheck size={14} style={{ display: 'inline', marginRight: 4 }} />
                                                    En camino • 15 min
                                                </Text>
                                            </Box>
                                        </Group>
                                    </Card>
                                </Box>
                            </Card>

                            {/* Floating Badge */}
                            <Box
                                className="animate-float delay-1000"
                                style={{
                                    position: 'absolute',
                                    top: rem(-15),
                                    right: rem(-15),
                                    padding: rem(10),
                                    background: theme.colors.violet[6],
                                    borderRadius: rem(12),
                                    boxShadow: '0 10px 30px -10px rgba(124, 58, 237, 0.5)',
                                }}
                            >
                                <IconStar size={isMobile ? 20 : 24} color="white" fill="white" />
                            </Box>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}