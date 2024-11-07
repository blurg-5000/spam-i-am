import { useProtein } from '../../ProteinContext'

function ToggleButton() {
  const { isTofu, toggleProtein } = useProtein()

  return (
    <div className="flex items-center">
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          checked={isTofu}
          onChange={toggleProtein} // Call `toggleProtein` directly
          className="peer sr-only"
        />
        <div className="h-6 w-11 rounded-full bg-gray-300 transition-colors peer-checked:bg-blue-600"></div>
        <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full border bg-white transition-transform peer-checked:translate-x-5"></div>
      </label>
      <span className="ml-3 text-sm font-medium text-gray-700">
        {isTofu ? 'tofu' : 'spam'}
      </span>
    </div>
  )
}

export default ToggleButton
