import styles from "./header.module.css";
import Navbar
 from "./navbar";
const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>골드박스 웹 홍보 페이지</h1>
      <Navbar/>
    </header>
  );
};

export default Header;
