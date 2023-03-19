import styles from "./EpisodeItem.module.scss";

export const EpisodeItem = ({ title, episode, url, image }) => {
  return (
    <div style={ styles.item }>
        <img
            className={ styles.image }
            src={image}
            alt={title}
        />
    </div>
  )
}
