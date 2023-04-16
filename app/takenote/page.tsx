import styles from './page.module.css';
import CreateNoteBox from './(createNote)';
import Link from 'next/link';

  

async function retrieveNotes() {
    const response = await fetch ('http://127.0.0.1:8090/api/collections/dbnote/records?page=1&perPage=5&sort=-updated', {cache: 'no-store'},);
    const data = await response.json();
    return data?.items as any[];
}



export default async function DisplayNotesBox() {
    let documents = await retrieveNotes();
    return (
        <>
        <CreateNoteBox />
        <div className={styles['display-notes-container']}>
        {documents?.map((doc) => {
            return <EachNote key={doc.id} notes={doc}/>
            })}
        </div>
        </>
    );
}


export function EachNote({notes} : any){
    const {id, title, note} = notes || {};
    return (
        <Link href={`/takenote/${id}`} className={styles['note-link']}>
        <div className={styles['display-each-notes']}>
            <h2 className={styles['note-title']}>{title}</h2>
            <p className={styles['note']}>{note}</p>
        </div>
        </Link>
    );
}