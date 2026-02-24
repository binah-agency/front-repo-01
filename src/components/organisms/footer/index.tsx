//src/components/organisms/footer/index.tsx
import { Text, Box, Container, Grid, Group, ActionIcon, Stack, Flex } from "@mantine/core";
import { IconBrandInstagram, IconBrandTwitter, IconBrandFacebook } from "@tabler/icons-react";
import { PidelooLogo } from "../../atoms/logo";

// Footer
export const Footer = () => {
    const columns = [
        {
            title: 'Producto',
            links: ['Marketplace', 'Vender', 'Envíos', 'Pagos'],
        },
        {
            title: 'Empresa',
            links: ['Nosotros', 'Blog', 'Prensa', 'Empleos'],
        },
        {
            title: 'Soporte',
            links: ['Centro de ayuda', 'Contacto', 'Términos', 'Privacidad'],
        },
    ];

    return (
        <Box bg="dark.9" pt={60} pb={30} style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Container size="xl">
                <Grid gutter={50} mb={50}>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Group gap="sm" mb="md">
                            <Box c="white">
                                <PidelooLogo size={40} />
                            </Box>
                            <Text fz="xl" fw={700} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                pideloo
                            </Text>
                        </Group>
                        <Text c="gray.5" size="sm" mb="md" maw={300}>
                            La plataforma de e-commerce líder en Venezuela. Conectando compradores y vendedores de forma segura.
                        </Text>
                        <Group gap="xs">
                            {[IconBrandInstagram, IconBrandTwitter, IconBrandFacebook].map((Icon, i) => (
                                <ActionIcon
                                    key={i}
                                    variant="filled"
                                    color="gray"
                                    radius="xl"
                                    size="lg"
                                    style={{ background: 'rgba(255,255,255,0.1)' }}
                                >
                                    <Icon size={18} />
                                </ActionIcon>
                            ))}
                        </Group>
                    </Grid.Col>

                    {columns.map((col) => (
                        <Grid.Col key={col.title} span={{ base: 6, md: 2 }}>
                            <Text fw={700} mb="md" size="sm">{col.title}</Text>
                            <Stack gap="xs">
                                {col.links.map((link) => (
                                    <Text
                                        key={link}
                                        component="a"
                                        href="#"
                                        c="gray.5"
                                        size="sm"
                                        style={{ textDecoration: 'none', ':hover': { color: '#a855f7' } }}
                                    >
                                        {link}
                                    </Text>
                                ))}
                            </Stack>
                        </Grid.Col>
                    ))}
                </Grid>

                <Box pt={30} style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Flex justify="space-between" align="center" direction={{ base: 'column', sm: 'row' }} gap="md">
                        <Text size="xs" c="gray.6">
                            © 2026 Pideloo Venezuela. Todos los derechos reservados.
                        </Text>
                        <Text size="xs" c="gray.6">Hecho con 💜 en Venezuela</Text>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
};
