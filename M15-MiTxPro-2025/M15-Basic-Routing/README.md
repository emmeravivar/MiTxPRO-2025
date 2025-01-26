# Ejercicio 2: Rutas Básicas con React Router

Este ejercicio detalla los pasos necesarios para configurar y evolucionar el uso de React Router en una aplicación React, desde una configuración básica hasta una estructura más dinámica utilizando un archivo de rutas.

## **1. Instalar React Router Dom**

Ejecuta el siguiente comando para instalar React Router Dom en tu proyecto:

```bash
npm install react-router-dom
```

---

## **2. Usar la librería en **``

En el archivo `main.jsx`, configuramos React Router para manejar rutas básicas y añadimos componentes como `Header` y `Footer`:

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Pages/Layout/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import './index.css';
import Footer from './Pages/Layout/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
```

---

## **3. Evolucionar el uso con **``

### Modificar `main.jsx`:

Dejamos la responsabilidad de manejar las rutas a `App.jsx` y simplificamos `main.jsx`:

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

### Crear `App.jsx`:

En este archivo, configuramos las rutas internas y cargamos los componentes necesarios:

```jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
```

---

## **4. Evolucionar a un ejemplo dinámico con un archivo de rutas**

Para estructurar y manejar rutas dinámicas, podemos usar un archivo `.json` o una configuración centralizada de rutas. A continuación, mostramos cómo implementar esta evolución:

### **1. Crear el archivo **``**:**

Define las rutas de manera centralizada:

```jsx
import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default Routers;
```

### **2. Modificar **``**:**

Utiliza el archivo de rutas en `main.jsx`:

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Routers from './routes/routes';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routers} />
  </StrictMode>
);
```

### **3. Modificar **``**:**

Usa el componente `Outlet` para renderizar las rutas hijas dinámicamente:

```jsx
import { Outlet } from 'react-router-dom';
import Header from './Pages/Layout/Header';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
```

