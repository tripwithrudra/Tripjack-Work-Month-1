// import React from 'react';
// import RecipeConainer from './RecipeConainer';

// class Main extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             query: '',
//             recipes: [],
//             loading: false,
//             error: null,
//         };
//     }

//     // [ Base URL: api.edamam.com/ ]

//     handleInputChange = (e) => {
//         this.setState({ query: e.target.value });
//     };

//     handleSearch = (e) => {
//         e.preventDefault();
//         this.fetchRecipes();
//     };

//     fetchRecipes = async () => {
//         const { query } = this.state;
//         if (!query) return;

//         // console.log("Query", query);

//         this.setState({
//             loading: true
//         })

//         const EDAMAN_APP_ID = 'f40bd20a';
//         const EDAMAN_APP_KEY = '9d07cdf996202db308ea3ff8e6938f1a';

//         // https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&type=public


//         const API_URL = `https://api.edamam.com/api/recipes/v2/?q=${query}&app_id=${EDAMAN_APP_ID}&app_key=${EDAMAN_APP_KEY}&type=public`;

//         try {
//             const response = await fetch(API_URL);
//             const data = await response.json();

//             // console.log("Recieved Data: ", data)

//             this.setState({ 
//                 recipes: data?.hits, // Setting Recieps Here 
//                 loading: false 
//             });



//         } catch (error) {
//             this.setState({ error: 'Failed to fetch recipes.', loading: false });
//         }
//     };

//     render() {
//         const { query, recipes, loading, error } = this.state;

//         return (
//             <div className="App">
//                 <h1>Search Below</h1>
//                 <form onSubmit={this.handleSearch}>
//                     <input
//                         type="text"
//                         value={query}
//                         onChange={this.handleInputChange}
//                         placeholder="Search for recipes..."
//                     />
//                     <button type="submit">Search</button>
//                 </form>

//                 {loading && <p>Loading...</p>}
//                 {error && <p>{error}</p>}

//                 <div className="recipes">
//                     <RecipeConainer recipes={recipes} />
//                 </div>
//             </div>
//         );
//     }
// }

// export default Main

import React from 'react'
import { useState } from 'react';
import RecipeConainer from './RecipeConainer';

function Main() {
    // { query, recipes, loading, error } 
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const [recipes, setRecipes] = useState([]);

    const handleInputChange = (e) => {
        // this.setState({ query: e.target.value });
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // this.fetchRecipes();
        fetchRecipes();
    };

    const fetchRecipes = async () => {
        // const { query } = this.state;
        if (!query) return;

        console.log("Query", query);

        // this.setState({
        //     loading: true
        // })
        setLoading(true)

        const EDAMAN_APP_ID = 'f40bd20a';
        const EDAMAN_APP_KEY = '9d07cdf996202db308ea3ff8e6938f1a';

        // https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&type=public


        const API_URL = `https://api.edamam.com/api/recipes/v2/?q=${query}&app_id=${EDAMAN_APP_ID}&app_key=${EDAMAN_APP_KEY}&type=public`;

        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            console.log("Recieved Data: ", data)

            // this.setState({
            //     recipes: data?.hits,
            //     loading: false
            // });
            setLoading(false);
            setRecipes(data?.hits)



        } catch (error) {
            // this.setState({ error: 'Failed to fetch recipes.', loading: false });
        }
    };

    return (
        <div className="App">
            <h1>Search Below</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search for recipes..."
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {/* {error && <p>{error}</p>} */}

            <div className="recipes">
                <RecipeConainer recipes={recipes} />
            </div>
        </div>
    );
}

export default Main