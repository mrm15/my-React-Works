import React, {Component} from 'react';

class WannaCheckFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: [],
        }
    }

    render() {
        const {postData} = this.state;
        return (
            <div>
                <button onClick={this.getPosts}>Get Post</button>

                {postData.map(post => (
                        <div key={post.id} className='post-box'>
                            <p className='post-title'>   {post.title}   </p>
                            <p className='post-body'>   {post.body}    </p>
                        </div>
                    )
                )}
            </div>
        );
    }


    getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                this.setState({postData: json})
            });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                this.setState({postData: json})
            });
    }
}

export default WannaCheckFetch;