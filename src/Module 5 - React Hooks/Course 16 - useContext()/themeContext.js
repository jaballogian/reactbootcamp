import React from 'react'

const ThemeContext = React.createContext()

class ThemeContextProvider extends React.Component{
    state = {
        theme: "dark"
    }
    
    toggleTheme = () => {
        this.setState((previousState) => {
            console.log("The button is clicked")
            return{
                theme: previousState.theme === "light" ? "dark" : "light"
            }
        })
    }

    render(){
        return(
            <ThemeContext.Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export {ThemeContextProvider, ThemeContext}