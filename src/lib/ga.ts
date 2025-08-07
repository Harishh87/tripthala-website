// src/lib/ga.ts
import ReactGA from 'react-ga4'

export const initGA = () => {
  ReactGA.initialize('G-ENY4SZGGQF') // replace with your ID
}

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path })
}