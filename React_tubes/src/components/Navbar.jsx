import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {

    const handleSignIn = () => {
        // Implement navigation to Sign In page
        window.location.href = "/signin";
    }

    const handleHomePage = () => {
        // Implement navigation to Sign In page
        window.location.href = "/";
    }

    return (
        <header className={styles.navbar}>
            <div className={styles.logoArea}>
                <div className={styles.square}></div>
                <span className={styles.logo}>Hotello</span>
            </div>

                <nav className={styles.navLinks}>
                    <a class={styles.navButton} onClick={handleHomePage}>Explore</a>
                    <a class={styles.navButton}>Stays</a>
                    <a class={styles.navButton}>Attractions</a>
                    <a class={styles.navButton}>Experiences</a>
                    <button className={styles.listBtn}>List your place</button>
                    <button className={styles.signInBtn} onClick={handleSignIn}>Sign In</button>
                </nav>
        </header>
    );
}