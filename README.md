# React Gifs App

Mini app hecha en React que permite buscar GIFs animados y mostrarlos en una grilla responsive.

---

## Funcionalidad

- Barra de búsqueda para escribir cualquier palabra clave.
- Peticiones a la API de GIPHY para traer GIFs relacionados.
- Muestra los resultados en una grilla de tarjetas (cards).
- Interfaz simple, rápida y responsive.

---

##  Tecnologías y conceptos usados

- **React** (Vite)
- **Custom Hooks** para encapsular lógica de búsqueda.
- **`useEffect`** para controlar los llamados a la API.
- **`fetch` API** para consumir GIPHY.
- **Props** para pasar datos entre componentes.
- **Estructura de carpetas organizada** para escalar fácil.
- **Diseño modular** y reutilizable.
- **`JEST & React Testign Library`** testing unitario e integración.
- **Git & Github** control de versiones.


---

## Uso

1. Clonar el repo:

```bash
git clone https://github.com/ClavijoPedro/react-gifs-app.git
cd react-gifs-app
```

2. Instalar las dependencias:

```
npm install

```

3. Ejecutar la app en desarrollo:
```
npm run dev
```
4. Ejecutar Tests
```
npm run test
```

---
## API utilizada
- GIPHY Developers API
- Requiere una API Key gratuita.

### Obtener la API key
1. Registrate o logueate en [Giphy Developers](https://developers.giphy.com/).
2. Crea una nueva aplicación para obtener tu API Key gratuita.

```env
//En la raiz del proyecto crea un archivo .env con la variable:

VITE_GIPHY_API_KEY=your-ghipy-api-key

``` 
___

## Demo
[Ver deploy](https://reactgifs-app.netlify.app)