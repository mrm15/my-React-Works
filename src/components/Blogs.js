import React, {Component} from 'react';
import queryString from "query-string";

class Blogs extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }


    queryStringToObject(queryString) {
        const pairs = queryString.substring(1).split('&');
        // → ["foo=bar", "baz=buzz"]

        var array = pairs.map((el) => {
            const parts = el.split('=');
            return parts;
        });
        // → [["foo", "bar"], ["baz", "buzz"]]

        return Object.fromEntries(array);
        // → { "foo": "bar", "baz": "buzz" }
    }

    //console.log(queryStringToObject('?foo=bar&baz=buzz'));

    componentDidMount() {

        this.setState({
            data: Object.entries(this.queryStringToObject(this.props.location.search)),//Object.entries convert Object To Array
            // data: Object.entries(queryString.parse(this.props.location.search)),//Object.entries convert Object To Array // if we install query-string
        })

    }

    logIt = (data) => {
        console.log(`%c${data}`, `padding:10px;    background: aliceblue;color: #344040;border-radius:5px`);
    }

    parseQuery = () => {
        console.log(this.props.location.search);
        const result = queryString.parse(this.props.location.search);
        console.log(result);
    }

    render() {
        return (<div>
            <h1>
                Please Show My blogs Posts...
            </h1>
            <p> in the URL `[ /blogs/:author?]` ? meanin if thats not author Please render just '/blogs' </p>
            <br/>
            <p>
                <code className="border rounded p-4 mt-4 bg-dark text-info">
                    who is author????? => {this.props.match.params.author}
                </code>
                <code className="border rounded p-4 mt-4 bg-dark text-info">
                    Query String is in props.location.search ????? => {this.props.location.search}
                </code>
                <code className="border rounded p-4 mt-4 bg-dark text-info">
                    Query String to Object {this.queryStringToObject(this.props.location.search).gender}
                </code>
            </p>
            <div
                className="border rounded p-4 mt-4 ">
                {/*{  this.logit(this.queryStringToObject(this.props.location.search))}*/}

                {this.state.data.map((k) => (<span key={k}>{k[0]} : {k[1]}<br/></span>))}
                {this.state.data.map(k => this.logIt(k))}
                <br/>
                <div dir='rtl'>

                    چون این قسمت روی کامپوننت دید مونت هست باید صفحه رفرش بشه تا دیده بده! واسه همین در قسمت پایین به
                    جای
                    لینک از تگ آ با اچ رف استفاده کردم تا رفرش بشه
                </div>
            </div>
            <br/>
            <ul className="navbar d-block ">
                <li><a className='bg-warning' href='/blogs/ali?author=mohammad&date=2022'> :author with Query String
                    blogs/ali?author=mohammad&date=2022 </a></li>
                <li><a className='bg-warning' href='/blogs/ali?author=afsane&date=2022&gender=female'> :author with
                    Query String /blogs/ali?author=afsane&date=2022&gender=femeal </a></li>
                <li><a className='bg-warning' href="/blogs/mohammad"> /blogs/mohammad </a></li>
                <li><a className='bg-warning' href="/blogs"> /blogs </a></li>
                <li><a className='bg-warning' href="/blogs/:author?"> /blogs/:author? whaaaaat?</a></li>
            </ul>

            <div dir="rtl">
                <span> حالا اون  پکیج  </span>
                <span> npm install query-string </span>
                <span>رو نصب میکنم و اینجوری چاپ میکنم. </span>
                <p>

                    <button className='btn btn-info' onClick={this.parseQuery}> Log Query String Please</button>
                </p>
            </div>


        </div>);
    }
}

export default Blogs;