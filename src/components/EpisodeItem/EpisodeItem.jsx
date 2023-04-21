import { Title } from "../../shared";
import styles from "./EpisodeItem.module.scss";

export const EpisodeItem = ({ title, episode, url, image }) => {
  return (
    <div style={ styles.item }>
        <div>
        <img
            className={ styles.image }
            src={image}
            alt={title}
        />
        <Title title={episode} color={"#CCC"} size={"1.4"} />
        <h4>
          {title}
        </h4>
        </div>
    </div>
  )
}
