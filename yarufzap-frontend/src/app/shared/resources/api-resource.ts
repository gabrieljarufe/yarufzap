import { environment } from "src/environments/environment";

export class ApiResources{

  public static endpoint = `${environment.hostUrl}/yarufzap/api/`;

  public static get V1(){
    const VERSION = 'v1';
    const controller = {
      user: 'user'
    }

    return {
      user: {
        login: `${this.endpoint}/${VERSION}/${controller.user}/log-in`,
        register: `${this.endpoint}/${VERSION}/${controller.user}/register`,
      }
    }
  }

}
