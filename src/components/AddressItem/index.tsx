import styles from './AddressItem.module.scss'

export type AddressItemProps = {
  item: {
    data: {}
    unrestricted_value: string
    value: string
  }
}

const AddressItem: React.FC<AddressItemProps> = ({ item }) => {
  return (
    <div className={styles.item}>
      <span>{item.value}</span>
    </div>
  )
}

export default AddressItem
