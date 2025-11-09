# ![favicon](./assets/favicon.png) electron-in-ts

### Available Scripts
- `npm start` -
  Launches the app in dev mode with the electron binary in the given directory (defaults to `.`).

  If you type `rs` (and hit enter) in the same terminal where you ran the start command, the running app will be terminated and restarted.\

  See the section about [start](https://www.electronforge.io/cli#start) for more information.

- `npm package` -
  Packages the application into a platform-specific executable bundle and puts the result in a folder.
  Note that this does not make a distributable format. To make proper distributables, use the `make` command.

  See the section about [packaging](https://www.electronforge.io/cli#package) for more information.

- `npm make` -
  Makes distributables for the application based on the [Forge config](./forge.config.ts) and the parameters passed in.

  See the section about [making](https://www.electronforge.io/cli#make) for more information.

- `npm publish` -
  Attempts to package, make, and publish the Forge application to the publish targets defined in the [Forge config](./forge.config.ts).

  If you want to verify artifacts from the `make` step before publishing, you can use the `--dry-run` flag.

  See the section about [publishing](https://www.electronforge.io/cli#publish) for more information.

- `npm lint` -
  Runs the linter (eslint) against the repository to detect potentials issues and formatting discrepancies.
