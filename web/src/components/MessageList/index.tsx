import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="doWhile 2021"/>

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de participar deste evento, muito messa como tudo o que a Rocketseat faz!!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="http://github.com/ZaninDe.png" alt="Gabriel Zanin"/>
            </div>
            <span>Gabriel Zanin</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de participar deste evento, muito messa como tudo o que a Rocketseat faz!!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="http://github.com/ZaninDe.png" alt="Gabriel Zanin"/>
            </div>
            <span>Gabriel Zanin</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de participar deste evento, muito messa como tudo o que a Rocketseat faz!!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="http://github.com/ZaninDe.png" alt="Gabriel Zanin"/>
            </div>
            <span>Gabriel Zanin</span>
          </div>
        </li>
      </ul>
    </div>
  )
}