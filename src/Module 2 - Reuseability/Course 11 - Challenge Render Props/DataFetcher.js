import React from 'react'

class DataFetcher extends React.Component{
    state = {
        loading: false,
        data: null
    }

    componentDidMount(){
        this.setState(() => {
            return{
                loading: true
            }
        })

        fetch(this.props.url)
        .then((res) => {
            return(
                res.json()
            )
        })
        .then((data) => {
            this.setState(() => {
                return{
                    data: data,
                    loading: false
                }
            })
        })
    }

    render(){
        return(
            <div>
                {this.props.render(this.state.loading, this.state.data)}
            </div>
        )
    }
}

export default DataFetcher