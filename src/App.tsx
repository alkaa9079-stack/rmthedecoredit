import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "./pages/Index.tsx";
import TierPage from "./pages/TierPage.tsx";
import CollectionPage from "./pages/CollectionPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import RegistryPage from "./pages/RegistryPage.tsx";
import PrivacyPage from "./pages/PrivacyPage.tsx";
import ThankYouPage from "./pages/ThankYouPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SpeedInsights />
        <BrowserRouter>
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/registry" element={<RegistryPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/tier/:tierId" element={<TierPage />} />
            <Route path="/collection/:categoryId" element={<CollectionPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
