import styles from '../../styles/Navbar.module.css';
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <p className={styles.paragraph}>
        <b>project becomes read-only! To be able to return to your work,</b>{' '}
        <span className={styles.span1}>sign in</span> or{' '}
        <span className={styles.span2}>log in to another account.</span>
      </p>
    </nav>
  );
};

export default Navbar;
