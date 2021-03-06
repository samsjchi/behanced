import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dropdown, { DropdownTrigger, DropdownContent } from './Dropdown'

function FieldNavDropdownListItem ({ field, selectedField, handleClick }) {
  return (
    <li
      style={field === selectedField ? { color: '#2b2b2b' } : null}
      onClick={() => handleClick(field)}
      key={field.id}>
      {field}
    </li>
  )
}

function FieldNavDropdownList ({ selectedField, dropdownFields, handleClick }) {
  return (
    <ul className='field-nav-dropdown'>
      {dropdownFields.map((field) => (
        <FieldNavDropdownListItem
          field={field.name}
          selectedField={selectedField}
          handleClick={handleClick}
        />
      ))}
    </ul>
  )
}

class FieldNavDropdown extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (field) {
    this.props.onSelect(field)
    this.refs.dropdown.hide()
  }

  render () {
    const { selectedField, dropdownFields, dropdownFieldIsSelected, dropdownText, onSelect } = this.props

    return (
      <Dropdown ref='dropdown'>
        <DropdownTrigger>
          <span style={dropdownFieldIsSelected ? { color: '#2b2b2b' } : null}>
            {dropdownText}
          </span>
          <svg class='more-arrow' height='10' width='10' viewBox='0 0 24 24'><path d='M12.00,19.50 L0.66,8.29 C-0.22,7.43 -0.22,6.02 0.66,5.15 C1.54,4.28 2.96,4.28 3.84,5.15 L12.00,13.21 L20.16,5.15 C21.04,4.28 22.46,4.28 23.34,5.15 C24.22,6.02 24.22,7.43 23.34,8.29 L12.00,19.50 Z'></path></svg>
        </DropdownTrigger>
        <DropdownContent>
          {
            !dropdownFields
            ? <p>Loading...</p>
            : <FieldNavDropdownList
                selectedField={selectedField}
                dropdownFields={dropdownFields}
                handleClick={this.handleClick}
              />
          }
          <div className='dropdown__triangle'>
            <svg width='24' height='24'><path d='M0 0 L12 12 L0 24'></path></svg>
          </div>
        </DropdownContent>
      </Dropdown>
    )
  }
}

FieldNavDropdown.propTypes = {
  selectedField: PropTypes.string.isRequired,
  dropdownFields: PropTypes.array.isRequired,
  dropdownFieldIsSelected: PropTypes.bool.isRequired,
  dropdownText: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default FieldNavDropdown
