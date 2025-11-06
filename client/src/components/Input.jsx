import React from 'react'

export default function Input({ placeholder, handleInput, name, className }) {
    return (
        <div>
            <input name={name} onChange={handleInput} placeholder={placeholder} className={className} />
        </div>
    )
}
