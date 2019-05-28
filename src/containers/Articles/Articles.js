import React, { Component } from 'react';
import { getArticles } from '../../services/rest';
import Article from '../../components/Article/Article';
import { connect } from 'react-redux';

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
        let articles = [...this.state.articles];
        if (this.props.search) {
            articles = this.state.articles.filter(article => {
                if (article.title.toLowerCase().includes(this.props.search.toLowerCase())) {
                    return article;
                }
                return null;
            })
        }
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

const mapStateToProps = state => {
    return {
        search: state.search
    }
}

export default connect(mapStateToProps)(Articles);
