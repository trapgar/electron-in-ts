import { BrowserWindow } from 'electron';
import path from 'path';

type MainWindowParams = {
  filename: string;
  devServerURL?: string;
}

export default class MainWindow {
  constructor() {
    console.log('MainWindow initialized');
  }

  static create({ filename, devServerURL }: MainWindowParams): BrowserWindow {
    // Create the browser window.
    const win = new BrowserWindow({
      fullscreen: true,
      fullscreenable: true,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
    });

    // and load the index.html of the app.
    if (devServerURL)
      win.loadURL(devServerURL);
    else {
      win.loadFile(
        path.join(__dirname, `../renderer/${filename}/index.html`),
      );
    }

    // Open the DevTools.
    if (process.env.NODE_ENV === 'development')
      win.webContents.openDevTools();

    return win;
  }
}
