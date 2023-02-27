// Write your code here
// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem} = props
  const {displayText, tabId} = tabDetails

  const onTabChange = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button className="tab-button" type="button" onClick={onTabChange}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
