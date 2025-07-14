
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Articles from "./pages/Articles";
import Videos from "./pages/Videos";
import Podcasts from "./pages/Podcasts";
import Programmes from "./pages/Programmes";
import Equipe from "./pages/Equipe";
import Contact from "./pages/Contact";
import Soutenir from "./pages/Soutenir";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/soutenir" element={<Soutenir />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
