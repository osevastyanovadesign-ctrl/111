import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';

const queryClient = new QueryClient();

function Router() {

  const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;

  if (
    nav.type === "reload" &&
    window.location.pathname.startsWith("/project/")
  ) {
    window.location.replace("/");
    return null;
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route component={() => <div className="min-h-screen flex items-center justify-center font-mono text-sm opacity-40">404</div>} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
