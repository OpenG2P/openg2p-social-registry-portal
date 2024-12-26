'use client';
import React from 'react';
import Image from 'next/image';

const LoginPage: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
      margin: 0,
    }}>
     
      <div style={{
        display: 'flex',
        width: '85%',
        maxWidth: '950px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
      }}>
       
        <div style={{
          flex: 1,
          backgroundColor: '#082246',
          color: '#fff',
          fontWeight: 'lighter',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '30px',
          position: 'relative', 
        }}>
         
          <Image
  src="/welcome.png" 
  alt="Welcome"
  width={200} 
  height={200} 
  style={{
    position: 'absolute',
    top: '1px',
    left: '10px', 
    zIndex: 1, 
    opacity: 0.2, 
  }}
/>

          
          <h3 style={{ fontSize: '36px', fontWeight: 'light', marginBottom: '10px' }}>
            Welcome to
          </h3>
          <p style={{ fontSize: '24px', fontWeight: 'light', marginBottom: '10px' }}>
            Self Registration Portal
          </p>
          <p style={{ fontSize: '20px', fontWeight: 'light', color:'#f07b1b' }}>
            by OpenG2P
          </p>

          
          <Image
            src="/welcome.png" 
            alt="Welcome"
            width={200} 
            height={200} 
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px', 
              zIndex: 1, 
              opacity: 0.2, 
            }}
          />
        </div>

    
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '30px',
          backgroundColor: '#f4f4f4',
        }}>
         
          <div style={{ marginBottom: '20px' }}>
            <Image
              src="/logo.png" 
              alt="OpenG2P Logo"
              width={150}
              height={150}
            />
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
            Self Registration Portal
          </h2>
          <p style={{ fontSize: '16px', fontWeight: '400', color: '#555', marginBottom: '20px' }}>
            by OpenG2P
          </p>

          {/* Form */}
          <form style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '400px',
          }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#555' }} htmlFor="emailOrPhone">
                Email or Phone
              </label>
              <input
                id="emailOrPhone"
                type="text"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                }}
                placeholder="Enter email or phone"
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#555' }} htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                }}
                placeholder="Enter password"
              />
              <a href="#" style={{ display: 'block', marginTop: '5px', fontSize: '14px', color: '#007BFF', textAlign: 'right' }}>
                Reset Password
              </a>
            </div>

            <button
              type="button"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#f07b1b',
                color: '#fff',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                marginBottom: '10px',
              }}
              onClick={() => {
                window.location.href = '/dashboard'; 
              }}
            >
              LOGIN
            </button>

            <div style={{
              textAlign: 'center',
              fontSize: '14px',
              color: '#555',
              margin: '10px 0',
              fontWeight: 'bold',
            }}>
              OR
            </div>

            <button
              type="button"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#fff',
                color: '#000',
                fontWeight: 'bold',
                border: '1px solid #ddd',
                borderRadius: '8px',
                cursor: 'pointer',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src="/esignet.png"
                alt="eSignet Logo"
                width={20}
                height={20}
                style={{ marginRight: '10px' }}
              />
              Login with eSignet
            </button>

            <button
              type="button"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#fff',
                color: '#000',
                fontWeight: 'bold',
                border: '1px solid #ddd',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src="/keycloak.png" 
                alt="Keycloak Logo"
                width={30}
                height={20}
                style={{ marginRight: '10px' }}
              />
              Login with Keycloak
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
