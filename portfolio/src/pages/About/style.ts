// components/About/style.ts
import type { CSSProperties } from 'react';

interface Styles {
  sectionAbout: CSSProperties;
  sectionAboutContent: CSSProperties;
  layoutContainer: CSSProperties;
  aboutContent: CSSProperties;
  aboutImage: CSSProperties;
  profileImage: CSSProperties;
  aboutText: CSSProperties;
  sectionLabel: CSSProperties;
  title: CSSProperties;
  description: CSSProperties;
  downloadBtn: CSSProperties;
}

export const styles: Styles = {
  sectionAbout: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },

  sectionAboutContent: {
    padding: "clamp(40px, 8vw, 80px) 0",
    flex: 1,
  },

  layoutContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },

  aboutContent: {
    display: "grid",
    gridTemplateColumns: "minmax(250px, 1fr) minmax(300px, 2fr)",
    gap: "clamp(30px, 5vw, 60px)",
    alignItems: "center",
  },

  aboutImage: {
    display: "flex",
    justifyContent: "center",
  },

  profileImage: {
    maxWidth: "100%",
    width: "min(300px, 100%)",
    height: "auto",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(199, 199, 199, 0.1)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    filter: "grayscale(0.2)",
  },

  aboutText: {
    // Container para o texto
  },

  sectionLabel: {
    color: "hsl(199, 100%, 50%)",
    fontWeight: 600,
    letterSpacing: "3px",
    textTransform: "uppercase",
    marginBottom: "12px",
    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
    display: "inline-block",
    position: "relative",
  },

  title: {
    color: "hsl(199, 100%, 50%)",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
    fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
    fontWeight: 700,
    marginBottom: "24px",
    lineHeight: 1.2,
    textTransform: "lowercase",
  },

  description: {
    color: "var(--text-color)",
    lineHeight: 1.7,
    marginBottom: "32px",
  },

  downloadBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 28px",
    border: "2px solid var(--text-color)",
    borderRadius: "8px",
    color: "var(--text-color)",
    textDecoration: "none",
    fontWeight: 600,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    background: "transparent",
  },
};