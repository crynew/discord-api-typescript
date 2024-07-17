import express, { Router } from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/users', userRoutes);

function listEndpoints(router: Router) {
  const routes: any[] = [];

  function collectEndpoints(stack: any[], basePath: string = '') {
    stack.forEach((layer: any) => {
      if (layer.route) {
        const path = layer.route.path.replace(/^\/api\/users\/?(?=\/|$)/i, '/api/'); 
        const route = {
          route: `${path}`, 
          method: Object.keys(layer.route.methods).join(', ').toUpperCase(),
        };
        routes.push(route);
      } else if (layer.name === 'router' && layer.handle.stack) {
        collectEndpoints(layer.handle.stack, `/api/${layer.regexp}`);
      } else if (layer.name === 'bound dispatch') {
        const path = layer.route.path.replace(/^\/api\/users\/?(?=\/|$)/i, '/api/');
        const route = {
          route: `${path}`,
          method: layer.route.stack.map((r: { method: string }) => r.method.toUpperCase()).join(', '),
        };
        routes.push(route);
      }
    });
  }

  collectEndpoints(router.stack);

  return routes;
}

const registeredRoutes = listEndpoints(app._router);
console.log(`Rotas registradas:`);
console.table(registeredRoutes.map(route => ({ Route: route.route, Method: route.method }))); 
console.log(`\nTotal de rotas registradas: ${registeredRoutes.length}`);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});