import { useState } from 'react';
import AddPollOption from './addPollOption/addPollOption.js';
import OptionList from './optionList/optionList.js';

let nextId = 1;
const initialOptions = [
    { id: 0, title: 'Buy milk' },
]; 

export default function MakePoll() {
    const [options, setOptions] = useState(initialOptions);

    function handleAddOption(title) {
        setOptions([
            ...options,
            {
                id: nextId++,
                title: title,
            }
        ]);
    }

    function handleChangeOptions(nextOption) {
        setOptions(options.map(t => {
            if (t.id === nextOption.id) {
                return nextOption;
            } else {
                return t;
            }
        }));
    }

    function handleDeleteOption(optionId) {
        setOptions(
            options.filter(t => t.id !== optionId)
        );
    }

    function makePollSubmit() {
        //TODO: Request make poll api
    }

    return(
    <>
            <Title initTitle={"Placeholder Title"}/>
            <br/>
            <AddPollOption
                onAddOption={handleAddOption}
            />
            <OptionList
                options={options}
                onChangeOptions={handleChangeOptions}
                onDeleteOptions={handleDeleteOption}
            />
            <button onClick={makePollSubmit}>Submit</button>
    </>
  );
}

function Title({ initTitle}) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(initTitle)
    let optionContent;
    if (isEditing) {
      optionContent = (
        <>
          <input
            value={title}
            onChange={e => {
                setTitle(e.target.value)
                }
            } />
          <button onClick={() => setIsEditing(false)}>
            Save
          </button>
        </>
      );
    } else {
      optionContent = (
        <>
          {title}
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      );
    }
    return (
      <label>
        {optionContent}
      </label>
    );
  }