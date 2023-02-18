const electron = require("electron");

const { app, BrowserWindow } = electron;

app.on("ready", () => {
  //   console.log("Up and running");
  const mainWindow = new BrowserWindow({});

  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
