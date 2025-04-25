import React from 'react';
import Layout from './components/Layout';
import BrainScanAnalyzer from './pages/BrainScanAnalyzer';
import About from './pages/About';

function App() {
  const path = window.location.pathname;

  return (
    <Layout>
      {path === '/about' ? <About /> : <BrainScanAnalyzer />}
    </Layout>
  );
}

export default App;