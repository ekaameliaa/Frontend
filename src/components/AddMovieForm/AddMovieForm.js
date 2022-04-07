import { nanoid } from 'nanoid';
import { useState } from 'react';
import Alert from '../Alert/Alert';
import styles from './AddMovieForm.module.css'


function Form(props){

    const { movies, setMovies } = props;

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("")
    const [poster, setPoster] = useState("")
    const [film, setFilm] = useState("")

    //state untuk error title dan state
    const [isTitleError, setIsTitleErorr] = useState(false)
    const [isDateError, setIsDateErorr] = useState(false)
    const [isPosterError, setIsPosterErorr] = useState(false)
    const [isFilmError, setIsFilmErorr] = useState(false)

    function handleTitle(e){
        setTitle(e.target.value);
    }

    function handleDate(e){
        setDate(e.target.value);
    
    }

    function handlePoster(e){
        setPoster(e.target.value);
    }

    function handleFilm(e){
        setFilm(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (title === ""){
            setIsTitleErorr(true);
        }

        else if(date === ""){
            setIsDateErorr(true);
        }

        else if(poster === ""){
            setIsPosterErorr(true);
        }

        else if(film === ""){
            setIsFilmErorr(true);
        }

        else{
            const movie = {
                id: nanoid(), title: title,
                year: date, 
                type: film,
                poster: poster
            }
    
            setMovies([...movies, movie]);

            setIsTitleErorr(false);
            setIsDateErorr(false);
            setIsPosterErorr(false);
            setIsFilmErorr(false);
        }

        

    }

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
                    {/* kasih event on submit */}
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form__title}>
                            <label htmlFor="title" className={styles.form__label}>Title</label> <br />
                            <input type="text" className={styles.form__input} id="title" value={title} onChange={handleTitle}/>
                            {isTitleError && <Alert>Title Wajib diisi</Alert>}
                        </div>
                        <div>
                            <label htmlFor="date" className={styles.form__label}>Date</label><br />
                            <input 
                            type="number" 
                            className={styles.form__input} 
                            id="date"
                             value={date} 
                            onChange={handleDate} />
                            {isDateError && <Alert>Date wajib diisi</Alert>}                        
                        </div>
                        <div>
                            <label htmlFor="Url"className={styles.form__label}>Url Poster</label> <br />
                            <input type="text" className={styles.form__url} value={poster} onChange={handlePoster}  />
                            {isPosterError && <Alert>poster wajib diisi</Alert>}
                            <select value={film} className={styles.form__select} onChange={handleFilm}>
                                <option value="Action">Genre Film</option>
                                <option value="Drama">Drama</option>
                                <option value="Horor">Horor</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Romance">Romance</option>
                            </select>
                            {isFilmError && <Alert>genre wajib pilih</Alert>}
                        </div>
                        <button type="submit" className={styles.form__button}>Submit</button>
                    </form>
                </div>

            </section>

        </div>
    )
}

export default Form;