'use client';
import styles from './page.module.css';
import { useState} from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNoteBox(){
    
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const router = useRouter();

    const createNote = async() => {
        await fetch('http://127.0.0.1:8090/api/collections/dbnote/records',{
           method: 'POST',
           headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                note: note
            }),
        });
        setNote('');
        setTitle('');
        router.refresh();
    };


    return(
        <form className={styles.container} onSubmit={createNote}>
            <h2 className={styles.title}>Create Note...</h2>
            <label className={styles.label}>Title</label>
            <input type="text" placeholder="type here..." className={styles.createtext} value={title} onChange={(e) => {setTitle(e.target.value)}} />
            <br></br>
            <label className={styles.label}>Note</label>
            <textarea placeholder="type here..." className={styles.createtext} value={note} onChange={(e) => {setNote(e.target.value)}} required />
            <br></br>
            <button className={styles.createbutton} type='submit'>Create</button>
        </form>
    );
}