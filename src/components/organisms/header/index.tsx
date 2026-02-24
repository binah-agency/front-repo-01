//src/components/organisms/header/index.tsx
import { useMediaQuery } from "@mantine/hooks";
import { IconX, IconMenu2 } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { PidelooLogo } from "../../atoms/logo";
import {

    Container,
    Group,
    Button,
    Text,
    Stack,
    Box,
    ActionIcon,
    Flex,
} from '@mantine/core';

// Header/Navigation
export const AppHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Características', href: '#features' },
        { label: 'Para vendedores', href: '#sellers' },
        { label: 'Tarifas', href: '#pricing' },
        { label: 'Ayuda', href: '#help' },
    ];

    return (
        <header

            style={{
                height: "80px",
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                background: scrolled ? 'rgba(9, 9, 11, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                transition: 'all 0.3s ease',
            }}
        >
            <Container size="xl" h="100%">
                <Flex justify="space-between" align="center" h="100%">
                    {/* Logo */}
                    <Group gap="sm" style={{ cursor: 'pointer' }}>
                        <Box c="white">
                            <PidelooLogo size={36} />
                        </Box>
                        <Text
                            fz="xl"
                            fw={700}
                            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: -1 }}
                        >
                            pideloo<Text span c="violet.5">.live</Text>
                        </Text>
                    </Group>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Group gap={32}>
                            {navLinks.map((link) => (
                                <Text
                                    key={link.label}
                                    component="a"
                                    href={link.href}
                                    c="gray.5"
                                    fw={500}
                                    fz="sm"
                                    style={{
                                        textDecoration: 'none',
                                        transition: 'color 0.2s',
                                        ':hover': { color: 'white' },
                                    }}
                                >
                                    {link.label}
                                </Text>
                            ))}
                        </Group>
                    )}

                    {/* Actions */}
                    <Group gap="sm">
                        {!isMobile && (
                            <>
                                <Button variant="subtle" color="gray" radius="xl">
                                    Iniciar sesión
                                </Button>
                                <Button
                                    variant="gradient"
                                    gradient={{ from: 'violet.6', to: 'violet.5' }}
                                    radius="xl"
                                    style={{
                                        boxShadow: '0 10px 40px -10px rgba(124, 58, 237, 0.5)',
                                    }}
                                >
                                    Registrarse
                                </Button>
                            </>
                        )}
                        {isMobile && (
                            <ActionIcon
                                variant="subtle"
                                color="gray"
                                size="lg"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                            </ActionIcon>
                        )}
                    </Group>
                </Flex>

                {/* Mobile Menu */}
                {isMobile && mobileMenuOpen && (
                    <Box
                        p="md"
                        style={{
                            position: 'absolute',
                            top: 80,
                            left: 0,
                            right: 0,
                            background: 'rgba(9, 9, 11, 0.95)',
                            backdropFilter: 'blur(20px)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <Stack gap="md">
                            {navLinks.map((link) => (
                                <Text
                                    key={link.label}
                                    component="a"
                                    href={link.href}
                                    c="gray.3"
                                    fw={500}
                                    p="sm"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Text>
                            ))}
                            <Button variant="gradient" gradient={{ from: 'violet.6', to: 'violet.5' }} fullWidth>
                                Registrarse
                            </Button>
                        </Stack>
                    </Box>
                )}
            </Container>
        </header>
    );
};