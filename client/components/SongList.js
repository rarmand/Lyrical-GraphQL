import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class SongList extends Component {
    renderSongs() {
        return this.props.data.songs.map(song => {
            return (<li>{song.title}</li>);
        })
    }

    render() {
        if(this.props.data.loading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                {this.renderSongs()}
            </div>
        );
    }
}

const songsQuery = gql`
{
  songs {
    id
    title
  }
}
`;

// joining ApolloClient with Component
export default graphql(songsQuery)(SongList);