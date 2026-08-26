import { Router, Switch, Route} from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Team from "@/pages/team";
import About from "@/pages/about";
import Events from "@/pages/events";
import Alumini from "@/pages/alumini";
import Resources from "@/pages/resources";
import Reports from "@/pages/reports";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/team" component={Team} />
      <Route path="/about" component={About} />
      <Route path="/events" component={Events} />
      <Route path="/alumini" component={Alumini} />
      <Route path="/resources" component={Resources} />
      <Route path="/reports" component={Reports} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
          <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
