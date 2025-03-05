import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'allorders/:userId',
    renderMode: RenderMode.Server
  },
  
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
