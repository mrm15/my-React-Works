
const MyComponent = (props) => {
    return (
        <div>
            <h1>Here is Product #{props.match.params.id}</h1>
        </div>
    );
}

export default MyComponent;
