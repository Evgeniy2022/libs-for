import { useEffect, useRef, useId } from "react";

function App() {
  const unmountRef = useRef<() => void | undefined>();
  const elementId = useId()

  const loadAndRenderMicroFrontend = async () => {
    const { mount } = await import('http://localhost:8080/lib/myApp.js');

    // Получаем контейнер
    const container = document.getElementById(elementId);
    if (container) {
      unmountRef.current = mount(container);
    }
  };

  useEffect(() => {
    return () => {
      if (unmountRef.current) {
        unmountRef.current();
      }
    };
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Microfrontend Host</h1>
      <button onClick={loadAndRenderMicroFrontend}>Load Microfrontend</button>
      <div
        id={elementId}
        style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}
      />
    </div>
  );
}

export default App;
