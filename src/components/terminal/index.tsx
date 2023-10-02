import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { WebLinksAddon } from 'xterm-addon-web-links';
import 'xterm/css/xterm.css';

function TerminalComponent() {
  const terminalRef = useRef(null);
  const terminalInstance = useRef<Terminal | null>(null);

  useEffect(() => {
    const terminal = new Terminal( {
      theme: {
        background: '#1e1e1e',
        foreground: '#ffffff',
      },
    });
    terminal.loadAddon(new WebLinksAddon());

    // Conecta la terminal al elemento DOM si el ref existe
    if (terminalRef.current) {
      terminal.open(terminalRef.current);

      // Ejemplo de escritura en la terminal
      terminal.writeln('0');
      terminal.writeln('1');


      // Maneja eventos de entrada del usuario y envía comandos al servidor si es necesario
      // Por ejemplo, manejar la pulsación de la tecla "Enter" y enviar el comando al servidor

      // Limpia la terminal si es necesario
      // terminal.clear();

      // Puedes ajustar el estilo y las opciones de la terminal aquí

      // Almacena la instancia de la terminal para poder limpiarla más tarde
      terminalInstance.current = terminal;
    }

    return () => {
      // Detén y destruye la terminal cuando el componente se desmonte
      if (terminalInstance.current) {
        terminalInstance.current.dispose();
      }
    };
  }, []);

  return <div ref={terminalRef} style={{ width: '100%', height: '20vh'}} />;
}

export default TerminalComponent;
