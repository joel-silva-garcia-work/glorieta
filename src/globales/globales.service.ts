import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalesService {
    private existingRoutes: any[] = [];

  setExistingRoutes(routes: any[]) {
    this.existingRoutes = routes;
  }

  getExistingRoutes(): any[] {
    return this.existingRoutes;
  }
}
