function Nav() {
  const links = [
    { id: "id1", label: "Home", href: "/" },
    { id: "id2", label: "About", href: "/about" },
    { id: "id3", label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="text-center nav-bar">
      <ul className="flex justify-between px-4 my-4 py-1">
        {links.map((x) => (
          <li key={x.id} className="flex px-2 py-1">
            <a className="text-blue-500	no-underline text-sm" href={x.href}>
              {x.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
