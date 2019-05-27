import React, { Component } from 'react';
import { getArticles } from '../../services/rest';
import Article from '../../components/Article/Article';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        getArticles().then((data) => {
            this.setState({ articles: data.results });
        });
    }

    goToDetails = (url) => () => {
        this.props.history.push(`/details?url=${url}`);
    }

    render() {
        const articles = [...this.state.articles];

        return (
            <div className="row">
                <div className="col-md-12">
                    {
                        articles.map((article, index) => {
                            return (
                                <Article key={index} article={article} goToDetails={this.goToDetails} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Articles;
