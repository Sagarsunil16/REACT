const parent = React.createElement('div',{id:"parent"},[
    React.createElement('div',{id:"child1"},[
    React.createElement('h1',{},"Hi ma H1 tag of Child-1"),
    React.createElement('h2',{},"Hi ma H1 tag of Child-1")]
    ),
    React.createElement('div',{id:"child2"},[
        React.createElement('h1',{},"Hi ma H1 tag of Child-2"),
        React.createElement('h2',{},"Hi ma H1 tag of Child-2")]
    )
])

console.log(parent)

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(parent)