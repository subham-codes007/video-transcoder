import { useState } from "react";

import styles from './fileUpload.module.css';

const format = ['mp4', 'm4v', 'mov', 'mpg', 'mpeg', 'avi', 'mkv', 'wmv', 'flv', 'webm', 'vob', 'evo', 'mts', 'm2ts'];

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [error, setError] = useState({
        state: false,
        message: ''
    });
    const [uploading, setUploading] = useState(false);

    const changeHandler = (event) => {
        const ext = event.target.files[0].name.lastIndexOf('.');
        if (format.includes(event.target.files[0].name.slice(ext + 1).toLowerCase())) {
            setError({
                state: false,
                message: ''
            })
            setFile(event.target.files[0]);
        }
        else {
            setError({
                state: true,
                message: 'Unsopported file format'
            })
        }
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        setUploading(true);
        //axios stuff
        setUploading(false);
    }

    return (
        <form className={styles.card}>
            {error.state && <p className={styles.error}>{error.message}</p>}
            <label for='upload'>Upload video :</label>
            <input type="file" name="upload" id='upload' className={styles.btn} onChange={changeHandler} />
            <button onClick={handleSubmission} className={styles.btn}>Submit</button>
        </form>
    )
}

export default FileUpload;