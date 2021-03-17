import { useState } from 'react';
import { connect } from 'react-redux';

const SearchPodForm = (props) => {
    const [searchValue, setSearchValue] = useState('')
    const onChange = evt => {
        setSearchValue(evt.target.value)
    }

    return (
       <form>
           <input name='search' type='text' placeholder='Search Podcast Episodes...' value={searchValue} onChange={onChange}></input>
       </form>
    )
}

export default connect(null, {})(SearchPodForm)