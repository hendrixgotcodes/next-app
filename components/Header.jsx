import headerStyles from "../styles/Header.module.css"


export default function Header() {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>Developer</span> News
        </h1>
        <p className={headerStyles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore porro nam dolorum?
        </p>
    </div>
  )
}
