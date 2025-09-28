import type { CSSProperties } from 'react';

interface Styles {
  hero: CSSProperties;
  container: CSSProperties;
  content: CSSProperties;
  title: CSSProperties;
  titleHighlight: CSSProperties;
  subtitle: CSSProperties;
  links: CSSProperties;
  linkItem: CSSProperties;
  link: CSSProperties;
  icon: CSSProperties;
}

export const styles: Styles = {
  hero: {
    padding: "clamp(60px, 15vh, 120px) 0",
    background: "var(--bg-color)",
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },

  container: {
    padding: "0 clamp(20px, 4vw, 40px)",
    margin: "0 auto",
    maxWidth: "min(1150px, 90vw)",
  },

  content: {
    textAlign: "center",
  },

  title: {
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "1.5rem",
    color: "var(--text-color)",
  },

  titleHighlight: {
    color: "hsl(199, 100%, 50%)",
    display: "block",
    fontWeight: 800,
  },

  subtitle: {
    fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
    color: "var(--text-color)",
    opacity: 0.9,
    marginBottom: "3rem",
    lineHeight: 1.4,
  },

  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    padding: "0",
    margin: "0",
  },

  linkItem: {
    listStyle: "none",
  },

  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 28px",
    background: "transparent",
    border: "2px solid hsl(199, 100%, 50%)",
    borderRadius: "8px",
    color: "hsl(199, 100%, 50%)",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  },

  icon: {
    transition: "transform 0.3s ease",
  },
};