// pages/index.js
import { useEffect } from 'react'
import Head from 'next/head'
import '../styles/globals.css'

export default function Home() {
  useEffect(() => {
    // Update year
    const yearSpan = document.getElementById('current-year')
    yearSpan.textContent = new Date().getFullYear()

    // Initialize particles
    tsParticles.load({
      id: "tsparticles",
      options: {
        background: {
          color: "#000"
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse"
            },
            onHover: {
              enable: true,
              mode: "bubble"
            }
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0,
              size: 0,
              speed: 3
            },
            repulse: {
              distance: 400,
              duration: 0.4
            }
          }
        },
        particles: {
          color: { value: "#ffffff" },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: true,
            speed: 0.3
          },
          number: {
            density: {
              enable: true
            },
            value: 600
          },
          opacity: {
            animation: {
              enable: true,
              speed: 5
            },
            value: { min: 0.3, max: 0.6 }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 1
          }
        }
      }
    })
  }, [])

  return (
    <>
      <Head>
        <title>DialogDot | Education, Explanation</title>
        <meta name="description" content="DialogDot official website" />
        <link rel="icon" type="image/png" href="/assets/DialogDot-favicon.png" />
        <script src="https://cdn.jsdelivr.net/npm/tsparticles@3.0.2/tsparticles.bundle.min.js" />
      </Head>

      <div id="tsparticles"></div>
      
      <div className="content">
        <div className="container">
          <div className="left-child">
            <span id="animated-text">DialogDot</span>
          </div>
          <div className="right-child">
            <div className="rotate-gradient-container">
              <div className="rotate-gradient"></div>
            </div>
            <div className="svg-shape"></div>
          </div>
        </div>

        <div className="social-container">
          <a href="mailto:info@dialogdot.com" className="social-icon mail">
            <img src="/assets/ic-mail.svg" alt="Mail Icon" />
          </a>
          <a href="https://www.youtube.com/@DialogDot" target="_blank" className="social-icon youtube">
            <img src="/assets/ic-youtube.svg" alt="YouTube Icon" />
          </a>
          <a href="https://www.instagram.com/dialogdot" target="_blank" className="social-icon instagram">
            <img src="/assets/ic-instagram.svg" alt="Instagram Icon" />
          </a>
          <a href="https://x.com/DialogDot" target="_blank" className="social-icon x">
            <img src="/assets/ic-x.svg" alt="X Icon" />
          </a>
        </div>
      </div>

      <footer>
        <p><span id="current-year"></span> © DialogDot. All rights reserved.</p>
      </footer>
    </>
  )
}

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// package.json
{
  "name": "dialogdot-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "eslint": "^8.56.0",
    "eslint-config-next": "14.1.0"
  }
}