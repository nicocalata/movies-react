import styles from "./Search.module.css"
import { FaSearch } from 'react-icons/fa'
import { useHistory } from "react-router-dom"
import { useQuery } from "../hooks/useQuery"

export function Search() {
  const query = useQuery();
  const search = query.get("search")

    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
    }
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
            <input 
            className={styles.searchInput}type="text" 
            value={search} 
            placeholder="Title"
            aria-label="Search Movies"
            onChange={(event) => {
              const value = event.target.value;
               history.push("/?search=" + value)

            }}
             />
              <FaSearch size={20} color="black" className={styles.searchButton}/>
        </div>
    </form>
  )
}
