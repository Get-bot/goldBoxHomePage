import styles from "./footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <a className={styles.link} href="#">
        boneTreeUp {new Date().getFullYear()}
      </a>
    </footer>
  );
};

export default Footer;
