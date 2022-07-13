import styles from './styles.module.scss'

interface subscribeButtonProps{
    prideId: string
}

export function SubscribeButton(priceId :subscribeButtonProps){
    return(
        <button
            type="button"
            className={styles.subscribeButton}
        >
            Subscrube Now
        </button>
    );
}