import styles from '../page.module.css';
async function retrieve(id: string) {
    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/dbnote/records/${id}`,
      {
        next: { revalidate: 10 },
      }
    );
    const data = await res.json();
    return data;
  }
  

export default async function Note({params}: any) {
    let document = await retrieve(params.id);
    const {title, note} = document || {};
    return (
        <div className={styles['display-each-notes']}>
            <h2 className={styles['note-title']}>{title}</h2>
            <p className={styles['note']}>{note}</p>
        </div>
    );
}