import styles from './AddMovieForm.module.css'


function Form(){
    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                <img
                    className={styles.form__image}
                    src="https://picsum.photos/536/354"
                    alt="placeholder"/>
                </div>
                <div className={styles.form__right}>
                    <h1 className={styles.form__text}>Add Movie</h1>
                    <form>
                        <div className={styles.form__title}>
                            <label htmlFor="title" className={styles.form__label}>Title</label> <br />
                            <input type="text" className={styles.form__input} id="title"/>
                        </div>
                        <div>
                            <label htmlFor="year" className={styles.form__label}>Year</label><br />
                            <input type="text" className={styles.form__input} id="year"/>
                        </div>
                        <button type="submit" className={styles.form__button}>Submit</button>
                    </form>
                </div>

            </section>

        </div>
    )
}

export default Form;