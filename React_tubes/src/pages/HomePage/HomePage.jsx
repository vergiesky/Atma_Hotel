import styles from "./HomePage.module.css";

export default function HomePage() {
  const featured = [
    {
      title: "The Grand Oasis",
      subtitle: "Luxury in the city",
      img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/hotelier-images/48/52/087dbcb21d15f09a40739b2214904e67e02ed34c52a93e1a0c005c800054.jpeg"
    },
    {
      title: "Coastal Retreat",
      subtitle: "Relax by the sea",
      img: "https://glenburn.co.nz/wp-content/uploads/2022/06/Glenburn-Coastal-Retreat-288.jpg"
    },
    {
      title: "Mountain Haven",
      subtitle: "Escape to the mountains",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    }
  ];

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1560347876-aeef00ee58a1"
          className={styles.heroImg}
        />

        <div className={styles.heroCenter}>
          <h1>Discover your next stay</h1>
          <p>Search for hotels, resorts, and more</p>
        </div>
      </section>

      {/* FEATURED */}
      <section className={styles.section}>
        <h2>Featured stays</h2>

        <div className={styles.featureGrid}>
          {featured.map((item) => (
            <div className={styles.featureCard} key={item.title}>
              <img src={item.img} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className={styles.section}>
        <h2>Popular destinations</h2>

        <div className={styles.destGrid}>
          <div className={styles.destCard} onGotPointerCapture={styles.destInCard}>
            <img src="https://a.storyblok.com/f/239725/4096x2731/c3337fde3a/01_fr_par_hero_eiffeltower.png/m/3840x2560/filters:quality(70)" />
            <span>Paris</span>
          </div>

          <div className={styles.destCard} onMouseEnter={styles.destInCard}>
            <img src="https://content.fun-japan.jp/renewal-prod/cms/articles/content/8801-1jpg_2020-10-19-12-35-24.jpg" />
            <span>Tokyo</span>
          </div>

          <div className={styles.destCard}>
            <img src="https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg" />
            <span>New York</span>
          </div>

          <div className={styles.destCard}>
            <img src="https://asset.kompas.com/crops/pf3-IXdvShqzIQUoCLqGt4QNGnk=/0x0:2400x1600/1200x800/data/photo/2022/03/31/62455e591e7de.jpg" />
            <span>London</span>
          </div>
        </div>
      </section>
    </div>
  );
}
