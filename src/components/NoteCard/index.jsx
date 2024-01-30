import { useState } from 'react';
import { SAVED_NOTE_KEY } from '../../utils/constants';
import styles from './styles.module.css';

const NoteCard = () => {
  const [noteData, setNoteData] = useState(
    JSON.parse(localStorage.getItem(SAVED_NOTE_KEY))
  );
  const handleNoteChange = (e) => {
    const data = e.target.value;
    setNoteData(data);
    localStorage.setItem(SAVED_NOTE_KEY, JSON.stringify(data));
  };

  return (
    <div className={styles.noteContainer}>
      <h1 className={styles.noteTitle}>All notes</h1>
      <textarea
        value={noteData}
        onChange={handleNoteChange}
        className={styles.noteTextArea}
      />
    </div>
  );
};

export default NoteCard;
