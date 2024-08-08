import { HtmlHTMLAttributes } from 'react'

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>

function Button({ children }: ButtonProps) {
  return (
    <button className="bg-spamBlue text-spamYellow hover:bg-spamYellow hover:text-spamBlue m-10 rounded px-4 py-2">
      {children}
    </button>
  )
}

export default Button
