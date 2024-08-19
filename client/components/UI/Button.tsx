import { HtmlHTMLAttributes } from 'react'

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="m-10 rounded bg-spamBlue px-4 py-2 text-spamYellow hover:bg-spamYellow hover:text-spamBlue"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
