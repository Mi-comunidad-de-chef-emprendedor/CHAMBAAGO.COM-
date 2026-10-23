
import React from 'react';

export default function Page() {
  return (
    <div style={{ backgroundColor: '#f4f4f4', color: '#333', fontFamily: 'Arial, sans-serif', minHeight: '100vh', margin: 0, padding: 0 }}>
      {/* Header */}
      <header style={{ backgroundColor: 'white', padding: '20px 0', borderBottom: '1px solid #ddd' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '30px', height: '30px', backgroundColor: '#00bcd4', borderRadius: '5px' }}></div>
            <span style={{ color: '#00bcd4', fontSize: '24px', fontWeight: 'bold' }}>CHAMBAAGO</span>
          </div>
          <nav>
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
              <li><a href="#" style={{ color: '#666', fontWeight: 'bold', textDecoration: 'none' }}>Inicio</a></li>
              <li><a href="#" style={{ color: '#666', fontWeight: 'bold', textDecoration: 'none' }}>Servicios</a></li>
              <li><a href="#" style={{ color: '#666', fontWeight: 'bold', textDecoration: 'none' }}>Cómo Funciona</a></li>
              <li><a href="#" style={{ color: '#333', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid #333' }}>Sobre Nosotros</a></li>
              <li><a href="#" style={{ color: '#666', fontWeight: 'bold', textDecoration: 'none' }}>Contacto</a></li>
            </ul>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '5px 10px', borderRadius: '5px', border: '1px solid #ddd' }}>
              <input type="text" placeholder="Buscar" style={{ border: 'none', outline: 'none', padding: '5px' }} />
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🔍</button>
            </div>
            <div style={{ width: '30px', height: '30px', backgroundColor: '#ddd', borderRadius: '50%' }}></div>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {/* Sección Hero */}
        <section style={{ backgroundColor: '#f4f4f4', padding: '50px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'start' }}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ color: '#333', fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>CHAMBAAGO: Expertos Reales, Soluciones a Tu Medida.</h1>
              <p style={{ color: '#666', fontSize: '16px', marginBottom: '30px' }}>Conoce a los profesionales certificados que simplifican tu vida.</p>
              <div style={{ marginBottom: '20px' }}>
                <img src="https://unsplash.com" alt="Profesionales" style={{ borderRadius: '10px', width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
              </div>
              <button style={{ backgroundColor: '#00bcd4', color: 'white', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Ver Perfiles Individuales</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ backgroundColor: '#262626', color: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: 0, marginBottom: '15px', textTransform: 'uppercase', color: '#00bcd4' }}>Nuestra Misión</h2>
                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>Nuestra misión es empoderar a los profesionales locales y facilitar a los clientes el acceso a servicios confiables, seguros y de alta calidad, creando conexiones valiosas.</p>
              </div>
              <div style={{ backgroundColor: '#262626', color: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: 0, marginBottom: '15px', textTransform: 'uppercase', color: '#00bcd4' }}>Nuestra Visión</h2>
                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>Nuestra visión es ser la plataforma de servicios locales líder y más trusted de la región, innovando en cómo las personas encuentran expertos y transformando vidas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rejilla de Perfiles */}
        <section style={{ padding: '50px 0', backgroundColor: 'white', borderRadius: '10px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', padding: '0 20px' }}>
            <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ marginBottom: '15px' }}><img src="https://unsplash.com" alt="Ana" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} /></div>
              <h3 style={{ fontSize: '16px', margin: '0 0 5px 0' }}>Ana López</h3>
              <div style={{ color: '#00bcd4', fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Limpieza Profunda</div>
              <p style={{ fontSize: '12px', color: '#888', margin: 0, lineHeight: '1.4' }}>Conoce a los profesionales certificados que simplifican tu vida.</p>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ marginBottom: '15px' }}><img src="https://unsplash.com" alt="Luis" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} /></div>
              <h3 style={{ fontSize: '16px', margin: '0 0 5px 0' }}>Luis Martínez</h3>
              <div style={{ color: '#00bcd4', fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Mecánico Experto</div>
              <p style={{ fontSize: '12px', color: '#888', margin: 0, lineHeight: '1.4' }}>Profesionales verificados para resolver cualquier problema técnico.</p>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ marginBottom: '15px' }}><img src="https://unsplash.com" alt="Isabel" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} /></div>
              <h3 style={{ fontSize: '16px', margin: '0 0 5px 0' }}>Isabel Silva</h3>
              <div style={{ color: '#00bcd4', fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Soporte Técnico</div>
              <p style={{ fontSize: '12px', color: '#888', margin: 0, lineHeight: '1.4' }}>Conexiones eficientes para mantener tus equipos al día.</p>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ marginBottom: '15px' }}><img src="https://unsplash.com" alt="David" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} /></div>
              <h3 style={{ fontSize: '16px', margin: '0 0 5px 0' }}>David Roca</h3>
              <div style={{ color: '#00bcd4', fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Entrega Rápida</div>
              <p style={{ fontSize: '12px', color: '#888', margin: 0, lineHeight: '1.4' }}>Conductor profesional y entregas seguras garantizadas.</p>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ marginBottom: '15px' }}><img src="https://unsplash.com" alt="Jorge" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} /></div>
              <h3 style={{ fontSize: '16px', margin: '0 0 5px 0' }}>Jorge Ramos</h3>
              <div style={{ color: '#00bcd4', fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Jardinería</div>
              <p style={{ fontSize: '12px', color: '#888', margin: 0, lineHeight: '1.4' }}>Especialista en mantenimiento de áreas verdes del hogar.</p>
            </div>
          </div>
        </section>

        <section style={{ textAlign: 'center', padding: '50px 0', backgroundColor: '#e9e9e9', marginTop: '20px', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>¿Quieres Unirte?</h2>
          <button style={{ backgroundColor: '#4a4a4a', color: 'white', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Ver Oportunidades</button>
        </section>
      </main>

      <footer style={{ backgroundColor: '#262626', color: 'white', padding: '40px 0', marginTop: '40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '40px' }}>
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase', color: '#00bcd4' }}>Inicio</h4>

