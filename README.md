# 01.PairPrograming-Angular
Practice Pair Programing - Angular

## What's new in Angular CLI 15.0?
* **https://blog.ninja-squad.com/2022/11/16/angular-cli-15.0/**
* **https://angular.io/cli/generate#environments-command**
* **https://angular.io/guide/standalone-components**

```
What's new in Angular CLI 15.0?
```
## TECNOLOGÍAS
* **https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3**

```
El stack de versiones que se usarán para el desarrollo del proyecto es el siguiente.

Angular CLI (15.0.0)
Node (16.18.1)
Npm (9.1.2)
Typescript (4.8.4)

```

## Configuring application environments
* **https://angular.io/guide/build**
* **https://medium.com/@saniyusuf/configure-build-environments-with-angular-cli-216019a1aa6a**

```
ng generate --help
ng generate environments
ng g environments (Generates and configures environment files for a project.)

CREATE src/environments/environment.ts (31 bytes)
CREATE src/environments/environment.development.ts (31 bytes)
UPDATE angular.json (3149 bytes)
```

## ANGULAR 15: CREANDO UNA APLICACIÓN STANDALONE
* **https://codemain.pro/angular-15-creando-una-aplicacion-standalone/**

```
```

## Building and serving Angular apps
* **https://angular.io/guide/build**
* **https://dev.to/nikosanif/using-shared-settings-between-multiple-environments-in-angular-1d0e**

```
Configuring application environments

ng generate environments

myProject/src/environments
    environment.ts
    environment.development.ts
    environment.staging.ts

export const environment = {
  production: true
};

import { environment } from './../environments/environment';

The main CLI configuration file, angular.json, contains a fileReplacements section in the configuration
for each build target, which lets you replace any file in the TypeScript program with a target-specific
version of that file.


"configurations": {
  "development": { … },
  "production": { … },
  "staging": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.staging.ts"
      }
    ]
  }
}

ng build --configuration development
ng build --configuration=staging
ng build --configuration staging

You can also configure the serve command to use the targeted build configuration if you add it to the 
"serve:configurations" section of angular.json:

"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "browserTarget": "your-project-name:build"
  },
  "configurations": {
    "development": {
      "browserTarget": "your-project-name:build:development"
    },
    "production": {
      "browserTarget": "your-project-name:build:production"
    },
    "staging": {
      "browserTarget": "your-project-name:build:staging"
    }
  }
},


Note: restart server

```


## 

```
```


## 

```
```


## 

```
```