//src/App.tsx

// ==========================================
// APP PRINCIPAL
// ==========================================

import { ColorSchemeScript, MantineProvider, AppShell } from "@mantine/core";
import { FeaturesSection } from "./components/organisms/features";
import { Footer } from "./components/organisms/footer";
import { AppHeader } from "./components/organisms/header";
import { HeroSection } from "./components/organisms/hero";
import { MarqueeSection } from "./components/organisms/marquee";
import { StatsSection } from "./components/organisms/stats";
import { customTheme } from "./theme";
import { CTASection } from "./components/organisms/cta";

function App() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="dark" />
      <MantineProvider theme={customTheme} defaultColorScheme="dark">
        <AppShell header={{ height: 80 }} padding={0}>
          <AppHeader />
          <AppShell.Main pt={0}>
            <HeroSection />
            <MarqueeSection />
            <FeaturesSection />
            <StatsSection />
            <CTASection />
            <Footer />
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </>
  );
}


export default App
