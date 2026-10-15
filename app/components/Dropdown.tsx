interface Title {
    title: string
}

const Dropdown = ({ title }: Title) => {
  return (
    <div className="hover:text-[dodgerblue]">{title}</div>
  )
}

export default Dropdown