import React from "react"
import { connect } from 'react-redux'
import { setSearchTerm } from '../../Store/Todo/actions'


const SearchForm = ({ searchTerm, setSearchTerm }) => {
  return (
    <form className="search-form">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

const mapStateToProps = ({ todo }) => ({
  searchTerm: todo.searchTerm

});

const mapDispatchToProps = {
  setSearchTerm
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
