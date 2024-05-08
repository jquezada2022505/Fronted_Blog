import React from 'react';
import Header from './assets/Header';
import BlogPost from './assets/BlogPost';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BlogPost title="Bienvenido a mi Blog" content="Este es el primer post del blog de Josué." />
        <BlogPost title="Segundo Post" content="Aquí continúa el contenido del blog de Josué." />
      </main>
    </div>
  );
}

export default App;