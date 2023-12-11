export function Input({ value, setValue }) {
    const handleInput = (e) => {
        setValue(e.target.value)
    }
    return (
      <input
        onChange={handleInput}
        value={value}
      />
    )
}
