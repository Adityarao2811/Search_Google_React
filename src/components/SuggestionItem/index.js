import './index.css'

const SuggestionItem = props => {
  const {destinationDetails, search} = props
  const {suggestion} = destinationDetails
  const onSearch = () => {
    search(destinationDetails)
  }

  return (
    <li className="destination-item">
      <p className="name">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onSearch}
      />
    </li>
  )
}

export default SuggestionItem
