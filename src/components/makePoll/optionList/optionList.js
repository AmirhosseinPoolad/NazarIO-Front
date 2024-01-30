import { useState } from 'react';

export default function OptionList({
    options,
    onChangeOptions,
    onDeleteOptions
}) {
    return (
        <ul>
            {options.map(option => (
                <li key={option.id}>
                    <Option
                        option={option}
                        onChange={onChangeOptions}
                        onDelete={onDeleteOptions}
                    />
                </li>
            ))}
        </ul>
    );
}

function Option({ option, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let optionContent;
    if (isEditing) {
        optionContent = (
            <>
                <input
                    value={option.title}
                    onChange={e => {
                        onChange({
                            ...option,
                            title: e.target.value
                        });
                    }} />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        optionContent = (
            <>
                {option.title}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label>
            {optionContent}
            <button onClick={() => onDelete(option.id)}>
                Delete
            </button>
        </label>
    );
}
