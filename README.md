# AngularIt
Advanced Angular 6 boilerplate for new projects

---

# Features

- [ng-bootstrap](https://ng-bootstrap.github.io/) ready

- [Font Awesome](https://fontawesome.com/icons) ready

- [PouchDB](https://pouchdb.com/) as local database storage

- [Autoprefixer](https://github.com/postcss/autoprefixer) polyfils

- Enviroments: dev, uat, prod

- Encapsulated SCSS, .spec.ts free (components only)

- [Animate.css](https://daneden.github.io/animate.css)

- [HttpInterceptor](https://angular.io/api/common/http/HttpInterceptor) ready.

- Deployment via rsync (edit package.json's scripts `push-prod` and `push-uat`). Publish: `npm run (push-prod|push-uat)`

- Included pipes: safeHtml, objToArr, timeago

# Install
`npm i`

# Development
Run the project locally: `ng serve`

If you want to test the other environments locally:

User Acceptance Testing: `ng serve --env=uat`

Production: `ng serve --env=prod`

# Deployment
After setting up the server's credentials and paths in npm's scripts (push-uat & push-prod), deploy straight to server as follows:

To UAT: `npm run push-uat` (will upload the content built on `dist` folder - unversioned)

To Production: `npm run push-prod` (will push the content built from `dist-release` folder - versioned)

# Updates
It's recommended to do a `ng update` instead of an npm update. Can be flagged with `--dry-run` to see what's going to update

Always KEEP you angular CLI at the latest version.

# Known Limitations
If you wrap the app with ionic/cordova, and if used, pouchDB may not replicate with a remote DB on all mobile devices.

# Other stuff
- https://jsonplaceholder.typicode.com

- https://codecraft.tv/courses/angular/http/http-with-observables/