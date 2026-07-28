import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';

const queryClient = new QueryClient();

function Router() {

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:slug" component={ProjectDetail} />
      <Route component={() => <div className="min-h-screen flex items-center justify-center font-mono text-sm opacity-40">404</div>} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base="/111">
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
