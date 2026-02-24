//src/components/organisms/cta/index.tsx

import { Box, Text, Container, Stack, Title, rem, Group, Button } from "@mantine/core";
import { IconShoppingBag, IconMapPin } from "@tabler/icons-react";

// CTA Section
export const CTASection = () => {
    return (
        <Box
            py={120}
            style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                overflow: 'hidden',
            }}
        >
            <Container size="md" style={{ position: 'relative', zIndex: 10 }}>
                <Stack align="center" gap="xl" ta="center">
                    <Title order={2} size={rem(56)}>
                        ¿Listo para vender
                        <br />
                        <Text span c="violet.5" inherit>más?</Text>
                    </Title>
                    <Text size="xl" c="gray.4" maw={500}>
                        Únete a miles de emprendedores venezolanos que ya están creciendo con Pideloo.
                    </Text>

                    <Group>
                        <Button
                            size="xl"
                            radius="xl"
                            variant="gradient"
                            gradient={{ from: 'violet.6', to: 'violet.5' }}
                            leftSection={<IconShoppingBag size={20} />}
                        >
                            Crear tienda gratis
                        </Button>
                        <Button
                            size="xl"
                            radius="xl"
                            variant="outline"
                            color="gray"
                        >
                            Conocer más
                        </Button>
                    </Group>

                    <Group gap="xs" mt="md">
                        <IconMapPin size={16} color="#8b5cf6" />
                        <Text size="sm" c="gray.5">
                            Disponible en todo Venezuela • Caracas, Valencia, Maracaibo y más
                        </Text>
                    </Group>
                </Stack>
            </Container>
        </Box>
    );
};
