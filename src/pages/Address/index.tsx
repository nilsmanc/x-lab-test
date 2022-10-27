import { useState } from 'react'
import Search from '../../components/Search'
import AddressList from '../../components/AddressList'

import styles from './Address.module.scss'

const Address = () => {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const handleSearch = async () => {
    if (query.length <= 3) return setSuggestions([])
    await fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token 7f2cfde1ca25239df14258bac7ba83376bc0d8b7',
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((result) => setSuggestions(result))
      .catch((error) => console.log('error', error))
  }

  return (
    <div className={styles.wrapper}>
      <h2>Поиск адресов</h2>
      <p>Страница для поиска адресов</p>
      <Search handleSearch={handleSearch} query={query} setQuery={setQuery} />
      {/* @ts-ignore */}
      {suggestions.length !== 0 && <AddressList suggestions={suggestions} />}
    </div>
  )
}

export default Address
