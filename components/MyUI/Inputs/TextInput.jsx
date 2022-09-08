export default function TextInput({ value, setValue, label, placeholder}) {
    return (
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
        <div className="mt-1">
          <input
            type="text"
            name={label}
            id={label}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder={placeholder}
          />
        </div>
      </div>
    )
  }