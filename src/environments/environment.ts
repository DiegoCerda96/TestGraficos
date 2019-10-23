// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB9GUceOS-t5gHOKEbeTLSYTtBkYp1Wt5o',
    authDomain: 'controacceso-903b5.firebaseapp.com',
    databaseURL: 'https://controacceso-903b5.firebaseio.com',
    projectId: 'controacceso-903b5',
    storageBucket: 'controacceso-903b5.appspot.com',
    messagingSenderId: '254457611144',
    appId: '1:254457611144:web:52c7a6b99c2b3ffd'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
