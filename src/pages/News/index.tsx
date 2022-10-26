import styles from './News.module.scss'

const News: React.FC = () => {
  return (
    <div>
      <h2 className={styles.title}>Новости</h2>
      <p className={styles.text}>Обновление CRM до 1.2</p>
      <p className={`${styles.textBlock}${styles.text}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime quos dolorum adipisci
        atque praesentium voluptates eveniet rem ipsum sunt, totam minus et, culpa odio molestiae ab
        tempore. Dicta at eveniet, dolor magnam excepturi quisquam exercitationem omnis,
        voluptatibus earum perspiciatis modi esse harum? Atque consectetur voluptatum quibusdam. Et,
        illum fugit?
      </p>
      <p className={`${styles.textBlock}${styles.text}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, laboriosam id? Neque autem
        quibusdam a, animi quaerat id! Voluptatibus obcaecati dolore eius soluta voluptas
        perspiciatis ea vel dicta, ex nostrum, asperiores deserunt molestiae quae labore aut
        consequatur, incidunt cum ratione cumque accusantium. Temporibus, optio quis dolorum fugit
        facere quasi
      </p>
      <p className={`${styles.textBlock}${styles.text}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, laboriosam id? Neque autem
        quibusdam a, animi quaerat id! Voluptatibus obcaecati dolore eius soluta voluptas
        perspiciatis ea vel dicta, ex nostrum, asperiores deserunt molestiae quae labore aut
        consequatur, incidunt cum ratione cumque accusantium. Temporibus, optio quis dolorum fugit
        facere quasi
      </p>
      <p className={`${styles.textBlock}${styles.text}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, laboriosam id? Neque autem
        quibusdam a, animi quaerat id! Voluptatibus obcaecati dolore eius soluta voluptas
        perspiciatis ea vel dicta, ex nostrum, asperiores deserunt molestiae quae labore aut
        consequatur, incidunt cum ratione cumque accusantium. Temporibus, optio quis dolorum fugit
        facere quasi magnam eum ex vel natus, animi voluptatem minima est veritatis debitis iusto
        dolore ratione
      </p>
    </div>
  )
}

export default News
