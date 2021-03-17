import { connect } from 'react-redux';

const SearchPodResults = (props) => {

    return (
        <div>
            results go here
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
          // State from API
          isLoading: state.isLoading,
          error: state.error
    }
  }

export default connect(mapStateToProps, {})(SearchPodResults)