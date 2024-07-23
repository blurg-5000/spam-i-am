import { NavLink } from 'react-router-dom'

function Header() {
  const menuItems = [
    { title: 'About', link: './about' },
    { title: 'Games', link: './games' },
    { title: 'Quiz', link: './quiz' },
  ]

  return (
    <header className="bg-spamYellow px-3">
      <nav className="flex items-center justify-between">
        <img
          src="./images/14-classic2.png"
          alt="a beautiful classic can of spam"
          className="hover:animate-rotate360 duration-400 w-24 transform p-3 transition"
        />
        <ul className="flex items-center space-x-3">
          {menuItems.map((item) => (
            <li className="text-spamBlue p-3">
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
export default Header

// <header>
// <h1>React Kata</h1>
// <nav>
//   <p>Choose a kata to display</p>
//   <button>Fun with Numbers</button>
//   <button>Pixel Party</button>
//   <button>List Shenanigans</button>
//   <button>Neglect the Pumpkins</button>
// </nav>
// </header>
// <main>
// {activeKata === 'select' && <Select />}
// {activeKata === 'funWithNumbers' && <FunWithNumbers />}
// {activeKata === 'pixelParty' && <PixelParty />}
// {activeKata === 'listShenanigans' && <ListShenanigans />}
// {activeKata === 'neglectThePumpkins' && <NeglectThePumpkins />}
// </main>
