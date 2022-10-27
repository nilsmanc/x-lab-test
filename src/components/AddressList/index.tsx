import AddressItem from '../AddressItem'

import styles from './AddressList.module.scss'

export type AddressListProps = {
  suggestions: {
    suggestions: Array<{}>
  }
}

const AddressList: React.FC<AddressListProps> = ({ suggestions }) => {
  console.log(suggestions)
  console.log(suggestions.suggestions)
  return (
    <div className={styles.list}>
      <div className={styles.title}>Адреса</div>
      <div className={styles.items}>
        {suggestions.suggestions &&
          suggestions.suggestions.map((item: any) => {
            return <AddressItem item={item} />
          })}
      </div>
    </div>
  )
}

export default AddressList
