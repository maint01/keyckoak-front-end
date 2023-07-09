// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const COMMOM_CONFIG = {
  REALMS_NAME: 'myrealm',
  BASE_URL: 'http://localhost:4200/',
  HOST_KEY_CLOAK: 'http://localhost:8080',
  CLIENT_ID: 'client-public',
};

export const environment = {
  production: false,
  apiUrl: 'http://103.226.248.168:8096/automl-service-v2/api',
  apiUrlFe: 'http://localhost:8081',
  imageUrl: 'http://localhost:8081/api/application-images/show-image/',
  sso: 'https://sso2.viettel.vn:8001/sso',
  webportalURL: 'http://localhost:4201',
  appCode: 'DWP',
  apiPath: {
    keycloakPermission: `/realms/${COMMOM_CONFIG.REALMS_NAME}/protocol/openid-connect/token`,
  },
  keycloak: {
    // Url of the Identity Provider
    issuer: `${COMMOM_CONFIG.HOST_KEY_CLOAK}/realms/${COMMOM_CONFIG.REALMS_NAME}`,
    // URL of the SPA to redirect the user to after login
    redirectUri: `${COMMOM_CONFIG.BASE_URL}`,

    // The SPA's id.
    // The SPA is registerd with this id at the auth-serverß
    // clientId: 'crm',
    clientId: `${COMMOM_CONFIG.CLIENT_ID}`,

    // dummyClientSecret: 'faffae86-4b61-4c74-aa54-960a67fa0ad6',
    // dummyClientSecret: `${COMMOM_CONFIG.CLIENT_SECRET}`,

    responseType: 'code',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC.
    scope: 'openid profile email',
    // Remove the requirement of using Https to simplify the demo
    // THIS SHOULD NOT BE USED IN PRODUCTION
    // USE A CERTIFICATE FOR YOUR IDP
    // IN PRODUCTION
    requireHttps: false,
    // at_hash is not present in JWT token
    showDebugInformation: false,
    disableAtHashCheck: true,
  },

  logoutUrl: `${COMMOM_CONFIG.HOST_KEY_CLOAK}/realms/${COMMOM_CONFIG.REALMS_NAME}/logout?client_id=${
    COMMOM_CONFIG.CLIENT_ID}&returnTo=${encodeURIComponent(COMMOM_CONFIG.BASE_URL)}`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
