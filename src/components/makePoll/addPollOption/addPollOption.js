import { useState } from 'react';

export default function AddOption({ onAddOption }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add option"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddOption(title);
      }}>Add</button>
    </>
  )
}