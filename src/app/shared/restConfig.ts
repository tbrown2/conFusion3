import { baseURL } from "./baseurl";

//in app module must pass this into our restangular module from the node
//see imports in our app.module.ts 

export function RestangularConfigFactory(RestangularProvider) {
	//where you configure your route
	RestangularProvider.setBaseUrl(baseURL);
}