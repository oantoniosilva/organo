import styles from './styles.module.scss';

import bannerImg from '../../assets/banner.png';

export function Banner() {
  return (
    <header>
      <div className={styles.headerContent}>
        <img src={bannerImg} alt="Banner" />
      </div>
    </header>
  )
}