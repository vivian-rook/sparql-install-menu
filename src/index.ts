import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

/**
 * Initialization data for the main menu example.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'main-menu',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    const { commands } = app;

    // Add a command
    const command = 'install-sparql:main-menu';
    commands.addCommand(command, {
      label: 'Install SPARQL',
      caption: 'Install SPARQL',
      execute: (args: any) => {
        console.log(
          `jlab-examples:main-menu has been called ${args['origin']}.`
        );
        window.alert(
          `jlab-examples:main-menu has been called ${args['origin']}.`
        );
      },
    });

    // Add the command to the command palette
    const category = 'Extension Examples';
    palette.addItem({
      command,
      category,
      args: { origin: 'from the palette' },
    });
  },
};

export default extension;
